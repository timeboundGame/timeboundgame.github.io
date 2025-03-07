function f(){
    const attemptsElm = document.getElementById("game_clubs7attempts");
    const buttonCheck = document.getElementById("game_clubs7check");
    const quenstionsElm = document.getElementById("game_clubs7AnswerOnQuesntion");
    const input = document.getElementById("game_clubs7");

    let attempts = 10;
    let randomNumber = Math.floor(Math.random() * 1000) - 500;
    buttonCheck.onclick = () => {
        const i = +(input.value);
        attempts--;
        if(isNaN(i)){
            quenstionsElm.innerText = "NO NUMBER";
        } else{
            if(i == randomNumber){
                endGame(1);
            } else if(i < randomNumber){
                quenstionsElm.innerText = "📉 Too low!";
            } else{
                quenstionsElm.innerText = "📈 Too high!";
            }
        }
        if(attempts <= 0){
            endGame(0);
            attempts = 10;//to next round
            quenstionsElm.innerText = "";
            randomNumber = Math.floor(Math.random() * 1000) - 500; // new generation to not hack (why you see code hey you nigga :)  )
        }
        attemptsElm.innerText = attempts;
    }
}
