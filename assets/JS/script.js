var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("quiz-display")
var questionEl = document.querySelector("question");
var progressEl = document.querySelector("progress");
var countdownEl = document.querySelector("countdown")
var startButton = document.querySelector("start-button");
var resetButton = document.querySelector("reset-button");

var timer;
var timerCount;

score = 0
questionEl = 0

function init() {
  getScores();
  openingMessage.setAttribute("display:flex")
}

// Sets score to 0, prepares questions, and question list to first one.
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionList = 0; 
  }

  getQuestionList () {
    return this.questions[this.questionList];
  }

//Checks if answer is correct and adjusts the score accordingly and advances to next question. Otherwise it deducts 10 secs off timer
  guess(answer) {
    if (this.getQuestionList().isCorrectAnswer(answer)) {
    this.score++;
    this.questionList++;}
    
    else if (this.getQuestionList().isWrongAnswer(answer)) {
    timerCount - 10;
    this.questionList++;
  } 

  isOver() {
    return this.questionList === this.questions.length;
  }
    
}

  class Trivia {
    constructor(text, options, answer){
    this.text = text; 
    this.options = options; 
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }

  isWrongAnswer(choice) {
    return this.answer != choice;
  }
}










// The gameOver function is called when timer reaches 0
function gameOver() {
  // wordBlank.textContent = "GAME OVER";
  startButton.disabled = false;
  setScores()
}



// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startCountdown() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    countdownEl.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isOver && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        gameOver();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}



// Updates win count on screen and sets win count to client storage
function setScores() {
  win.textContent = scoreTracker;
  localStorage.setItem("storedWins", scoreTracker);
}



function getScores() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("highScores");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    scoreTracker = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    scoreTracker = storedWins;
  }
  //Render win count to page
  win.textContent = scoreTracker;
}





















init();

startButton.addEventListener("click", startGame)
console.log("game started");