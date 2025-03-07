let intervalQFn;
function q(){
    const fillvaseButtonK = document.getElementById("fillvaseButtonK");
    const fillvaseSpadeK = document.getElementById("fillvaseSpadeK");
    let procent = 0;
    if(intervalQFn){
        clearInterval(intervalQFn);
    }
    intervalQFn = setInterval(() => {
        if(procent > 0) {
            procent--;
            update();
        }
    }, 200);
    function update(){
        if(procent >= 100){
            clearInterval(intervalQFn);
            endGame(1);
        }
        fillvaseSpadeK.style.height = procent + "%";
    }
    update();
    fillvaseButtonK.onclick = () => {
        procent++;
        update();
    }
}
