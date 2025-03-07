// HELLO "HACKER" please play without any cheating



if(!(Telegram.WebApp.isFullscreen)){
    try{
        Telegram.WebApp.requestFullscreen();
        Telegram.WebApp.exitFullscreen();
    }catch(e){
        document.body.innerHTML = "<h1 style='font-size: 80px'>GO TO MOBILE VERSION</h1>"; //nigga not see code
    }
}
class Apps{
    constructor(n, url, href="", clickF = "", moreClasses = ""){
        this.name = n;
        this.imageUrl = "./images/" + url;
        this.hrefDiv = href;
        this.clickF = clickF;
        this.moreClasses  = moreClasses;
    }
}


// heartCollect, clubCollect, diamondCollect, spadesCollect
 // 0             1            2               3
let cards = [new Array(9).fill(false), new Array(9).fill(false), new Array(9).fill(false), new Array(9).fill(false)];
if(localStorage.getItem("data")){
    cards = JSON.parse(localStorage.getItem("data"));
}

const openAppEffect = document.getElementById("openAppEffect");
const circleBottomPhone = document.getElementById("circleBottomPhone");
const errApp = document.getElementById("error");
const alert = document.getElementById("alert");
const alertText = document.getElementById("alertText");
const closeAlert = document.getElementById("closeAlert");
const gameTop = document.getElementById("gameTop");
const questionGame = document.getElementById("questionGame");
const mainMusic = new Audio("./music/mainMusic.mp3");
mainMusic.loop = true;
mainMusic.volume = 0.3;
let played = false;
document.onclick = () => {
    if(played){
        return;
    }
    mainMusic.play();
    played = true;
}
const buttonBackToGame = document.getElementById("buttonBackToGame");
const gameLevel = document.getElementById("gameLevel");

const win = document.getElementById("win");
const loss = document.getElementById("loss");

const notificationMusic = new Audio("./music/notification.mp3");
const winMusic = new Audio("./music/win.mp3");
const every5minutenote = new Audio("./music/every5minutenote.mp3");
const registrationClosed = new Audio("./music/audio/registerClosed.mp3");
const levelGameAudio = new Audio("./music/audio/levelGame.wav");
let canPlay = true;


let noteminute = null;
let sound = null;

const timerElm = document.getElementById("timerElm");

let timerLogic = null;

function closeAlertF(){
    alert.classList.add("closeAlert");
    alert.classList.remove("openAlert");
}
closeAlert.onclick = closeAlertF;
circleBottomPhone.onclick = () => closeApps();

function displayMainScreen(){
    const mainScreen = document.getElementById("mainscreen");
    const apps = [
        new Apps("Timer", 'timerIcon.png', 'timerScreen'), new Apps("Google Chrome", 'chrome.png', ''), new Apps("Collection", 'collection.gif', 'collection', collection),
        new Apps("Youtube", 'youtube.png', ''),
        new Apps("Game", 'game.png', 'game', '', "bgWhite gameAnim"),
        new Apps("Game Info", 'infoImage.png', 'info', '', "bgWhite"),
        new Apps("Support", 'support.png', 'support'),
    ];
    const main = document.createElement("div");
    main.className = "flex wrap";
    for(let i = 0; i < apps.length; i++){
        let {name, imageUrl, hrefDiv, clickF, moreClasses} = apps[i];
        const app = document.createElement("div");
        clickF = (clickF ? clickF : () => null);
        app.className = "apps";
        app.innerHTML = `<div class="max" style="overflow: hidden; border-radius: 10px">
            <div class="img ${moreClasses}" style="background-image: url('${imageUrl}')"></div>
        </div>
        <div>
            <p class="textCenter">${name}</p>
        </div>`

        app.onclick = () => {openApp(hrefDiv); clickF();};

        main.appendChild(app);
    }
    mainScreen.appendChild(main);
}
function closeApps(){
    const appScreens = document.querySelectorAll(".appScreen");
    appScreens.forEach((e) => {
        if(!(e.classList.contains("hide"))){
            e.classList.add("closeAppEffect");
            const childMain = e.querySelector(".main");
            if(childMain){
                childMain.classList.add('hide');
            }
            setTimeout(() => {
                e.classList.add('hide');
                e.classList.remove("closeAppEffect");
            }, 300)
        }
        
    });
}
function openApp(href){
    let hrefElm = document.getElementById(href);
    if(hrefElm == null){
        hrefElm = errApp;
    }
    openAppEffect.classList.add("openAppEffect");
    const childMain = hrefElm.querySelector(".main");
    if(childMain){
        show(childMain);
    }
    closeApps();
    setTimeout(() => {
        openAppEffect.classList.remove("openAppEffect");
        show(hrefElm);
    }, 2000) //in 2 secound close effect open
}
displayMainScreen();


