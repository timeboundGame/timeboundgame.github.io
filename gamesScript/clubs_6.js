function b(){
    const clubs3Inp1 = document.getElementById("clubs3Inp1");
    const clubs3Inp2 = document.getElementById("clubs3Inp2");
    let i = 3;
    clubs3Inp1.onclick = () => {
        endGame(1);
    }
    clubs3Inp2.onclick = () => {
        endGame(0);
    }
}
