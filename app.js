let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score")

const compChoice  = () =>{

    const options = ["rock","paper","scissor"];
    const randoms = Math.floor(Math.random()*3);                            //generate numbers less than that of number we multiplied;
    return options[randoms];

}

const showWin = (userWin) => {
    if(userWin) {
        console.log("You win!!!")
        msg.innerText = "You win!!!"
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreP.innerText = userScore;
    } else {
        console.log("You lost!!!")
        msg.innerText ="You lost!!!"
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreP.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log("userChoice: ",userChoice)
    //now computer choice:
    const skynet = compChoice();
    console.log("computerChoice: ",skynet)

    if(userChoice === skynet) {
        console.log("It was a draw!!!");
        msg.innerText = "It was a draw!!!"
        msg.style.backgroundColor = "#0853b1";
    } else {
        let userWin =true;
        if(userChoice === "rock") {
            userWin = skynet === "paper"? false: true;
        } else if(userChoice === "paper") {
            userWin = skynet==="scissor"? false: true;
        } else {
            userWin = skynet ==="rock"? false: true;
        }
        showWin(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was cliceke", userChoice)

        playGame(userChoice);
    })
})
