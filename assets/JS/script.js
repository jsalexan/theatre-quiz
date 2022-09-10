var openingMessage = document.querySelector("#opening-display");
var quizScreen = document.querySelector("quiz-display")
var endDisplay = document.querySelector("end-display")
var questionEl = document.querySelector(".question");
var startButton = document.querySelector("start-button");
var resetButton = document.querySelector("reset-button");




  score = 0;
  questionsList = 0; 
  



let questionsList = [
  {
      text: "The 80s chart-topper One Night in Bangkok was taken from which musical?", options: ["Evita", "Chess", "Company", "Les Miserables"], answer: "Chess"
  },

{
  text: "Where does Sally Bowles perform in Cabaret?", 
  options: ["Moulin Rouge", "Mama's", "Kit Kat Klub", "Studio 54"], 
  answer: "Kit Kat Klub"
},

 { 
  text: "What was the first Broadway musical with an all-female creative team?", options: ["A Light in the Piazza", "Fun Home", "Be More Chill", "Waitress"], answer: "Waitress"
 },

 { 
  text: "Which rock opera did The Who compose?", 
  options: ["Jesus Christ Superstar", "The Wall", "Tommy", "American Idiot"], answer: "Tommy"
    },

  { 
    text: "Which Broadway musical is based on the 1924 trials of accused murderers Beulah Annan and Belva Gaertner?", 
    options: ["Little Shop of Horrors", "Sweeney Todd", "Chicago", "Wicked"],
    answer: "Chicago"
  },

  { 
    text: "Which of the following musical hits was written by power duo Richard Rodgers and Oscar Hammerstein", 
    options: ["Sunday in the Park with George", "Oklahoma", "Phantom of the Opera", "Cats"], 
    answer: "Oklahoma"
    },

    { 
      text: "What is the name of the carnivorous Venus flytrap plant in Little Shop of Horrors?", 
      options: ["Seymore", "Mushnik", "Audrey 2", "Mother"], 
      answer: "Audrey 2"
    },

    { 
      text: "What is Jean Valjean’s prison number in the musical Les Miserables?", 
      options: ["90210", "#357", "24601", "16740"], 
      answer: "24601"
    },

  {
      text: "Who wrote Sunday in the Park with George, Company, Assassins, and Into The Woods?", 
      options: ["Andrew Lloyd Webber", "Stephen Schwartz", "Stephen Sondheim", "Marvin Hamlisch"], 
      answer: "Stephen Sondheim"
  },

  {
      text: "What musical did composer/lyricist Jonathan Larson spend seven years working on, only to die hours before its pre-Broadway opening?", 
      options: ["Promises, Promises", "Rent", "Hamilton", "Dear Evan Hanson"],
      answer: "Rent"
  },
];

function startGame () {
  openingMessage.style.display = "none";
  quizScreen.style.display = "flex";
  questionNumber = 0
  startCountdown();
  askQuestion(questionNumber);


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
        startCountdown()
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





var quiz = new Quiz(questions);


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

// startButton.addEventListener("click", startGame);



//This should run when the page opens.
showQuestion();




