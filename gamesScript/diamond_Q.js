function y(){
    const alertText = document.getElementById("alertText");
    const alert = document.getElementById("alert");
    const win = document.getElementById("win");
    const buttonContactdiamondQ = document.getElementById("buttonContactdiamondQ");
    const buttonDiamondQOk = document.getElementById("buttonDiamondQOk");
    const gameTop = document.getElementById("gameTop");
    const questionGame = document.getElementById("questionGame");
    const timerElm = document.getElementById("timerElm");

    gameTop.classList.add("hideImportant");
    questionGame.classList.add("hideImportant");
    timerElm.classList.add("hideImportant");

    alertText.innerText = "Congratulations! You win and receive 99999999999999999999999999 minutes.";
    alert.classList.remove("closeAlert");
    alert.classList.remove("errAlert");
    alert.classList.add("openAlert");
    function closeAlertF(){
        alert.classList.add("closeAlert");
        alert.classList.remove("openAlert");
    }
    timeout = setTimeout(closeAlertF, 5000);

    win.classList.remove("hide")
    const winMusic = new Audio("../music/win.mp3");
    winMusic.play();
    function showYElms(){
        gameTop.classList.remove("hideImportant");
        questionGame.classList.remove("hideImportant");
        timerElm.classList.remove("hideImportant");
    }
    buttonDiamondQOk.onclick = () => {
        showYElms();
        endGame(0);
    }
    buttonContactdiamondQ.onclick = () => {
        showYElms();
        endGame(1);
    }
}