var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("#quiz-display");
var endDisplay = document.querySelector("#final-display");
var buttonDisplay = document.querySelector(".button-display");
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var time;

var initials = document.getElementById("#initials");
var mostRecentScore = JSON.parse(localStorage.getItem("mostRecentScore"));
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var numHighScores = 5;

var resetButton = document.querySelector("reset-button");
var questionHere = document.querySelector(".question-here");
var buttons = document.querySelector(".buttons");
var guessResult = document.querySelector(".guess-result");
var quizDeets = document.querySelector(".quiz-deets");

var countdownEl = document.querySelector("#countdown");
var highScores = document.querySelector(".high-scores");

var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var optionsBtns = document.querySelectorAll(".options");

var scoreText = document.querySelector("#score");
var finalScore;
var questionNumber;



function startGame () {
  questionNumber = 0;
  questionProgress = 1;
  finalScore = 0;
  openingMessage.style.display = "none";
  questionHere.style.display = "block";
  buttons.style.display = "flex";
  quizDeets.style.display = "block";
  countdownEl.style.display = "block";
  
  endDisplay.style.display= "none";
  buttonDisplay.style.display =  "none";
  

  startCountdown();
  showQuestion(questionNumber);
  
  console.log("Start game launched");
}

function showQuestion(x) {
        questionHere.textContent = questionsList[x].text;
        btn0.textContent = questionsList[x].options[0];
        btn1.textContent = questionsList[x].options[1];
        btn2.textContent = questionsList[x].options[2];
        btn3.textContent = questionsList[x].options[3];  
        var x = questionNumber;     
    }

function guessAnswer(event) {
        event.preventDefault();
        guessResult.style.display = "block";
    
        setTimeout(function () {
            guessResult.style.display = "none";
            }, 1000);
    
           if (questionsList[questionNumber].answer == event.target.value) {
            guessResult.textContent = "Correct! You're a star!"; 
            finalScore = finalScore+ 1;
            localStorage.setItem("finalScore", score);
            console.log(finalScore);
    
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
    };
    

function gameOver() {
    questionHere.style.display = "none";
    buttons.style.display = "none";
    quizDeets.style.display = "none";
    countdownEl.style.display = "none";
    guessResult.style.display = "none";
    endDisplay.style.display = "block";
    scoreText.textContent = "You got: " + (finalScore * 10) + "% correct!";
    buttonDisplay.style.display = "flex";
    };

   

function startCountdown() {
    time = 90;
    let countdownInterval = setInterval(function() {
        if (time <= 0 || questionProgress >= questionsList.length +1) {
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










