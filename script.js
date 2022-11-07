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
var timeLeft = 15;
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
    questionText: "",
  },
];
function startQuiz() {
  question.textContent = questions[currentQuestion].questionText;
  answerA.textContent = questions[currentQuestion].answerChoices[0];
  answerB.textContent = questions[currentQuestion].answerChoices[1];
  answerC.textContent = questions[currentQuestion].answerChoices[2];
  answerD.textContent = questions[currentQuestion].answerChoices[3];

  function setCountDown() {
    var countDown = setInterval(function () {
      timeLeft--;
      timer.textContent = "Time Left: " + timeLeft;
      if (timeLeft === 0) {
        clearInterval(countDown);
      }
    }, 1000);
  }

  setCountDown();
}
function answerCheck(event) {
  if (event.target.textContent === questions[currentQuestion].correctAnswer) {
    console.log("correct");
  } else {
    console.log("incorrect");
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
