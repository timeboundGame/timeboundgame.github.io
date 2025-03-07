function s(){
    const input = document.getElementById("diamond6Input");
    const button = document.getElementById("diamond6Button");
    button.onclick = () => {
        if((input.value).trim() === "2+2*2"){
            endGame(1);
        } else{
            endGame(0);
        }
    }
}