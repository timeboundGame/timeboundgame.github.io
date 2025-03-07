let intervalJSpade;
function o(){
    const user = document.getElementById("userSpadeJ");
    const button = document.getElementById("spadeJbutton");
    const light = document.getElementById("lightSpade");
    const greenLight = new Audio("../music/greenLight.mp3");
    const redLight = new Audio("../music/redLight.mp3");
    if(!(greenLight.play)){
        greenLight.play = () => null;
    }
    if(!(redLight.play)){
        redLight.play = () => null;
    }
    greenLight.play();

    let l = 1;
    let go = 5;
    if(intervalJSpade){
        clearInterval(intervalJSpade);
    }
    intervalJSpade = setInterval(() => {
        if(Math.random() < 0.5){
            l = !l;
            if(l){
                greenLight.play()
            } else{
                redLight.play()
            }
            light.style.backgroundColor = l ? "green" : "red";
            show(light);
            setTimeout(() => {
                hide(light);
            }, 1000)
        }
    }, 2000)
    user.style.left = go + '%';
    button.onclick = () => {
        if(!l){
            clearInterval(intervalJSpade);
            endGame(0);
            return;
        }
        go += 1;
        if(go >= 90){
            clearInterval(intervalJSpade);
            endGame(1);
        }
        user.style.left = go + '%';
    }
}