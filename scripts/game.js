/* This game will be played thru the console
take random number. If num <= 0.33 = Rock, num >= 0.66 = Scissors,
else Paper */
function computerPlay() {
    let comp = Math.random();
    
    if(comp <= 0.33) {
        return "Rock";
    }
    else if(comp >= 0.66) {
        return "Scissors";
    }
   
    return "Paper";
}

/* play a single round. compare computer and player and determine winner
rock > scissors, paper > rock, scissors > paper */
function playRound(playerSelection, computerSelection) {
    let winner = "Tie";

    if(playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        winner = "Player";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        winner = "Player";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        winner = "Player";
    }


}