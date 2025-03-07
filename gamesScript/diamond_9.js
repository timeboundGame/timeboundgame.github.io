function v(){
    const diamond9Lose = document.getElementById("diamond9Lose");
    const diamond9Win = document.getElementById("diamond9Win");
    diamond9Lose.onclick = () => {
        endGame(1)
    }
    diamond9Win.onclick = () => {
        endGame(0)
    }
}