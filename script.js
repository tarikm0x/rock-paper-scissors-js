
let humanScore=0;
let computerScore=0;

console.log("Current score is human: "+humanScore+" computer: "+computerScore);


function getComputerChoice(){
let computer =Math.random();
if(computer<0.33){
    return "rock";
}else if(computer<0.66){
    return "paper";
}else{
    return "scissors";
}
}

function getHumanChoice(){
    let human=prompt("Enter rock/paper/scissors:");
    return human;
}


function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        console.log("It's a tie!");
        return;
    }
    if(humanChoice==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }else if(humanChoice==="scissors" && computerChoice==="paper"){
         console.log("You win! Scissors beat paper!");
        humanScore++;
    }else if (humanChoice==="scissors" && computerChoice==="rock"){
        console.log("You lose! Rock beats scissors!");
        computerScore++;
    }else if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log("You win! Rock beats scissors!")
        humanScore++;
    }else if(humanChoice==="paper"&& computerChoice==="rock"){
        console.log("You win! Paper beats rock!")
        humanScore++;
    }else if (humanChoice==="paper"&& computerChoice==="scissors"){
        console.log("You lose! Scissors beat paper! ")
        computerScore++;
    }
       
    

}

for(let i=0; i<5; i++){
let humanChoice=getHumanChoice().toLowerCase();
let computerChoice=getComputerChoice();
console.log("You picked: "+ humanChoice);
console.log("The computer picked: "+computerChoice);
playRound(humanChoice,computerChoice);
console.log("Current score is human: "+humanScore+" computer: "+computerScore);

}

if(humanScore===computerScore){
    console.log("It's a draw!")
}else if (humanScore>computerScore){
    console.log("Human won!")
}else{
    console.log("Computer won!")
}

