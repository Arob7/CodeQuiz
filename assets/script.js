// function start() {

// SHOULD START BUTTON BE ITS OWN FUNCTION APART FROM QUESTIONS OR TOGETHER??

// THIS IS A VARIABLE THAT HAS ARRAYS WITHIN AN ARRAY AND MULTIPLE OBJECTS
var questions = [
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onclick", "onmouseover"],
    correctAnswer: "onclick",
  },
  {
    question: "Inside which HTML tag do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "scripting", "<script>"],
    correctAnswer: "<script>",
  },
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
  {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["*", "=", "-", ":"],
    correctAnswer: "=",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if i == 3", "if i = 3", "if (i==3)", "if (i=3) then"],
    correctAnswer: "if (i==3)",
  },
];
// }

// PRACTICE AREA
// console.log(questions[0].choices[2]);

// console.log(questions[4].correctAnswer);

// THIS LOOPS THROUGH THE QUESTIONS
for (let i = 0; i < questions.length; i++) {
  console.log(questions[i].question);
}

for (let x of questions) {
  console.log(x);
}

// WILL I HAVE TO MAKE A LOOP FOR CHOICES AND CORRECTANSWER ALSO?

//create counter to know which question you are on
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
