var startBtn = document.querySelector("#start-btn");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerD = document.querySelector("#answer-d");
var answerBtns = document.querySelectorAll(".answer-btn");
var head = document.querySelector(".head");

var questionHolder = document.querySelector("#question-container");
var question = document.querySelector("#question");
var currentQuestion = 0;

var timer = document.querySelector(".time");
var timeLeft = 90;

var highScore = document.querySelector("#high-score");
var highScoreContainer = document.querySelector("#highscore-container");
var finalScore = document.querySelector("#score");
var currentScore = document.querySelector("#userScore");
var score = 0;

var highScoreChart = document.querySelector("#done");
var submitInitials = document.querySelector("#submitInitials");
var initialsTag = document.querySelector("#initialsTag");
var clearScores = document.querySelector("#clearLeaderBoards");
var home = document.querySelector("#goHome");
var savedHighscores = [];
loadHighScore();
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
  timeLeft = 90;
  score = 0;
  currentQuestion = 0;
  questionHolder.style.visibility = "visible";
  answerA.style.visibility = "visible";
  answerB.style.visibility = "visible";
  answerC.style.visibility = "visible";
  answerD.style.visibility = "visible";
  currentScore.style.visibility = "visible";

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
        endQuiz();
      }
    }, 1000);
  }

  setCountDown();
  createQuestion();
}

function createQuestion() {
  startBtn.style.visibility = "hidden";
  question.textContent = questions[currentQuestion].questionText;
  answerA.textContent = questions[currentQuestion].answerChoices[0];
  answerB.textContent = questions[currentQuestion].answerChoices[1];
  answerC.textContent = questions[currentQuestion].answerChoices[2];
  answerD.textContent = questions[currentQuestion].answerChoices[3];
}
function answerCheck(event) {
  if (event.target.textContent === questions[currentQuestion].correctAnswer) {
    console.log("correct");
    score += 10;
    finalScore.textContent = score;
  } else {
    timeLeft -= 10;
    timer.textContent = timeLeft;
    console.log("incorrect");
  }
  if (currentQuestion >= questions.length - 1) {
    endQuiz();
  } else {
    currentQuestion++;
    createQuestion();
  }
}

function endQuiz() {
  console.log("game has ended");
  questionHolder.style.visibility = "hidden";
  answerA.style.visibility = "hidden";
  answerB.style.visibility = "hidden";
  answerC.style.visibility = "hidden";
  answerD.style.visibility = "hidden";
  currentScore.style.visibility = "visible";
  highScoreChart.style.visibility = "visible";
  finalScore.textContent = score;
}

startBtn.addEventListener("click", startQuiz);
submitInitials.addEventListener("click", submitHighScore);
function submitHighScore(event) {
  event.preventDefault();
  var initials = initialsTag.value;
  var highScore = {
    name: initials,
    score: score,
  };
  savedHighscores.push(highScore);
  console.log(savedHighscores);
  localStorage.setItem("player", JSON.stringify(savedHighscores));
}
function loadHighScore() {
  var player = localStorage.getItem("player");
  console.log(player);
  if (player === null) {
    savedHighscores = [];
  } else {
    savedHighscores = JSON.parse(player);
    for (var i in savedHighscores) {
      highScoreContainer.appendChild(
        document.createElement("div")
      ).textContent =
        "name: " +
        savedHighscores[i].name +
        " score: " +
        savedHighscores[i].score;
    }
  }
}
function clearHighScores() {
  localStorage.clear();
  highScoreContainer.innerHTML = "";
  savedHighscores = [];
}

for (let i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", answerCheck);
}
clearScores.addEventListener("click", clearHighScores);

function goHome() {
  highScoreChart.style.visibility = "hidden";
  startBtn.style.visibility = "visible";
  head.style.visibility = "visible";
}

home.addEventListener("click", goHome);
