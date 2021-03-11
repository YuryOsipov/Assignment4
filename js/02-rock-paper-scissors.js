
let playerChoice = prompt("What do you choose: rock, paper, scissors?");
let computerChoice = Math.random(); // Random computer move - Equal 33.3333% chance to get each
  if (computerChoice < 0.34) {
	computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  } 
  console.log("Computer chooses: " + computerChoice);

let compare = function(ch1,ch2) { 
    if (ch1 === ch2) {
        alert("The result is a tie!" + " " + "Lets play again.")
        return;

    }
    
    else if (ch1 === "rock") {
        
        if (ch2 === "scissors") {
            alert("rock wins!" + "You beat the computer, nice job!")
            return;
        }
        else {
            alert("paper wins!" +  "Your really smart!  Computer beat you.")
            return;
        }
    }
    
    else if (ch1 === "paper") {
        
        if (ch2 === "rock") {
            alert("paper wins!" + "You beat the computer, nice job!")
            return;
        }
        else {
            alert("scissors wins!" +  "Your really smart! Computer beat you.")
            return;
        }
            
    }
    
    else if (ch1 === "scissors") {
        
        if (ch2 === "rock") {
            alert("rock wins!" + "Your really smart! Computer beat you.")
            return;
        }
        else {
            alert("scissors win!" + "You beat the computer, nice job!")
            return;
        }
    } else {
        alert('Invalid operator');
        return;
    }
    
    } //closes compare function


    console.log("Player Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
    compare(playerChoice, computerChoice)


 