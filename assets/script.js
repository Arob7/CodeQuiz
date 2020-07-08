let startButton = document.getElementById("start-button");
let containerQuestionsEl = document.getElementById("container-questions");
let questionEl = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let submitButton = document.getElementById("submit-button");
var score = 0;

// WHEN CLICKED THIS STARTS THE QUIZ AND TIMER
startButton.addEventListener("click", start);
startButton.addEventListener("click", countDown);

var timeLeft = 60;
var timeEl = document.querySelector(".time");

// COUNTDOWN TIMER FUNCTION
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
//  MESSAGE WHEN TIME RUNS OUT
function sendMessage() {
  timeEl.textContent = "Time's Up!";
}

// THIS FUNCTION PROMPTS QUESTIONS AFTER START BUTTON CLICKED
function start() {
  console.log("Quiz Started");
  startButton.classList.add("hide");
  containerQuestionsEl.classList.remove("hide");
  submitButton.classList.remove("hide");
}

// TRYING TO FIGURE OUT HOW TO MAKE QUESTIONS LOOP?
function nextQuestion() {
  for (let i = 0; i < questions.length; i++) {
    questions[i].question;

    questionEl.textContent = questions + "";
  }
  containerQuestionsEl.classList.remove("hide");

  if (containerQuestionsEl.style.display === "none") {
    containerQuestionsEl.style.display = "block";
  } else {
    containerQuestionsEl.style.display = "none";
  }
  submitButton.classList.remove("hide");
}

// SUBMIT BUTTON GRABS NEXT QUESTION
submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
  console.log("Submit Button clicked");
  nextQuestion();
  containerQuestionsEl.classList.remove("hide");
}

// function showQuestion() {
//   questionEl.innerText = question.question;
//   question.choices.forEach((choices) => {
//     let button = document.createElement("button");
//     button.innerText = choices.text;
//     button.classList.add("choicebutton");
//     if (choices.correct) {
//       button.dataset.correct = choices.correct;
//     }
//   });
// }

// THIS VALIDATES RADIO BUTTONS AND WORKS!!
// function check() {
//   if (document.getElementById("answerOne").checked) alert("Correct!");
//   else alert("Wrong answer!");
// }

// QUESTIONS
let questions = [
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: [
      {
        answer: "onchange",
        correct: false,
      },
      {
        answer: "onmouseclick",
        correct: false,
      },
      {
        answer: "onclick",
        correct: true,
      },
      {
        answer: "onmouseover",
        correct: false,
      },
    ],
  },

  {
    question: "Inside which HTML tag do we put the JavaScript?",
    choices: [
      {
        answer: "<js>",
        correct: false,
      },
      {
        answer: "<javascript>",
        correct: false,
      },
      {
        answer: "scripting",
        correct: false,
      },
      {
        answer: "<script>",
        correct: true,
      },
    ],
  },

  {
    question: "How do you create a function in JavaScript?",
    choices: [
      {
        answer: "call aFunction()",
        correct: false,
      },
      { answer: "aFunction()", correct: true },

      { answer: "call function aFunction", correct: false },

      { answer: "var aFunction()", correct: false },
    ],
  },

  {
    question: "Which operator is used to assign a value to a variable?",
    choices: [
      { answer: "*", correct: false },
      { answer: "=", correct: true },
      { answer: "-", correct: false },
      { answer: ":", correct: false },
    ],
  },

  {
    question: "How to write an IF statement in JavaScript?",
    choices: [
      {
        answer: "if i == 3",
        correct: false,
      },
      { answer: "if i = 3", correct: false },
      { answer: "if (i==3)", correct: true },
      { answer: "if (i=3) then", correct: false },
    ],
  },
];

// console.log(student.firstName)
// console.log(questions[3].question)
// console.log(questions[3].choices[2])

// THIS IS FOR SCORE COUNTER
// var count = 0;
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
