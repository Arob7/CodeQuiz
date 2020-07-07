let startQuiz = document.getElementById("start-button");
let containerQuestionsEl = document.getElementById("container-questions");
let questionEl = document.getElementById("question");
let answerButtonEl = document.getElementById("answer-buttons");
let submitButton = document.getElementById("submit-button");

// WHEN CLICKED THIS STARTS THE QUIZ AND TIMER
startQuiz.addEventListener("click", start);
startQuiz.addEventListener("click", countDown);

// THIS IS THE COUNTDOWN TIMER
var timeLeft = 60;
var timeEl = document.querySelector(".time");

// START FUNCTION IN PARAMETERS, EVENTLISTENER OR DOM IN COUNTDOWN FUNCTION?

function countDown() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + " sec(s) left!";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Time's Up!";
}

// WHEN DO WE CALL THIS FUNCTION?

// THIS IS THE FUNCTION THAT WILL START THE QUIZ
function start() {
  console.log("Quiz Started");
  startQuiz.classList.add("hide");
  containerQuestionsEl.classList.remove("hide");
  submitButton.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {}

function showQuestion(questionS) {
  questionEl.innerText = question.question;
  question.choices.forEach((choices) => {
    let button = document.createElement("button");
    button.innerText = choices.text;
    button.classList.add("choicebutton");
    if (choices.correct) {
      button.dataset.correct = choices.correct;
    }
  });
}

function submitAnswer() {}

let questions = [
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onclick", "onmouseover"],
  },

  {
    question: "Inside which HTML tag do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "scripting", "<script>"],
  },

  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "call aFunction()",
      "aFunction()",
      "call function aFunction",
      "var aFunction()",
    ],
  },

  {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["*", "=", "-", ":"],
  },

  {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if i == 3", "if i = 3", "if (i==3)", "if (i=3) then"],
  },
];

// THIS LOOPS THROUGH THE QUESTIONS
for (let i = 0; i < questions.length; i++) {
  console.log(questions[i].question);
}

// THIS VALIDATES RADIO BUTTONS AND WORKS!!
function check() {
  if (document.getElementById("answerOne").checked) alert("Correct!");
  else alert("Wrong answer!");
}

// let answerTwo = "<script>";
// let answerThree = "aFunction()";
// let answerFour = "=";
// let answerFive = "if (i==3)";

// QUESTIONS
let questionTwo = [
  {
    question: "Inside which HTML tag do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "scripting", "<script>"],
    correctAnswer: "<script>",
  },
];

let questionThree = [
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "call aFunction()",
      "aFunction()",
      "call function aFunction",
      "var aFunction()",
    ],
    correctAnswer: "aFunction()",
  },
];

let questionFour = [
  {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["*", "=", "-", ":"],
    correctAnswer: "=",
  },
];

let questionFive = [
  {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if i == 3", "if i = 3", "if (i==3)", "if (i=3) then"],
    correctAnswer: "if (i==3)",
  },
];

// }

// PRACTICE AREA

// THIS LOOPS THROUGH THE QUESTIONS
// for (let i = 0; i < questions.length; i++) {
//   console.log(questions[i].question);
// }

// for (let x of questions) {
//   console.log(x.question);
// }

// questions.forEach(function (a) {
//   console.log(a.question);
// });
// questions.forEach(function (b) {
//   console.log(b.choices);
// });

// questions.forEach(function (c) {
//   console.log(c.correctAnswer);
// });

// for (let y of choices) {
//   console.log(y)
// }

//create counter to know which question you are on --THIS IS TIMER

// var student = {
//     firstName: "Ari",
//     tutoring: true
// }

// var firstname = "Ari"
// console.log(firstname)

// console.log(student.firstName)
// console.log(questions[3].question)
// console.log(questions[3].choices[2])

// THIS IS FOR SCORE COUNTER
// var count = 0;
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// function setCounterText() {
//   countEl.textContent = count;
// }

// incrementEl.addEventListener("click", function () {
//   count++;
//   setCounterText();
// });

// decrementEl.addEventListener("click", function () {
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });
