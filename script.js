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
var startEl = document.getElementById("startquiz")
var quizEl = document.getElementById("quiz")
var quizQuestion = document.getElementById("quizquestion")
var firstAnswer = document.getElementById("answerone")
var secondAnswer = document.getElementById("answertwo")
var thirdAnswer = document.getElementById("answerthree")
var fourthAnswer = document.getElementById("answerfour")
var userInput = document.getElementById("userinput")
var userInitials = document.getElementById("userinititals")
var userSubmit = document.getElementById("usersubmit")
quizEl.style.display = "none"
var myQuestions = [
    {
    question: "What is JavaScript?",
    answers: {
        a: "a programming language",
        b: "a brand of computers",
        c: "a type of chemical",
        d: "a clothing brand"
        },
        correctAnswer: "a"
    },
    {
    question: "What is CSS used for?",
    answers: {
        a: "to save data",
        b: "to style our webpage",
        c: "to add functionality to our webpage",
        d: "to make our computer operate more efficiently"
        },
        correctAnswer: "b"
    },
    {
    question: "Which applications can be used to write code?",
    answers: {
        a: "adobe photoshop",
        b: "microsoft word",
        c: "vs code",
        d: "spotify"
        },
        correctAnswer: "c"
    },
    {
    question: "What is Git?",
    answers: {
        a: "a type of food",
        b: "microsoft word",
        c: "",
        d: "a version control system"
        },
        correctAnswer: "d"
    },
  ];

var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;
    }, 1000);
}

// function firstQuestion() {
//         question: "What is JavaScript?",
//         answers: 
//         a: "a programming language";
//         b: "a brand of computers";
//         c: "a type of chemical";
//         correctAnswer: "c";
      
//       timeEl.textContent = "";
  
//       if(userInput === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     };

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
