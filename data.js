let dataCards;
(() => {
    class Game{
        constructor(card, time, winMinute, gameOverMinusScore, attempts, title, f){
            this.card = card;
            this.time = time;
            this.gameOverMinusScore = gameOverMinusScore;
            this.winMinute = winMinute;
            this.title = `${title} You have ${attempts} attempt${attempts > 1 ? 's' : ''}  ${time > 0 ? "and " + time + " minutes" : ''}. (Win: ${winMinute} minutes, Loss: -${gameOverMinusScore} minutes)`;
            this.f = f;
        }
    }
    const club = [
        new Game("clubs_6", 3, 120, 30, 1, "Solve this equation.", a), 
        new Game("clubs_7", 10, 2.5 * 60, 60, 1, `Look at the following sequence of colors, which is based on a certain pattern: </br>🔵 3 → 🟩 5 → 🔵 8 → 🟩 10 → 🔵 13 → ?</br>You need to find the next element in the sequence based on the pattern in which the colors change.</br> Question: What color will be next in the sequence? (🔵 | 🟩)`, b),
        new Game("clubs_8",  30, 2.5 * 60, 60 * 1.5, 1, `You see a mysterious digital code on the screen. It follows a certain hidden rule. Your task is to determine the logic of the code and choose the correct answer. It can be a simple pattern, <strong style="text-decoration: underline;">time as a code (hour:minute)</strong>, digit rearrangement, difference-based code, and more...`, c),
        new Game("clubs_9", 10, 2 * 60, 60 * 2, Infinity, `Simon Challenge is a memory-based game where players must repeat an increasingly complex sequence of colors and sounds. The challenge lasts 10 minutes, and players have infinite attempts to reach the highest possible sequence length.`),
        new Game("clubs_10", 2, 2 * 60 + 10, 60 * 2.5, 0, "Your goal is to press the button 500 times.", e),
        new Game("clubs_J", 10, 2 * 60 + 20, 60 * 3, 10, "The objective of the game is for the player to guess the secret number generated by the computer. After each guess, the computer will indicate whether the guessed number is higher or lower than the secret number. The player needs to keep guessing until they find the correct number.", f),
        new Game("clubs_Q", 10, 2 * 60 + 30, 60 * 4, Infinity, "The goal of the game is to answer 20 math questions correctly within 2 minutes. If the player answers 20 questions correctly, they win. If they fail to do so within the time limit, they lose. (LEVEL 1)", g),
        new Game("clubs_K", 1, 2 * 60 + 30, 60 * 4 + 10, Infinity, "Memery Game", h),
        new Game("clubs_A", 60, 3 * 60 + 30, 60 * 5, 1, "PLAY GAME", i),
    ];
    const heart = [];
    const spade =[
        new Game("spades_6", 0.3, 120, 30, Infinity, "The goal of the game is to click all the buttons.", j),
        new Game("spades_7", 1, 2.5 * 60, 60, 1, "The goal of the game is to click 50 buttons as quickly as possible.", k),
        new Game("spades_8", 1, 120, 60 * 1.5, Infinity, "The goal of the game is to click the moving dot", l),
        new Game("spades_9", 1, 130, 60 * 2, 1, "The goal of the game is to stop the moving dot inside the green area by clicking at the right moment. The dot moves across the screen, and the player must time their click perfectly.", m),
        new Game("spades_10", 0.3, 130, 60 * 2.5, 1,  "In this game, your goal is to stop the timer as close to 10.00 seconds as possible. Press the \"Start\" button to begin the countdown, and then press \"Stop\" when you think exactly 10 seconds have passed.You win if you stop the timer within a 200-millisecond margin of error (between 9.80 and 10.20 seconds).", n),
        new Game("spades_J", 1, 150, 60 * 3, 1,  "Your goal is to cross the finish line by moving only when the light is green. If you move while the light is red, you lose immediately!", o),
        new Game("spades_Q", 0, 150, 60 * 5, 1,  "In this game, you have 10 seconds to click the button as many times as possible to reduce the number of bullets in the chamber, increasing your chances of survival.", p),
        new Game("spades_K", 5, 160, 60 * 6, Infinity,   "In this game, your goal is to fill the vase with blood before time runs out. You must act quickly to complete the task and win.", q),
        new Game("spades_A", 0, 200, 60 * 6.5, Infinity,   "<span style='color: red'>In this game, you must click faster than the Admin to win. The Admin will also be clicking, and your goal is to outclick them before time runs out! </span>", r),
    ];
    const diamond = [
        new Game("diamonds_6", 0.3, 120, 30, 1, "'2+2*2'", s),
        new Game("diamonds_7", 1, 2.5 * 60, 60, 1, "Find Password.", t),
        new Game("diamonds_8", 1, 2.5 * 60, 60, 1, "Find Password.", u),
        new Game("diamonds_9", 1,  60, 60 * 3, 1, "Choose .", v),
        new Game("diamonds_10", 1,  60 * 3, 60 * 3.5, Infinity, "", w),
        new Game("diamonds_J", 1,  60 * 3.5, 60 * 4, 1, "Click the button to win.", x),
        new Game("diamonds_Q", 0,  60 * 5, 60 * 5, 1, "", y),
        new Game("diamonds_K", 1,  60 * 5, 60 * 6, Infinity, "Press the button 5 times to win.", z),
        new Game("diamonds_A", 3,  60 * 5.5, 60 * 7, Infinity, "You see five buttons on the screen. Your goal is to reach 30 points by clicking the correct button.", aa),
    ];
    dataCards = [heart, club, diamond, spade];
})();

