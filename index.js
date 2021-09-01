var readlineSync = require("readline-sync");
var chalk = require("chalk")


//List of questions
var quizList = [
  {
    question: "Where was I born? ",
    options: ["Mumbai", "Dubai", "Bangalore"],
    answer: 1
  },
  {
    question: "What is my favourite racing sport? ",
    options: ["MotoGP", "Formula-1", "NASCAR"],
    answer: 1
  },
  {
    question: "If there was one food I would survive on, what is it? ",
    options: ["VadaPav", "Aloo Paratha", "Shawarma"],
    answer: 2
  },
  {
    question: "What is the one thing I always carry with me wherever I go? ",
    options: ["Headphones", "Balloon", "Books"],
    answer: 0
  },
  {
    question: "Will Hamza get into NeoG camp? ",
    options: ["Yes", "Nah", "You can guarantee it!"],
    answer: 2
  },
]

//Play each question
function letsplay(question, options, answer){
  var userAnswer = readlineSync.keyInSelect(options, question, {cancel: 'Exit'});

  console.log("\n")

  if(userAnswer === answer){
    console.log(chalk.bgGreen("Woohoo! Correct Answer!"));
    score += 1
  } else if(userAnswer === -1){
    console.log(chalk.bgYellow("Sorry to see you leave! Exiting game..."));
    return;
  } else {
    console.log(chalk.bgRed("Woops! Wrong Answer!"));
  }

  console.log("Your current score: " + chalk.magenta(score));
  console.log("----------------------------------------");

}

//introduction of game
var playerName = readlineSync.question("What's your name? ");
console.log(chalk.bgCyan("Welcome " + playerName + " to DO YOU KNOW HAMZA!"));
console.log(chalk.bold("*KBC music plays in the background...*"));
console.log("----------------------------------------");

//Score counter
var score = 0;

//Scoreboard
var scoreBoard = [
  {
    name: "John",
    score: 4
  },
  {
    name: "Hala",
    score: 2
  },
  {
    name: "Aman",
    score: 1
  }
]

//Loop through each question
for(var i=0; i<quizList.length; i++){
  letsplay(quizList[i].question, quizList[i].options, quizList[i].answer)
}

//end of game
console.log("\n")
console.log("YAY!! You scored " + score + " points!")
console.log("\n")
console.log("How did you do? Check out the scoreboard below!");
console.log("If you got a highscore, ping me the proof and I'll update it here!!");

//display scoreboard
console.log("\n")
console.log("SCOREBOARD");
for(var i=0; i<scoreBoard.length; i++){
  console.log(scoreBoard[i].name + " : " + scoreBoard[i].score);
}


