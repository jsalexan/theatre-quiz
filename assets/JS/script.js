var openingMessage = document.querySelector("#opening");
var quizScreen = document.querySelector("quiz-display")
var startButton = document.getElementById("start-button");


// Attach in a separate doc.
let questions = [
    new Question(
        "The 80s chart-topper I Know Him So Well was taken from which musical?", ["Evita", "Chess", "Company", "Les Miserables"], "Chess"
    ),
  
    new Question(
        "Where does Sally Bowles perform in Cabaret?", ["Moulin Rouge", "Mama's", "Kit Kat Klub", "Studio 54"], "Kit Kat Klub"
    ),
  
    new Question(
        "What was the first Broadway musical with an all-female creative team?", ["A Light in the Piazza", "Fun Home", "Be More Chill", "Waitress"], "Waitress"
    ),
  
    new Question(
        "Which rock opera did The Who compose?", ["Jesus Christ Superstar", "The Wall", "Tommy", "American Idiot"], "Tommy"
    ),
  
    new Question(
        "Which Broadway musical is based on the 1924 trials of accused murderers Beulah Annan and Belva Gaertner?", ["Little Shop of Horrors", "Sweeney Todd", "Chicago", "Wicked"], "Chicago"
    ),
  
    new Question(
        "Which of the following musical hits was written by power duo Richard Rodgers and Oscar Hammerstein", ["Sunday in the Park with George", "Oklahoma", "Phantom of the Opera", "Cats"], "Oklahoma"
    ),
  
    new Question(
        "What is the name of the carnivorous Venus flytrap plant in Little Shop of Horrors?", ["Seymore", "Mushnik", "Audrey 2", "Mother"], "Audrey 2"
    ),
  
    new Question(
        "What is Jean Valjean’s prison number in the musical Les Miserables?", ["90210", "#357", "24601", "16740"], "24601"
    ),
  
    new Question(
        "Who wrote Sunday in the Park with George, Company, Assassins, and Into The Woods?", ["Andrew Lloyd Webber", "Stephen Schwartz", "Stephen Sondheim", "Marvin Hamlisch"], "Stephen Sondheim"
    ),
  
    new Question(
        "What musical did composer/lyricist Jonathan Larson spend seven years working on, only to die hours before its pre-Broadway opening?", ["Promises, Promises", "Rent", "Hamilton", "Dear Evan Hanson"], "Rent"
    ),
  ];


// Function to start the quiz and move from the opening display.
  function startQuiz() {
    // hide start screen
    openingMessage.setAttribute("class", "hide");
  
    // un-hide questions section
    quizScreen.setAttribute("class", "show");
    
    startButton.addEventListener("click", showQuestion());
    console.log("starting quiz");
  
   }


// Function that tracks progress through questions. Will display below answer choice buttons.
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
  };



  