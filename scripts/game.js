/* This game will be played thru the console
take random number. If num <= 0.33 = Rock, num >= 0.66 = Scissors,
else Paper */
function computerPlay() {
    let comp = Math.random();
    
    if(comp <= 0.33) {
        return "rock";
    }
    else if(comp >= 0.66) {
        return "scissors";
    }
   
    return "paper";
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
            return `You Win! Computer: ${computerSelection}, You: ${player}`;
        }
        else {
            return `You Lose! Computer: ${computerSelection}, You: ${player}`;
        }
    }
    if(player == "Paper") {
        if (computerSelection == "Rock") {
            return `You Win! Computer: ${computerSelection}, You: ${player}`;
        }
        else {
            return `You Lose! Computer: ${computerSelection}, You: ${player}`;
        }
    }
    if(player == "Scissors") {
        if (computerSelection == "Paper") {
            return `You Win! Computer: ${computerSelection}, You: ${player}`;
        }
        else {
            return `You Lose! Computer: ${computerSelection}, You: ${player}`;
        }
    }
}