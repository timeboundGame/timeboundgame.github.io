function t(){
    const backgroundDiamond7 = document.getElementById("backgroundDiamond7");
    const adminNumber = 5 * 1109;
    backgroundDiamond7.innerText = adminNumber;
    const input = document.getElementById("diamond7Input");
    const button = document.getElementById("diamond7Button");
    button.onclick = () => {
        if((input.value).trim() == adminNumber){
            endGame(1);
        } else{
            endGame(0);
        }
    }
}