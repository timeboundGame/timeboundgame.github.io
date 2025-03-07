function aa(){
    const buttonDiamondA = document.querySelectorAll(".buttonDiamondA");
    const diamondAPoint = document.getElementById("diamondAPoint");
    const musicW = new Audio("../music/wednesday.mp3");
    let activeIndex = 0;
    let point = 0;
    if(musicW.play){
        musicW.play();
    }
    const timer = setTimeout(() => {
        musicW.pause();
    }, 3 * 60 * 1000) // 3 minute
    diamondAPoint.innerText = point;
    buttonDiamondA.forEach((elm, i) => {
        elm.onclick = () => {
            if(i === activeIndex){
                point++;
                diamondAPoint.innerText = point;
                if(point >= 30){
                    endGame(1);
                    musicW.pause();
                    clearTimeout(timer);
                }
            } else{
                point = 0;
                diamondAPoint.innerText = point;
            }
            activeIndex++;
            if(activeIndex >= 5) {
                activeIndex = 0;
            }
        }
    })
}