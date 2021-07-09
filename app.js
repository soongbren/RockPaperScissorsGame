var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");   // DOM variables
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");
var computerSelection = "";
var playerSelection = "";
var rndInt = 0;


// funtion main() {

// }

rock_div.addEventListener('click', function() {
    console.log("Clicked rock");
    game('rock')
})
paper_div.addEventListener('click', function() {
    console.log("Clicked paper");
    game('paper')
})
scissors_div.addEventListener('click', function() {
    console.log("Clicked scissors");
    game('scissors')
})



function computerplayif() {
  rndInt = Math.floor(Math.random() * 3) + 1;
  //console.log(rndInt);

  if (rndInt == 1) {
    computerSelection = "rock";
    console.log("Computer = %s", computerSelection);
    return computerSelection;
  } else if (rndInt == 2){
    computerSelection = "paper";
    console.log("Computer = %s", computerSelection);
    return computerSelection;
  } else if (rndInt == 3) {
    computerSelection = "scissors";
    console.log("Computer = %s", computerSelection);
    return computerSelection;
  }
}

function computerplayswitch() {
  let output = "";
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      output = "rock";
      console.log(output);
      break;
      
    case 2:
      output = "paper";
      console.log(output);
      break;

    case 3:
      output = "scissors";
      console.log(output);
      break;
  }
}

function singleRound(playerSelection, computerSelection) {

playerSelection = prompt("Choose rock, paper, scissors");
computerSelection = computerplayif();
// computerSelection = "rock";
// console.log("Computer = %s", computerSelection);

playerSelection = playerSelection.toLowerCase(); // Case insensitive
console.log("Player = %s", playerSelection);

if (computerSelection == playerSelection) {
  alert("It's a tie!");
} else if (  (computerSelection == "rock" && playerSelection == "scissors") 
          || (computerSelection == "paper" && playerSelection == "rock") 
          || (computerSelection == "scissors" && playerSelection == "paper")) {
  alert("You lose!");
} else {
  alert("You win!"); 
  // alert("lol!"); 
}

}

function game(playerSelection) {

  computerSelection = computerplayif();

  playerSelection = playerSelection.toLowerCase(); // Case insensitive
  console.log("Player = %s", playerSelection);

  if (computerSelection == playerSelection) {
        tie(playerSelection, computerSelection);

  } else if (  (computerSelection == "rock" && playerSelection == "scissors") 
        || (computerSelection == "paper" && playerSelection == "rock") 
        || (computerSelection == "scissors" && playerSelection == "paper")   ) {
            lose(playerSelection, computerSelection)
  } else {
        win(playerSelection, computerSelection) 
  }

}

function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(10).sup();
    const smallCompWord = "comp".fontsize(10).sup();
    // result_p.innerHTML = convertToWord(playerSelection) + " beats " + convertToWord(computerSelection) + ", you win!";
    result_p.innerHTML = `${convertToWord(playerSelection)}${smallUserWord} beats ${convertToWord(computerSelection)}${smallCompWord}, you win!"`;
   // document.getElementById(playerSelection).classList.add('green-glow');
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(10).sup();
    const smallCompWord = "comp".fontsize(10).sup();
    // result_p.innerHTML = convertToWord(computerSelection) + " beats " + convertToWord(playerSelection) + ", you lose!";
    result_p.innerHTML = `${convertToWord(computerSelection)}${smallCompWord} beats ${convertToWord(playerSelection)}${smallUserWord}, you lose!"`;
    //document.getElementById(playerSelection).classList.add('red-glow');
}

function tie(playerSelection, computerSelection) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user".fontsize(10).sup();
    const smallCompWord = "comp".fontsize(10).sup();
    // result_p.innerHTML = convertToWord(playerSelection) + " == " + convertToWord(computerSelection) + ", tie!";
    result_p.innerHTML = `${convertToWord(computerSelection)}${smallCompWord} == ${convertToWord(playerSelection)}${smallUserWord}, tie!"`;
   // document.getElementById(playerSelection).classList.add('grey-glow');
}

function convertToWord(letter) {
    if (letter === "rock") return "rock";
    if (letter === "paper") return "paper";
    return "scissors";
}

function Reset(playerScore, computerScore) {
  playerScore = 0;
  computerScore = 0;
}











































