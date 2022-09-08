var openingMessage = document.querySelector("#opening");
var quizScreen = document.querySelector("quiz-display")
var startButton = document.getElementById("start-button");


class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.questionList = 0; 
    }
  
    getQuestionList () {
      return this.questions[this.questionList];
    }
  
    guess(answer) {
      if (this.getQuestionList().isCorrectAnswer(answer))
      this.score++;
      this.questionList++;
    }
  
    isOver() {
      return this.questionList === this.questions.length;
      }
  }
  
  class Question {
    constructor(text, options, answer){
      this.text = text; 
      this.options = options; 
      this.answer = answer;
    }
  
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }











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



  