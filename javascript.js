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
const displayWinner = document.querySelector("#displayWinner");

const displayResults = document.querySelector("#displayResults");

const displayFinalWinner = document.querySelector("#displayFinalWinner");
displayResults.textContent = 
"Final score is " + humanScore + " to human, and " + computerScore + " to computer";

function playRound(hChoice){
    let cChoice = getComputerChoice();
    if (cChoice == hChoice){
        displayWinner.textContent = "Draw";
        displayResults.textContent = 
        "The score is " + humanScore + " to human, and " + computerScore + " to computer";
    }
    else if(((cChoice == "rock") && (hChoice == "scissors")) ||
     ((cChoice == "paper") && (hChoice == "rock")) ||
     ((cChoice == "scissors") && (hChoice == "paper"))){
        displayWinner.textContent = "You lose! " + cChoice + " beats " + hChoice;
        computerScore++;
        displayResults.textContent = 
        "The score is " + humanScore + " to human, and " + computerScore + " to computer";
    }
    else{
        displayWinner.textContent ="You win! " + hChoice + " beats " + cChoice;
        humanScore++;
        displayResults.textContent = 
        "The score is " + humanScore + " to human, and " + computerScore + " to computer";
    }
    if (computerScore == 5 || humanScore == 5){
        if (humanScore == 5){
            displayFinalWinner.textContent = "Human won!";
        }else {
            displayFinalWinner.textContent = "Computer won!";
        }
    }
}

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