function timer() {
    let endDate = new Date();
    let localEnd = localStorage.getItem("endDate");
    if(localEnd == null){
        addMinutes(60);
    } else{
        endDate = new Date(localEnd);
    }

    let timeLeft = ~~((endDate - new Date()) / 1000);
    const hourElm = document.getElementById("hour");
    const minuteElm = document.getElementById("minute");
    const secondElm = document.getElementById("secound");
    
    function updateDisplay() {
        localEnd = localStorage.getItem("endDate");
        if(localEnd == null){
            addMinutes(60);
        } else{
            endDate = new Date(localEnd);
        }
        timeLeft = ~~((endDate - new Date()) / 1000);
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;
        
        hourElm.textContent = String(hours).padStart(2, '0');
        minuteElm.textContent = String(minutes).padStart(2, '0');
        secondElm.textContent = String(seconds).padStart(2, '0');
    }
    
    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            createAlert("GAME OVER!", 0);
            canPlay = false;
        } else {
            canPlay = true;
            timeLeft--;
            updateDisplay();
        }
    }, 1000);
    
    updateDisplay();
}
timer();

function collection(){
    const heartCollect = document.getElementById('heartCollect');
    const clubCollect = document.getElementById('clubCollect');
    const diamondCollect = document.getElementById('diamondCollect');
    const spadesCollect = document.getElementById('spadesCollect');
    const collectedNums = document.getElementById('collectedNums');
    let colNums = 0;

    let htmls = ["", "", "", ""];
    const info = ["hearts_", "clubs_","diamonds_", "spades_"];
    const cardType = [ "J", "Q", "K", "A"];
    function get(index, type){
        if(index !== false &&  index !== null){
            colNums++;
        }
        const num = (index+6 > 10 ? cardType[index-5]: index+6);
        const url = `./images/playingCards/${info[type]}${num}.png`;
        return `<div class="${index === false || index == null ? 'locked' : ''} card" ${index !== false && index !== null ? 'style="background-image: url(\'' + url + '\');"' : ''} style="display: flex;justify-content: center; align-items: center;"><div style="font-size: 11px;color: red;text-align: center;">${index === false ? "LOCKED" : index === null ? "COMING SOON!" : ''}</div></div>`;
    }
    for(let i = 0; i < 9; i++){
        htmls[0] += get(cards[0][i] ? i : null, 0);
        htmls[1] +=get(cards[1][i] ? i : false, 1);
        htmls[2] += get(cards[2][i] ? i : false, 2);
        htmls[3] += get(cards[3][i] ? i : false, 3);
    }
    heartCollect.innerHTML = htmls[0];
    clubCollect.innerHTML = htmls[1];
    diamondCollect.innerHTML = htmls[2];
    spadesCollect.innerHTML = htmls[3];

    collectedNums.innerText = `${colNums} / ${9 * 4}`;
}
collection();
function hide(el){
    el.classList.add("hide");
}
function show(el){
    el.classList.remove("hide");
}
let timeout;

function createAlert(text, type = 1){
    alertText.innerText = text;
    alert.classList.remove("closeAlert");
    (type ? alert.classList.remove("errAlert") : alert.classList.add("errAlert"));
    alert.classList.add("openAlert");
    timeout = setTimeout(closeAlertF, 5000);
}

