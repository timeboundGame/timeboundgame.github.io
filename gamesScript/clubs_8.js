function c(){
    const elementsPlus = document.querySelectorAll("#clubs_8 .plus");
    const elementsMinus = document.querySelectorAll("#clubs_8 .minus");
    const inputs = document.querySelectorAll("#clubs_8 input");
    const sub = document.getElementById("submitClubs4");

    elementsPlus.forEach((e, i) => {
        e.onclick = () => {
            inputs[i].value = +inputs[i].value + 1 >= 10 ? 0 : +inputs[i].value + 1;
        }
    })
    elementsMinus.forEach((e, i) => {
        e.onclick = () => {
            inputs[i].value = +inputs[i].value - 1 < 0 ? 9 : +inputs[i].value - 1;
        }
    })
    sub.onclick = () => {
        const date = new Date();
        const val = inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value;
        let h = date.getHours() + '';
        let m = date.getMinutes() + '';
        if(h.length <= 1){
            h = '0' + h;
        }
        if(m.length <= 1){
            m = '0' + m;
        }
        if(val == h+m || val == h+(m-1)){// can change be 
            endGame(1);
        } else{
            endGame(0);
        }
    }
}
