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

//function to capture and validate player choice. Loops until valid input given.
function getPlayerChoice(){
    let valid = false;
    let playerSelection = prompt('Enter rock, paper, or scissors').toLowerCase();
    while (!valid){
       if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
        playerSelection = prompt('Invalid input. Enter rock, paper, or scissors');
        }
        else {
        valid = true;
        }
    }
    return playerSelection;  
}

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


//function to play 5 rounds of the game
function game(){
    let playerScore=0; //starting scores
    let computerScore=0;

    for(let i =0; i<5;i++){ //loop to play 5 rounds
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice(); //get new computer choice each round
        let result = playRound(playerSelection,computerSelection); //capture result to check who won
        if (result.includes('win')){
            playerScore++; //check return string for 'win', then increase player score
        }
        else if(result.includes('lose')){
            computerScore++; //check return string for 'lose', then increase computer score
        }
        //do nothing if draw and continue game
        console.log('Round '+ (i+1));
        console.log('player: '+ playerSelection + '; computer: ' + computerSelection);
        console.log(result);
        console.log('Player Score: '+ playerScore + '; Computer Score: '+computerScore);
    }
}

game();