const buttonClub5 = document.getElementById("startClubs_5");
function d(){
    const levelClubs_5 = document.getElementById("levelClubs_5");
    const blocks = document.querySelectorAll("#clubs_9 .blocks");
    let onShow = false;
    let stopGame = false;
    let level = 1;
    let i_th = 0;
    let queue = [];
    function addRandom(){
        queue.push(blocks[Math.floor(Math.random() * blocks.length)])
    }
    function render(){
        if(level > 10){
            stopGame = true;
            endGame(1);
            return;
        }
        levelClubs_5.innerText = level;
    }
    function showAnimation(){
        if(stopGame){
            return;
        }
        onShow = true;
        i_th = 0;
        let inter = setInterval(() => {
            queue[i_th].classList.add("clubs_5Light");
            setTimeout(() => {
                queue[i_th++].classList.remove("clubs_5Light");
                if(i_th >= queue.length){
                    clearInterval(inter);
                    i_th = 0;
                    onShow = false;
                    return;
                }
            }, 900)
        }, 1000)
    }
    blocks.forEach((e) => {
        e.onclick = () => {
            if(!onShow && !stopGame){
                e.classList.add("clubs_5Light");
                setTimeout(() => {
                    e.classList.remove("clubs_5Light");
                }, 200)
                if(queue[i_th] == e){
                    i_th++;
                } else{
                    i_th = 0;
                    level = 1;
                    queue = [];
                    addRandom();
                    render();
                    showAnimation();
                    return;
                }
                if(i_th >= queue.length){
                    addRandom();
                    level++;
                    render();
                    showAnimation();
                    i_th = 0;
                    return;
                }
            }
            
        }
    })
    addRandom();
    showAnimation();
    hide(buttonClub5);

}


buttonClub5.onclick = d;