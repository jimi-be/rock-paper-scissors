/* global variables to keep score.
I don't like this method, but it's all I know at this point*/
let playerScore = 0;
let compScore = 0;

/* Generate computer selection based on random number
If random num <= 0.33 = Rock, random num >= 0.66 = Scissors, else Paper */
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

// format text to lowercase with capital 1st letter
function formatText(text) {
    let l1=text.toLowerCase();
    let cap=l1.charAt(0).toUpperCase();
    let part=l1.slice(1);
    return cap.concat(part);
}

/* play a single round. compare computer and player and determine winner
rock > scissors, paper > rock, scissors > paper */
function playRound(playerSelection, computerSelection) {
    let player = formatText(playerSelection);

    if(player === computerSelection) {
        return `Tie, both players chose ${player}`;
    }

    if(player == "Rock") {
        if (computerSelection == "Scissors") {
            playerScore++;
            return `You Win! Computer: ${computerSelection}, You: ${player}`;
        }
        else {
            compScore++;
            return `You Lose! Computer: ${computerSelection}, You: ${player}`;
        }
    }
    if(player == "Paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            return `You Win! Computer: ${computerSelection}, You: ${player}`;
        }
        else {
            compScore++;
            return `You Lose! Computer: ${computerSelection}, You: ${player}`;
        }
    }
    if(player == "Scissors") {
        if (computerSelection == "Paper") {
            playerScore++;
            return `You Win! Computer: ${computerSelection}, You: ${player}`;
        }
        else {
            compScore++;
            return `You Lose! Computer: ${computerSelection}, You: ${player}`;
        }
    }

    return `ERROR: ${player} is not a valid selection.`
}

/* This game will be played thru the console for now */
function game() {
    for (let i = 0; i< 5; i++) {
        const playerSelection = prompt("Your selection: Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(`Final score - You: ${playerScore}, Computer: ${compScore}`);
}