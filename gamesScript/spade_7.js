function k(){
    const spade_6Board = document.getElementById("spade_7Board");
    let count = 50;
    let html = document.createElement("div");
    const spades_7Text = document.getElementById("spades_7Text");
    function clicked(){
        count--;
        if(count <= 0){
            endGame(1);
        }
    }
    const div = document.createElement("div");
    const bgcolors = ["red", "green", "blue", "yellow"];
    function change(){
        spades_7Text.innerText = count;
        const randY = ~~(Math.random() * 90) + 5;
        const randX = ~~(Math.random() * 90) + 5;
        const color = bgcolors[~~(Math.random() * bgcolors.length)];
        
        div.style.left = randX + "%";
        div.style.top = randY + "%";
        div.style.backgroundColor = color;
        div.className = "spade_6Circle";
    }
    change();
    div.onclick = () => {
        clicked();
        change();
    }
    html.appendChild(div);


    spade_6Board.appendChild(html);
}