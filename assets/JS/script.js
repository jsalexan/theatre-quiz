var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("quiz-display")
var questionEl = document.querySelector("question");
var progressEl = document.querySelector("progress");
var countdownEl = document.querySelector("countdown")
var startButton = document.querySelector("start-button");
var resetButton = document.querySelector("reset-button");

var timer;
var timerCount;

score = 0;
questionEl = 0;

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

//Checks if answer is correct and adjusts the score accordingly and advances to next question. Otherwise it deducts 10 secs off timer (not sure if this method will work 9/8)
  guess(answer) {
    if (this.getQuestionList().isCorrectAnswer(answer)) {
    this.score++;
    } else {
    timerCount - 10;
    } 
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

function init() {
  getScores();
  openingMessage.setAttribute("display:flex");
  quizScreen.setAttribute("display:none");
}

function startGame() {
  startButton.disabled = true;
  openingMessage.setAttribute("display:none");
  quizScreen.setAttribute("display:flex");
  countdownEl = 90;
  showQuestion ();
  startCountdown();
}


startButton.addEventListener("click", startGame);
console.log ("game started")




function showQuestion() {
  if (quiz.isOver()) {
    showScores();

  } else {
    
    questionEl.innerHTML = quiz.getQuestionList().text;

    let options = quiz.getQuestionList().options;
    for (let i = 0; i < options.length; i++) {
      let choiceEl = document.getElementById("option" + i);
      choiceEl.innerHTML = options[i];
      guess("btn" + i, options[i]);
    }
        showProgress();
  }
};

 function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      showQuestion();
    }
  };

// The gameOver function is called when timer reaches 0
function gameOver() {
  // wordBlank.textContent = "GAME OVER";
  startButton.disabled = false;
  setScores()
}


function startCountdown() {
  timer = setInterval(function() {
    timerCount--;
    countdownEl.textContent = timerCount;
       if (isOver && timerCount > 0) {
          clearInterval(timer);
        showScores();
      }
       if (timerCount === 0) {
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

function showScores() {
  quizScreen.setAttribute("display:none") 
  let quizEl = document.getElementById("quiz");
  quizEl.innerHTML = quizEndHTML;
};

let questions = [
  new Trivia(
      "The 80s chart-topper I Know Him So Well was taken from which musical?", ["Evita", "Chess", "Company", "Les Miserables"], "Chess"
  ),

  new Trivia(
      "Where does Sally Bowles perform in Cabaret?", ["Moulin Rouge", "Mama's", "Kit Kat Klub", "Studio 54"], "Kit Kat Klub"
  ),

  new Trivia(
      "What was the first Broadway musical with an all-female creative team?", ["A Light in the Piazza", "Fun Home", "Be More Chill", "Waitress"], "Waitress"
  ),

  new Trivia(
      "Which rock opera did The Who compose?", ["Jesus Christ Superstar", "The Wall", "Tommy", "American Idiot"], "Tommy"
  ),

  new Trivia(
      "Which Broadway musical is based on the 1924 trials of accused murderers Beulah Annan and Belva Gaertner?", ["Little Shop of Horrors", "Sweeney Todd", "Chicago", "Wicked"], "Chicago"
  ),

  new Trivia(
      "Which of the following musical hits was written by power duo Richard Rodgers and Oscar Hammerstein", ["Sunday in the Park with George", "Oklahoma", "Phantom of the Opera", "Cats"], "Oklahoma"
  ),

  new Trivia(
      "What is the name of the carnivorous Venus flytrap plant in Little Shop of Horrors?", ["Seymore", "Mushnik", "Audrey 2", "Mother"], "Audrey 2"
  ),

  new Trivia(
      "What is Jean Valjean’s prison number in the musical Les Miserables?", ["90210", "#357", "24601", "16740"], "24601"
  ),

  new Trivia(
      "Who wrote Sunday in the Park with George, Company, Assassins, and Into The Woods?", ["Andrew Lloyd Webber", "Stephen Schwartz", "Stephen Sondheim", "Marvin Hamlisch"], "Stephen Sondheim"
  ),

  new Trivia(
      "What musical did composer/lyricist Jonathan Larson spend seven years working on, only to die hours before its pre-Broadway opening?", ["Promises, Promises", "Rent", "Hamilton", "Dear Evan Hanson"], "Rent"
  ),
];

var quiz = new Quiz(questions);


function init() {
  getScores();
  openingMessage.setAttribute("display:flex");
  quizScreen.setAttribute("display:none");
}

function startGame() {
  startButton.disabled = true;
  openingMessage.setAttribute("display:none");
  quizScreen.setAttribute("display:flex");
  showQuestion ();
  startCountdown();
}


startButton.addEventListener("click", startGame);
console.log ("game started")





init();




