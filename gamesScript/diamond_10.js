let intervalWFn;
function w(){
    if(intervalWFn){
        clearInterval(intervalWFn);
    }
    const timerDiamond10 = document.getElementById("timerDiamond10");
    const clickDiamond10 = document.getElementById("clickDiamond10");
    const buttonDiamond10 = document.getElementById("buttonDiamond10");
    let timer = 60;
    let click = 20;
    timerDiamond10.innerText = timer;
    clickDiamond10.innerText = click;
    intervalWFn = setInterval(() => {
        timer--;
        timerDiamond10.innerText = timer;
        if(timer <= 0){
            clearInterval(intervalWFn);
            endGame(1);
        }
    }, 1000)
    buttonDiamond10.onclick = () => {
        click--;
        clickDiamond10.innerText = click;
        if(click <= 0){
            clearInterval(intervalWFn);
            endGame(0);
        }
    }
}