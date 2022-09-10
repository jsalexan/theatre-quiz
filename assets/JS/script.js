var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("quiz-display")
var endDisplay = document.querySelector("end-display")
var questionEl = document.querySelector(".question");
var progressEl = document.querySelector("progress");
var countdownEl = document.getElementById("#countdown")
var startButton = document.querySelector("start-button");
var resetButton = document.querySelector("reset-button");

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

// function startGame() {
//   startButton.disabled = true;
//   openingMessage.setAttribute('style', 'display:none');
//   quizScreen.setAttribute('style', 'display:flex');
//   countdownEl = 90;
//   showQuestion ();
//   startCountdown();
// }

function showProgress() {
  let currentQuestionNumber = quiz.questionList + 1;
  let progressEl = document.getElementById("progress");
  progressEl.innerHTML = 
  `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}; 

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
        startTimer()
  }
};

 function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      showQuestion();
    }
  };








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

function showScores() {
  let quizEndHTML =
      `
  <h1>Quiz Completed</h1>
  <h2 id='score'> You got: ${quiz.score * 10}% correct!</h2>
  <form method="post">
     <div class="input-group">
           <input type="text" name="initials" id="initials" placeholder="Type Initials Here" />
          </div>
  <p>Enter your initials to save your score.</p>
  <button id="enter-initials">ENTER</button>
  </form>
  <div class="quiz-repeat">
      <p>To take quiz again, click START.  
      <br><br>
      To clear all scores, click RESET.
  </div>
  `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
};

let questions = [
  new Trivia(
      "The 80s chart-topper One Night in Bangkok was taken from which musical?", ["Evita", "Chess", "Company", "Les Miserables"], "Chess"
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


var countdownEl = document.querySelector("countdown");
let time = 90;

function startCountdown() {
    let countdownInterval = setInterval(function() {
        if (time <= 0) {
            clearInterval(countdownInterval);
            showScores();
        } else {
            time--;
            countdownEl.innerHTML = `Time left: ${time}`;
        }
    }, 1000);
}

// startButton.addEventListener("click", startGame);



//This should run when the page opens.
showQuestion();




