function i() {
    var audio = new Audio('../music/musicClub1.mp3');
    audio.loop = true;
    audio.play();
    let grid = document.getElementById("gridA");
    
    const size = 15;
    const mineCount = 50;
    let gameOver = false;
    generateGrid();

    function generateGrid() {
        grid.innerHTML = "";
        for (let i = 0; i < size; i++) {
            let row = grid.insertRow(i);
            for (let j = 0; j < size; j++) {
                let cell = row.insertCell(j);
                cell.onclick = function () { clickCell(this); };
                cell.setAttribute("data-mine", "false");
            }
        }
        addMines();
    }
    
    function addMines() {
        let minesPlaced = 0;
        while (minesPlaced < mineCount) {
            let row = Math.floor(Math.random() * size);
            let col = Math.floor(Math.random() * size);
            let cell = grid.rows[row].cells[col];
            if (cell.getAttribute("data-mine") === "false") {
                cell.setAttribute("data-mine", "true");
                minesPlaced++;
            }
        }
    }
    
    function revealMines() {
        if(gameOver){
            return;
        }
        endGame(0);
        audio.pause();
        gameOver = true;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let cell = grid.rows[i].cells[j];
                if (cell.getAttribute("data-mine") === "true") {
                    cell.classList.add("mine");
                }
            }
        }
    }
    
    function checkLevelCompletion() {
        if(gameOver){
            return;
        }
        const clicked = document.querySelectorAll(".clicked");
        if(clicked.length === size * size - mineCount){
            endGame(1); //hacker if you try to call this function you are on .... XD aveli jisht qaqi mej
            audio.pause();
            gameOver = true;
        }
    }
    
    function clickCell(cell) {
        if (cell.getAttribute("data-mine") === "true") {
            revealMines();
            return;
        }
        if (cell.classList.contains("clicked")) return;
        
        cell.classList.add("clicked");
        let mineCount = 0;
        let cellRow = cell.parentNode.rowIndex;
        let cellCol = cell.cellIndex;

        for (let i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, size - 1); i++) {
            for (let j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, size - 1); j++) {
                if (grid.rows[i].cells[j].getAttribute("data-mine") === "true") mineCount++;
            }
        }
        cell.innerHTML = mineCount > 0 ? mineCount : "";
        
        if (mineCount === 0) {
            for (let i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, size - 1); i++) {
                for (let j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, size - 1); j++) {
                    let adjacentCell = grid.rows[i].cells[j];
                    if (!adjacentCell.classList.contains("clicked")) {
                        clickCell(adjacentCell);
                    }
                }
            }
        }
        checkLevelCompletion();
    }
}