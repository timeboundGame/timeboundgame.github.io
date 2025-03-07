function u(){
    const input = document.getElementById("diamond8Input");
    const button = document.getElementById("diamond8Button");
    const audio = new Audio("../music/squidGame.mp3");
    const interval = setInterval(() => {
        audio.play();
        setTimeout(() => {
            audio.pause();
        }, 2000);
    }, 5000)
    button.onclick = () => {
        clearInterval(interval);
        if(((input.value.replaceAll(" ", '')).trim()).toLowerCase() === "squidgame"){
            endGame(1);
        } else{
            endGame(0);
        }
    }
}
