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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // make comparison case insensitive by converting all to lower case
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) { //check for a draw first. This simplifies later comparisons
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
            return 'You lose! Scissors beats Rock';
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

const playerSelection='roCk';
const computerSelection = getComputerChoice();
console.log('player: '+ playerSelection + '; computer: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));