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
console.log(getComputerChoice());