var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("#quiz-display")
var endDisplay = document.querySelector("#end-display")


var resetButton = document.querySelector("reset-button");
var questionHere = document.querySelector(".question-here");
var buttons = document.querySelector(".buttons");
var guessResult = document.querySelector(".guess-result");
var quizDeets = document.querySelector(".quiz-deets");


var btn = document.querySelector(".btn");
var btn0 = document.querySelector("#Btn0")
var btn1 = document.querySelector("#Btn1")
var btn2 = document.querySelector("#Btn2")
var btn3 = document.querySelector("#Btn3")

score = 0;
questionsList = 0; 
  

function startGame () {
  openingMessage.style.display = "none";
  questionHere.style.display = "flex";
  buttons.style.display = "flex";
  guessResult.style.display = "flex";
  quizDeets.style.display = "flex";


  questionNumber = 0
//   startCountdown();
//   askQuestion(questionNumber)
  console.log("Start game button clicked!");
}

function showProgress() {
  let currentQuestionNumber = quiz.questionList + 1;
  let progressEl = document.getElementById("progress");
  progressEl.innerHTML = 
  `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}; 


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
};

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    startGame();
    console.log("Button clicked.");
});









