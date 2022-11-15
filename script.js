//function to return computer choice
function getComputerChoice (range = 3){
    let randomNumber =  Math.floor(Math.random()*range); // Generate random number between 1 and 3
    // based on random number generated, assign rock, paper or scissors
    if (randomNumber < 1){
        return 'Rock';
    }
    else if (randomNumber > 1) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}


//function to play a round of the game
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase(); // make comparison case insensitive by converting all to lower case
    computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection == computerSelection) { //check for a draw first. This excludes or simplifies later comparisons
        return 'It\'s a draw!';
    }
    else if(playerSelection == 'rock'){ //comparisons if player plays rock
        if(computerSelection == 'scissors'){
            return 'You win! Rock beats Scissors';
        }
        else {
            return 'You lose! Paper beats Rock';
        }
    }
    else if(playerSelection == 'scissors') { //comparisons if player plays scissors
        if(computerSelection == 'rock'){
            return 'You lose! Rock beats Scissors';
        }
        else {
            return 'You win! Scissors beats Paper';
        }
    }
    else if(playerSelection == 'paper') { //comparisons if player plays paper
        if(computerSelection == 'rock'){
            return 'You win! Paper beats Rock';
        }
        else {
            return 'You lose! Scissors beats Paper';
        } 
    }
}

//UI section


let playerScore = 0;
let computerScore = 0;
let result = '';
let round = 0;
gameState = true;
const moves = document.querySelectorAll('.move');
    moves.forEach((move) => {
    move.addEventListener('click',()=>{
     result = playRound(move.id);
     if (result.includes('win')){
        playerScore++;
     }
     else if (result.includes('lose')){
        computerScore++
     }
     round++;
     const dispRound = document.querySelector('#round');
     const dispPlayerScore = document.querySelector('#playerScore');
     const dispComputerScore = document.querySelector('#computerScore');
     const dispResult = document.querySelector('#lastResult');
     const outcome = document.querySelector('#outcome');
     dispRound.textContent = 'Round '+round;
     dispResult.textContent = 'Result: '+result;
     dispPlayerScore.textContent = 'Player Score: '+playerScore;
     dispComputerScore.textContent = 'Computer Score: '+computerScore;
     console.log(result + ' ' + playerScore + ' ' + computerScore);
     if (playerScore == 5) {
        outcome.textContent = 'Player wins!';      
    }
    else if(computerScore == 5){
        outcome.textContent = 'Computer wins!';
    }
    });
    });
