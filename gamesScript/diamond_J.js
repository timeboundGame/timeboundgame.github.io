let intervalXfn;
function x(){
    const elm = document.getElementById("buttonDiamondJ");
    if(intervalXfn){
        clearInterval(intervalXfn);
    }
    let red = true;
    elm.style.backgroundColor = red ? "red" : "green";
    intervalXfn = setInterval(() => {
        red = !red;
        elm.style.backgroundColor = red ? "red" : "green";
    }, 3000)
    elm.onclick = () => {
        if(red){
            endGame(0);
        } else{
            endGame(1);
        }
    }
}