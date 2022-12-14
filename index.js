var readlineSync = require("readline-sync");

var score = 0;


// data of high score
var highScores = [
  {
    name: "Rahul",
    score: 3,
  },

  {
    name: "Ajay",
    score: 2,
  },
]


var questions = [
  {
    question: "What type of pokemon is pikachu?",
    answer: "Electric"
  },
  {
    question: "What was the name of the Team Rocket pokemon?",
    answer: "Meowth"
  },
  {
    question: "What type of pokemon is charmander?",
    answer: "Fire"
  },
  {
    question: "Who was the trainer of pikachu?",
    answer: "Ash Ketchum"
  },
  {
    question: "What was the catchphrase of Team Rocket?",
    answer: "Prepare for trouble! And make it double!"
  }
]


// Welcome user function

function welcomeUser() {
  var userName = readlineSync.question("What is your name?");
  console.log("Welcome " + userName + " to Aman's pokemon quiz game.")
}

// Play game function

function playGame(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Bingo!! Gotta catch em all")
    score++;
  } else {
    console.log("Try again! Watch more pokemon")
    score--;
  }

  console.log("current score: ", score);
  console.log("-------------")

}

// Game result function

function gameResult() {
  for (var i = 0; i < questions.length; i++) {
    playGame(questions[i].question, questions[i].answer)
  }
}


// Show scores function

function showScores() {
  console.log("WOW! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there inform me and I'll update it");
  highScores.map(scorer => console.log(scorer.name, " : ", scorer.score))

}

welcomeUser();
gameResult();
showScores();