var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("quiz-display")
var endDisplay = document.querySelector("end-display")

var startButton = document.querySelector("start-button");
var resetButton = document.querySelector("reset-button");
var questionHere = document.querySelector(".question-here");
var guessResult = document.querySelector(".guess-result");

var btn = document.querySelector(".btn");
var btn0 = document.querySelector("#Btn0")
var btn1 = document.querySelector("#Btn1")
var btn2 = document.querySelector("#Btn2")
var btn3 = document.querySelector("#Btn3")

score = 0;
questionsList = 0; 
  

function startGame () {
  openingMessage.style.display = "none";
  quizScreen.style.display = "flex";
  questionNumber = 0
  startCountdown();
  askQuestion(questionNumber)
  console.log("Start game button clicked!");
}

function showProgress() {
  let currentQuestionNumber = quiz.questionList + 1;
  let progressEl = document.getElementById("progress");
  progressEl.innerHTML = 
  `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}; 

var questionNumber = x;
function showQuestion(x) {
        questionHere.textContent = questionsList[x].question;
        btn0.textContent = questionsList[x].option[0];
        btn1.textContent = questionsList[x].option[1];
        btn2.textContent = questionsList[x].option[2];
        btn3.textContent = questionsList[x].option[3];       
    }










// // Updates win count on screen and sets win count to client storage
// function setScores() {
//   win.textContent = scoreTracker;
//   localStorage.setItem("storedWins", scoreTracker);
// }

// function startGame() {
//   // startButton.disabled = true;
//   showQuestion ();
//   startCountdown();
// }

// function getScores() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("highScores");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     scoreTracker = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     scoreTracker = storedWins;
//   }
//   //Render win count to page
//   win.textContent = scoreTracker;
// }








let time = 90;
var countdownEl = document.querySelector("countdown")
function startCountdown() {
    let countdownInterval = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdownInterval);
            showScores();
        } else {
            time--;
            countdownEl.textContent = "Time left: " + time;
        }
    }, 1000);
}

startButton.addEventListener ("click", startGame());



//This should run when the page opens.
showQuestion();




