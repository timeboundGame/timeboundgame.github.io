function g(){
    const correctElm = document.getElementById("clubs8correct");
    const buttons = document.querySelectorAll(".club8Buts");
    const quenstionElm = document.getElementById("clubs8quenstion");
    let quenstion = "";
    let answer = "";
    let correct = 0;
    function generateQ(){
        const random1 = Math.floor(Math.random() * 100);
        const random2 = Math.floor(Math.random() * 100);
        const sign = ['-', '+', '/', '*'][Math.floor(Math.random() * 4)];
        quenstion = `${random1} ${sign} ${random2}`;
        quenstionElm.innerText = `${quenstion} = `;
        answer = eval(quenstion);
        const answers = [answer];
        function add(){
            answers.push(Math.floor(Math.random() * 100));
        }
        add();
        add();
        add();
        function swap(i){
            const rand = Math.floor(Math.random() * 4);
            if(i === rand){
                return;
            }
            let t = answers[i];
            answers[i] = answers[rand];
            answers[rand] = t;
        }
        swap(0);
        swap(1);
        swap(2);
        swap(3);
        buttons.forEach((e, i) => {
            e.innerText = answers[i];
        })
    }
    
    buttons.forEach((el) => {
        el.onclick = () => {
            if(el.innerText == answer){
                correct++;
                correctElm.innerText = correct;
                if(correct >= 20){
                    endGame(1);
                }
            }
            generateQ();
        }
    })
    generateQ();

}
