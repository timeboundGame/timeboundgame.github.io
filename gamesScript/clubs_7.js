function a(){
    const input = document.getElementById("inputClubs2");
    const button = document.getElementById("submitClubs2");

    button.onclick = () => {
        if(+input.value === 6){
            endGame(1);
        } else{
            endGame(0);
            input.value = "";
        }
        
    }
}
