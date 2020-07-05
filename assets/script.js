// let startQuiz = document.getElementById("startButton");

document.getElementById("startButton").addEventListener("click", start);

//   document.getElementById("text").innerText
// }

// let answerTwo = "<script>";
// let answerThree = "aFunction()";
// let answerFour = "=";
// let answerFive = "if (i==3)";

function start() {
  // document.getElementById("questionOne").innerHTML;
  console.log(answer.value);
}
//   start.style.display = "none";
// }

let questionOne = [
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onclick", "onmouseover"],
  },
];

// THIS VALIDATES RADIO BUTTONS AND WORKS!!
function check() {
  if (document.getElementById("answerOne").checked) alert("Correct!");
  else alert("Wrong answer!");
}

// let questionTwo = [
//   {
//     question: "Inside which HTML tag do we put the JavaScript?",
//     choices: ["<js>", "<javascript>", "scripting", "<script>"],
//     correctAnswer: "<script>",
//   },
// ];

// let questionThree = [
//   {
//     question: "How do you create a function in JavaScript?",
//     choices: [
//       "call aFunction()",
//       "aFunction()",
//       "call function aFunction",
//       "var aFunction()",
//     ],
//     correctAnswer: "aFunction()",
//   },
// ];

// let questionFour = [
//   {
//     question: "Which operator is used to assign a value to a variable?",
//     choices: ["*", "=", "-", ":"],
//     correctAnswer: "=",
//   },
// ];

// let questionFive = [
//   {
//     question: "How to write an IF statement in JavaScript?",
//     choices: ["if i == 3", "if i = 3", "if (i==3)", "if (i=3) then"],
//     correctAnswer: "if (i==3)",
//   },
// ];

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

// WILL I HAVE TO MAKE A LOOP FOR CHOICES AND CORRECTANSWER ALSO?

//create counter to know which question you are on --THIS IS TIMER
// function Countdown() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " ";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }

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
