var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("#quiz-display");
var endDisplay = document.querySelector("#final-display");
var buttonDisplay = document.querySelector(".button-display");
var time;

var submitScoreForm = document.getElementById("#submitScoreForm");

var mostRecentScore = JSON.parse(localStorage.getItem("finalScore"));

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var saveScoreBtn = document.querySelector("#saveScoreBtn");
var numHighScores = 5;

var resetButton = document.querySelector("reset-button");
var questionHere = document.querySelector(".question-here");
var buttons = document.querySelector(".buttons");
var guessResult = document.querySelector(".guess-result");
var quizDeets = document.querySelector(".quiz-deets");

var countdownEl = document.querySelector("#countdown");
// var highScoresDisplay = document.querySelector(".high-scores");

var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var optionsBtns = document.querySelectorAll(".options");

var scoreText = document.querySelector("#score");
var finalScore;
var questionNumber;

function saveHighScores(event) { 
    event.preventDefault();
    console.log("Entered the form information.");
    var initials = document.getElementById("initials");
    const yourScore = {
        score: (finalScore * 10),
        name: initials.value
    };
    highScores.push(yourScore);
    console.log(highScores);

    highScores.sort( (a,b) => 
        b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("https://jsalexan.github.io/theatre-quiz/");

};

// This runs when the start button is clicked and launches the questions and starts countdown.
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
  quizScreen.style.display = "block";
  quizScreen.style.display = "block";
  
  
  startCountdown();
  showQuestion(questionNumber);
}

//This pulls a question from the trivia list and populates the options buttons.
function showQuestion(x) {
        questionHere.textContent = questionsList[x].text;
        btn0.textContent = questionsList[x].options[0];
        btn1.textContent = questionsList[x].options[1];
        btn2.textContent = questionsList[x].options[2];
        btn3.textContent = questionsList[x].options[3];  
        var x = questionNumber;     
    }

// This function allows the correct/wrong text to appear and disappear and determines whether the options selected was a correct or wrong answer. It also adds to the score and advances to the next question AND deducts time if the answer is wrong.
function guessAnswer(event) {
        event.preventDefault();
        guessResult.style.visibility = "visible";
    
        setTimeout(function () {
            guessResult.style.visibility = "hidden";
            }, 1000);
    
           if (questionsList[questionNumber].answer == event.target.value) {
            guessResult.textContent = "Correct! You're a star!"; 
            finalScore = finalScore+ 1;
            localStorage.setItem("finalScore", (finalScore*10));
               
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
    
// The function sets up the final screen with the score total and the form to submit your initials.
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

// This is the countdown function that shows during the questions part. 
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

// This is the event listener for the start button.
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    startGame();
    console.log("Button clicked.");
});

// This is the event listener for the options buttons during the question portion.
optionsBtns.forEach(function(click){
    click.addEventListener("click", guessAnswer);
});








