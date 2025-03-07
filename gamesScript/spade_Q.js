let spadeQinterval;
function p(){
    if(spadeQinterval){
        clearInterval(spadeQinterval);
    }
    const img = document.getElementById("fireSpade");
    const spadeChance = document.getElementById("spadeChance");
    const minusBulletSpade = document.getElementById("minusBulletSpade");
    const fireTimeSpade = document.getElementById("fireTimeSpade");
    let sec = 10;
    let bullet = 6;
    let stop = false;
    if(!img){
        createAlert("ERROR LOADING ", 0);
        return;
    }
    img.src = "./images/spadesQ/default.png";

    fireTimeSpade.innerText = sec;
    spadeQinterval = setInterval(() => {
        sec--;
        fireTimeSpade.innerText = sec;
        if(sec <= 0){
            clearInterval(spadeQinterval);
            bullet = Math.round(bullet);
            spadeChance.innerText = bullet;
            stop = true;
            boom();
        }
    }, 1000);
    function setBullet(){
        bullet = Math.max(bullet, 0);
        spadeChance.innerText = bullet.toFixed(2);
    }
    setBullet();
    function end(type){
        setTimeout(() => {
            endGame(type);
        }, 1000)
    }
    function boom(){
        const loss = Math.random() < bullet * 1 / 6;
        if(loss){
            img.src = "./images/spadesQ/fire.gif";
            end(0);
        } else{
            img.src = "./images/spadesQ/fail.gif";
            end(1);
        }
    }
    minusBulletSpade.onclick = () => {
        if(stop){
            return;
        }
        bullet -= 0.05;
        setBullet();
    }

}