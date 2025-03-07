function e(){
    const button = document.getElementById("clubs_6_button");
    const scoreElm = document.getElementById("clubs_6_score");
    let score = 0;
    function setScore(){
        scoreElm.innerText = score;
        if(score > 500){
            endGame(1);
        }
    }
    scoreElm.addEventListener("click", () => {
        score += (+scoreElm.innerText || 0);
        setScore();
    })
    button.addEventListener("click", () => {
        score++;
        setScore();
    })

}
