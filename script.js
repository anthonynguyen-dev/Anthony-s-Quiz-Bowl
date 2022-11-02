var startBtn = document.querySelector("#start-btn");
var questions = [
  {
    questionText: "What kind of casing is most commonly used in Javascript?",
    answerChoices: ["LowerCase", "UpperCase", "CamelCase", "PascalCase"],
    correctAnswer: "CamelCase",
  },
];
function startQuiz() {
  console.log("hello");
}
startBtn.addEventListener("click", startQuiz);
