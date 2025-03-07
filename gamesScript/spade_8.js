function l(){
    const spade_8Board = document.getElementById("spade_8Board");

    const div = document.createElement("div");
    const bgcolors = ["red", "green", "blue", "yellow"];
    div.style.transition = "0.3s";
    function change(){
        const randY = ~~(Math.random() * 90) + 5;
        const randX = ~~(Math.random() * 90) + 5;
        const color = bgcolors[~~(Math.random() * bgcolors.length)];

        div.style.left = randX + "%";
        div.style.top = randY + "%";
        div.style.backgroundColor = color;
        div.className = "spade_6Circle";
    }
    const go = setInterval(() => {
        change();
    }, 200)
    div.onclick = () => {
        clearInterval(go);
        endGame(1);
    }

    spade_8Board.appendChild(div);
}