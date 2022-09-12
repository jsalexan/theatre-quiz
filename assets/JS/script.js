var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("#quiz-display")
var endDisplay = document.querySelector("#final-display")


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
var optionsBtns = document.querySelectorAll(".options");


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
  showProgress();
  console.log("Start game launched");
}

var x = questionNumber
function showQuestion(x) {
        questionHere.textContent = questionsList[x].text;
        btn0.textContent = questionsList[x].options[0];
        btn1.textContent = questionsList[x].options[1];
        btn2.textContent = questionsList[x].options[2];
        btn3.textContent = questionsList[x].options[3];       
    }

    function guessAnswer(event) {
        event.preventDefault();
        guessResult.style.display = "flex";
    
        setTimeout(function () {
            guessResult.style.display = "none";
        }, 1000);
    
           if (questionsList[questionNumber].answer == event.target.value) {
            guessResult.textContent = "Correct! You're a star!"; 
            finalScore = finalScore + 1;
    
        } else {
            time = time - 10;
            guessResult.textContent = "Wrong! Back to rehearsal!";
        }
         
        if (questionNumber < questionsList.length -1 ) {
            showQuestion(questionNumber +1);
        } else {
        gameOver();
    }
    questionNumber++;
    }
    
   
    function showProgress() {
        let currentQuestionsNumber = questionNumber + 1;
        let progressEl = document.getElementById("progress");
        progressEl.textContent = "Question " + currentQuestionsNumber + " of "+ (questionsList.length);
      }; 

    function gameOver() {
    questionHere.style.display = "none";
    buttons.style.display = "none";
    quizDeets.style.display = "none";
    countdownEl.style.display = "none";
    progressEl.style.display = "none";
    endDisplay.style.display = "block";
    }

var time = 90;
var countdownEl = document.querySelector("#countdown")
function startCountdown() {
    let countdownInterval = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdownInterval);
            gameOver();
        } else {
            time--;
            countdownEl.textContent = "Time left: " + time + " seconds!";
        }
    }, 1000);
};

var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    startGame();
    console.log("Button clicked.");
});


optionsBtns.forEach(function(click){
    click.addEventListener("click", guessAnswer);
});








