var startBtn = document.querySelector("#start-btn");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerD = document.querySelector("#answer-d");
var answerBtns = document.querySelectorAll(".answer-btn");

var questionHolder = document.querySelector("#question-container");
var question = document.querySelector("#question");
var currentQuestion = 0;

var timer = document.querySelector(".time");
var timeLeft = 120;

var highScore = document.querySelector("#high-score");
var highScoreContainer = document.querySelector("#high-scoreContainer");
var finalScore = document.querySelector("#score");

var questions = [
  {
    questionText: "What kind of casing is most commonly used in Javascript?",
    answerChoices: ["LowerCase", "UpperCase", "CamelCase", "PascalCase"],
    correctAnswer: "CamelCase",
  },
  {
    questionText:
      "What is the correct syntax to add an event listener to a button?",
    answerChoices: [
      "element.addEventListener",
      "addEventListener.element",
      "eventListenerElement.add",
      "ListenerEventElement.add",
    ],
    correctAnswer: "element.addEventListener",
  },
  {
    questionText: "Which of the following is a datatype?",
    answerChoices: ["Boolean", "Function", "Objects", "Arrays"],
    correctAnswer: "Boolean",
  },
  {
    questionText: "What is used to identify the first index of an array?",
    answerChoices: ["Letters", "Numbers", "functions", "Booleans"],
    correctAnswer: "Numbers",

    questionText: "The first index of an array is ___.",
    answerChoices: ["8", "5", "1", "0"],
    correctAnswer: "0",
  },
  {
    questionText: "How is a string identified?",
    answerChoices: ["quotes", "straight brackets", "colons", "dashes"],
    correctAnswer: "quotes",
  },
  {
    questionText:
      "Which of the following shows that two variables have a strict equality?",
    answerChoices: ["==", "=", "===", ":"],
    correctAnswer: "===",
  },
  {
    questionText: "What is the correct way to create a function?",
    answerChoices: [
      "createFunction",
      "function functionName()",
      "createFunction()",
      "function = functionName()",
    ],
    correctAnswer: "function functionName()",
  },
  {
    questionText: "How is JavaScript put into the HTML?",
    answerChoices: ["<script>", "src:", "<link>", "<javascript>"],
    correctAnswer: "<script>",
  },
  {
    questionText:
      "Which of the following is a type of Pop up box available in Javascipt?",
    answerChoices: ["Pop-up", "Surprise", "Reminder", "Alert"],
    correctAnswer: "Alert",
  },
];

function startQuiz() {
  startBtn.style.display = "none";
  question.textContent = questions[currentQuestion].questionText;
  answerA.textContent = questions[currentQuestion].answerChoices[0];
  answerB.textContent = questions[currentQuestion].answerChoices[1];
  answerC.textContent = questions[currentQuestion].answerChoices[2];
  answerD.textContent = questions[currentQuestion].answerChoices[3];

  function setCountDown() {
    var countDown = setInterval(function () {
      if (timeLeft > 1) {
        timer.textContent = timeLeft + " seconds remaining";
        timeLeft--;
      } else if (timeLeft === 1) {
        timer.textContent = timeLeft + " second remaining";
        timeLeft--;
      } else {
        timer.textContent = "NO TIME LEFT";

        clearInterval(countDown);
      }
    }, 1000);
  }

  setCountDown();
}
function answerCheck(event) {
  if (event.target.textContent === questions[currentQuestion].correctAnswer) {
    answerCheck.textContent = "Correct!";
  } else {
    timeLeft -= 5;
    timer.textContent = timeLeft;
    answerCheck.textContent = "Incorrect!";
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    startQuiz();
  }
}
function endQuiz() {}

startBtn.addEventListener("click", startQuiz);

for (let i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", answerCheck);
}
