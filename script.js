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

//function to capture player choice from buttons
//function getPlayerChoice(){
  //  const playerSelection = document.querySelector('.move')
    //console.log(playerSelection);
    //return playerSelection;
//}

//function to play a round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // make comparison case insensitive by converting all to lower case
    computerSelection = computerSelection.toLowerCase();
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
let playerScore = 0;
let computerScore = 0;
const moves = document.querySelectorAll('.move');
console.log(moves);
moves.forEach((move) => {
    move.addEventListener('click',()=>{
     let computerSelection = getComputerChoice();
     console.log(computerSelection);
     const playerSelection = move.id;
     const result = playRound(playerSelection,computerSelection);
     console.log(result);
    });
});

