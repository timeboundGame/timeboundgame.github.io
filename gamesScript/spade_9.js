function m(){
    const area = document.getElementById("area9");
    const dot = document.getElementById("dot9");
    const button = document.getElementById("stopButton9");
    area.style.left = (Math.random() * 95 )+"%"
    dot.className = "animationDotGo";
    button.onclick = () => {
        dot.style.left = dot.offsetLeft + "px";
        const l = area.offsetLeft;
        const r = l + 40;

        const l2 = dot.offsetLeft;
        const r2 = l2 + 26;
        setTimeout(()=>{
            if((l < l2 && l2 <= r) || (l < r2 && r2 <= r)){
                endGame(1);
            } else{
                endGame(0);
            }
        }, 1000)
        dot.className = "";
    }
}