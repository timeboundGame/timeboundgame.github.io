let timerInterval10;
let timerTimout10;
function n(){
    const timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.style.color = "black";
    if(timerInterval10) {
        clearInterval(timerInterval10);
    }
    if(timerTimout10){
        clearTimeout(timerTimout10);
    }
    let startTime = Date.now();
    timerInterval10 = setInterval(() => {
        let elapsedTime = (Date.now() - startTime) / 1000;
        timeDisplay.textContent = `Time: ${elapsedTime.toFixed(2)}s`;
    }, 10);
    timerTimout10 = setTimeout(() => {
        clearInterval(timerInterval10);
    }, 20000) //in 20 second stop interval

    document.getElementById("stopButton").onclick = () => {
        document.getElementById("stopButton").onclick = null;
        clearInterval(timerInterval10);
        let finalTime = (Date.now() - startTime) / 1000;
        timeDisplay.textContent = `Final Time: ${finalTime.toFixed(2)}s`;
        clearTimeout(timerTimout10);
        function end(type){
            if(type){
                timeDisplay.style.color = "green";
            } else{
                timeDisplay.style.color = "red";
            }
            setTimeout(() => {
                endGame(type);
            }, 2000)
        }
        if (finalTime >= 9.8 && finalTime <= 10.2) {
            end(1);
        } else {
            end(0);
        }

    };
}
// n();