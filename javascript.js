let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}   
// function getHumanChoice(){
//     let choice = prompt("rock, paper, scissors");
//     return choice.toLowerCase();
// }

function playRound(hChoice){
        let cChoice = getComputerChoice();
    if (cChoice == hChoice){
        console.log("Draw");
    }
    else if(((cChoice == "rock") && (hChoice == "scissors")) || ((cChoice == "paper") && (hChoice == "rock")) || ((cChoice == "scissors") && (hChoice == "paper"))){
        console.log("You lose! " + cChoice + " beats " + hChoice);
        computerScore++;
    }
    else{
        console.log("You win! " + hChoice + " beats " + cChoice);
        humanScore++;
    }
}
// function playGame(){
//     for (let i = 0; i < 5; i++){
//         playRound();
//     }
//     console.log("Final score is " + humanScore + " to human, and " + computerScore + " to computer");
// }
const rockRound = document.querySelector("#rock")
rockRound.addEventListener("click", () => {
    playRound("rock");
})
const paperRound = document.querySelector("#paper")
paperRound.addEventListener("click", () => {
    playRound("paper");
})
const scissorsRound = document.querySelector("#scissors")
scissorsRound.addEventListener("click", () => {
    playRound("scissors");
})