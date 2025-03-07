function z(){
    let click = 5;
    const buttonDiamondK = document.getElementById("buttonDiamondK");
    buttonDiamondK.style.opacity = 1;
    buttonDiamondK.onclick = () => {
        click--;
        if(click <= 0){
            endGame(1);
        }
        buttonDiamondK.style.opacity = 0;
    }
}
// z();