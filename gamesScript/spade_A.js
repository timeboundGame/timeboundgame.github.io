let intervalRfn;
function r(){
    if(intervalRfn){
        clearInterval(intervalRfn);
    }
    let userScore = 0;
    let adminScore = 0;
    const music = new Audio("../music/vivaldi.mp3");
    if(music){
        music.play();
    }
    const spadeAButton = document.getElementById("spadeAButton");
    const spadeAuserScore = document.getElementById("spadeAuserScore");
    const spadeAadminScore = document.getElementById("spadeAadminScore");
    const timeSpadeA = document.getElementById("timeSpadeA");
    let time = 60;
    timeSpadeA.innerText = time;
    let timeInter = setInterval(() => {
        time--;
        timeSpadeA.innerText = time;

        if(time <= 0){
            clearInterval(intervalRfn);
            clearInterval(timeInter);
            if(music){
                music.pause();
            }
            if(userScore > adminScore){
                endGame(1);
            } else{
                endGame(0);
            }
        }
    }, 1000)
    intervalRfn = setInterval(() => {
        adminScore += Math.floor(Math.random() * 7) + 1;
        update();
    }, 400)
    function update(){
        spadeAuserScore.innerText = userScore;
        spadeAadminScore.innerText = adminScore;
    }
    update();
    spadeAButton.onclick = () => {
        userScore++;
        update();
    }
}