var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("#quiz-display")
var endDisplay = document.querySelector("#end-display")


var resetButton = document.querySelector("reset-button");
var questionHere = document.querySelector(".question-here");
var buttons = document.querySelector(".buttons");
var guessResult = document.querySelector(".guess-result");
var quizDeets = document.querySelector(".quiz-deets");
var progressEl = document.querySelector("#progress");
var countdownEl = document.querySelector(".quiz-deets #countdown");

var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var options = document.querySelectorAll(".options");


var questionNumber = 0; 
var finalScore = 0;


function startGame () {
  openingMessage.style.display = "none";
  questionHere.style.display = "flex";
  buttons.style.display = "flex";
  quizDeets.style.display = "flex";
  countdownEl.style.display = "flex";
  progressEl.style.display = "flex";
  startCountdown();
  showQuestion(questionNumber);
  console.log("Start game launched");
}

function showProgress() {
  let currentQuestionsNumber = questionsList + 1;
  let progressEl = document.getElementById("progress");
  progressEl.textContent = `Question ${currentQuestionsNumber}${"of "(questionsList.length)}`;
}; 

var x = questionNumber
function showQuestion(x) {
        questionHere.textContent = questionsList[x].text;
        btn0.textContent = questionsList[x].options[0];
        btn1.textContent = questionsList[x].options[1];
        btn2.textContent = questionsList[x].options[2];
        btn3.textContent = questionsList[x].options[3];       
    }


let time = 90;
var countdownEl = document.querySelector("#countdown")
function startCountdown() {
    let countdownInterval = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdownInterval);
            showScores();
        } else {
            time--;
            countdownEl.textContent = "Time left: " + time + " seconds!";
        }
    }, 1000);
};

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    startGame();
    console.log("Button clicked.");
});









