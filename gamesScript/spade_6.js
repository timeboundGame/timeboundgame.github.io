function j(){
    const spade_6Board = document.getElementById("spade_6Board");
    let count = 25;
    let html = document.createElement("div");
    function clicked(){
        count--;
        if(count <= 0){
            endGame(1);
        }
    }
    const bgcolors = ["red", "green", "blue", "yellow"];
    for(let i = 0; i < count; i++){
        const randY = ~~(Math.random() * 90) + 5;
        const randX = ~~(Math.random() * 90) + 5;
        const color = bgcolors[~~(Math.random() * bgcolors.length)];
        const div = document.createElement("div");
        div.style.left = randX + "%";
        div.style.top = randY + "%";
        div.style.backgroundColor = color;
        div.className = "spade_6Circle";
        div.onclick = () => {
            clicked();
            div.style.display = "none";
        }
        html.appendChild(div);
    }
    spade_6Board.appendChild(html);

}