buttonBackToGame.onclick = () => {
    hide(win);
    hide(loss);
    hide(buttonBackToGame);
    show(startGamePage);
};
let random;
let randomGame;
function gameLogic(){
    const button = document.getElementById("startGameButton");
    const startGamePage = document.getElementById("startGamePage");
    const circleLoading = document.getElementById("circleLoading");
    const gameshowlevel = document.getElementById("gameshowlevel");




    button.onclick = () => {
        if(!canPlay){
            createAlert("ERROR: GAME OVER", 0);
            return;
        }
        const aviableGames = [];
        for(let i = 0; i < cards.length; i++){
            const target = cards[i];
            for(let j = 0; j < target.length; j++){
               
                if(target[j] === false){
                    const t = dataCards[i][j];
                    if(!t){
                        continue;
                    }
                    t.y = i;
                    t.x = j;
                    aviableGames.push(t);
                }
            }
        }
        if(aviableGames.length == 0){
            createAlert("ERROR: NO AVAILABLE GAMES", 0);
            return;
        }
        const rand = Math.floor(Math.random() * aviableGames.length)// test //Math.floor(Math.random() * aviableGames.length);

        random = aviableGames[rand];
        randomGame = dataCards[random.y][random.x];

        hide(startGamePage);
        hide(win);
        hide(loss);
        hide(gameTop);
        hide(buttonBackToGame);

        show(circleLoading);

        startGame(randomGame);
        
        setTimeout(() => {
            notificationMusic.play();
            gameLevel.style.backgroundImage = "url('./images/playingCards/" +randomGame.card + ".png')";
            hide(circleLoading);
            show(gameshowlevel);
            if(levelGameAudio){
                levelGameAudio.play();
            }
            setTimeout(() => {
                const gameSound = new Audio("./music/audio/" + randomGame.card + ".wav");
                if(gameSound){
                    gameSound.play();
                }
            }, 2000);
            setTimeout(() => {
                hide(gameshowlevel);
                show(gameTop);
                show(document.getElementById(randomGame.card));
                show(timerElm);
            }, 4000)
        }, 6000)// 6 second for sound
    }
    function startGame(randomGame){
        registrationClosed.play();
       setTimeout(() => {
        show(questionGame);
        const {time, title, f, card} = randomGame;
      
        questionGame.innerHTML = title; //questions
        if(f){
            f();
        }
       
        setTimer(time); //this minutes to object update games
          mainMusic.pause();
       }, 10000) // 2secound + 2 secound start game 
    }
}
gameLogic();
function addMinutes(minute){
    let endDate = new Date(localStorage.getItem("endDate") || new Date());
    endDate.setMinutes(endDate.getMinutes() + minute);
    localStorage.setItem("endDate", endDate);
}

function setTimer(minutes) {
    if(minutes <= 0){
        return;
    }
    let totalSeconds = minutes * 60;
    const timerHours = document.getElementById("timerhours");
    const timerMinutes = document.getElementById("timerminute");
    const timerSeconds = document.getElementById("timersecounds");
    noteminute = setInterval(() => every5minutenote.play(), 60000);
    
    function updateTimerDisplay() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        
        timerHours.textContent = String(hours).padStart(2, '0');
        timerMinutes.textContent = String(minutes).padStart(2, '0');
        timerSeconds.textContent = String(seconds).padStart(2, '0');
    }
    
    updateTimerDisplay();
    timerLogic = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerLogic);
            endGame(0);
            return;
        }
        totalSeconds--;
        updateTimerDisplay();
    }, 1000);
}

function endGame(type){ // if you hacker can you hack it easy peasy I can too but not do it u play have enjoyed for game :)
    if(!randomGame){
        createAlert("ERROR or TEST !!!", 0);
        return;
    }
    const games = document.querySelectorAll(".games > div");
    games.forEach((e) => hide(e));

    clearInterval(noteminute);

    hide(questionGame);
    hide(timerElm);
    hide(gameTop);
    hide(win);
    hide(loss);
    show(buttonBackToGame);
    if(timerLogic){
        clearInterval(timerLogic);
    }
    const {winMinute, gameOverMinusScore} = randomGame;
    if(type === 1){
        createAlert("Congratulations! You win and receive " + winMinute + " minutes.", 1); //win randomGame
        show(win);
        winMusic.play();
        addMinutes(winMinute);
        if(random){
            cards[random.y][random.x] = true;
            localStorage.setItem("data", JSON.stringify(cards))
        }
    } else{
        createAlert("You lost, and you lose " + gameOverMinusScore + " minutes.", 0);
        addMinutes(-gameOverMinusScore);
        show(loss);
        blooding();
    }
    mainMusic.play();
    
}

function eval(a){
    return a;
}


function test(){
    const d = document.getElementById("game");
    d.classList.remove("hide");
    const a = document.getElementById("startGamePage");
    a.classList.add('hide');
}
// test();