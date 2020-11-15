// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
var timeEl = document.querySelector(".timer");
var startEl = document.getElementById("startquiz");
var quizEl = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizquestion");
var firstAnswer = document.getElementById("a");
var secondAnswer = document.getElementById("b");
var thirdAnswer = document.getElementById("c");
var fourthAnswer = document.getElementById("d");
var userInput = document.getElementById("userinput");
var userInitials = document.getElementById("userinititals");
var submitEl = document.getElementById("submit");
var submissionResponseEl = document.getElementById("response");
var correctAnswer = document.getElementById("correctAnswer");
var quizQuestionIndex = 0;
var userScore = 0;
var secondsLeft = 60;
quizEl.style.display = "none"
userInput.style.display = "none";
var myQuestions = [
    {
    question: "What is JavaScript?",
    answers: {
        answera: "a programming language",
        answerb: "a brand of computers",
        answerc: "a type of chemical",
        answerd: "a clothing brand"
        },
        correctAnswer: "a"
    },
    {
    question: "What is CSS used for?",
    answers: {
      answera: "to save data",
      answerb: "to style our webpage",
      answerc: "to add functionality to our webpage",
      answerd: "to make our computer operate more efficiently"
        },
        correctAnswer: "b"
    },
    {
    question: "Which applications can be used to write code?",
    answers: {
      answera: "adobe photoshop",
      answerb: "microsoft word",
      answerc: "vs code",
      answerd: "spotify"
        },
        correctAnswer: "c"
    },
    {
    question: "What is Git?",
    answers: {
      answera: "a type of food",
      answerb: "microsoft word",
        answerc: "",
        d: "a version control system"
        },
        correctAnswer: "d"
    },
  ];
  function generateQuiz () {
  //  quizintro.style.display = "none";
  
var currentQuestion = myQuestions[quizQuestionIndex];
  quizQuestion.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
  a.innerHTML = currentQuestion.answers.answera;
  b.innerHTML = currentQuestion.answers.answerb;
  c.innerHTML = currentQuestion.answers.answerc;
  d.innerHTML = currentQuestion.answers.answerd;
  }
  function checkAnswer (choice) {
    if (choice == myQuestions[quizQuestionIndex]){
      userScore++
      correctAnswer.innerText = "Right Answer!"
    }
    else {
      secondsLeft = secondsLeft -5 
    }
    if (quizQuestionIndex < myQuestions.length - 1){
      quizQuestionIndex++
      generateQuiz()
    }
    else {alert("Game Over!")}
  }



function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval); // This might cause issues on my last question
    }

    }, 1000);
}


startEl.addEventListener("click", function() {
  console.log("Hello")
  quizEl.style.display = "block"
  startEl.style.display = "none"
  generateQuiz()
  setTime();
});


// Questons Functions




submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var response = "Thank you for your submission " + userInitials.value + "! Thank for taking the time to take our quiz.";
  submissionResponseEl.textContent = response;
});