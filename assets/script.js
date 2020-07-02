function Start()




var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Marketing Language",
      "Hyper Text Marketing Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "What is your names",
    choices: ["a", "alksjfd", "as;dklj", "a;lskdj"],
    correctAnswer: "alksjfd",
  },
  {
    question: "What is your city",
    choices: ["a", "alksjfd", "as;dklj", "a;lskdj"],
    correctAnswer: "alksjfd",
  },
  {
    question: "What is your name",
    choices: ["a", "alksjfd", "as;dklj", "a;lskdj"],
    correctAnswer: "alksjfd",
  },
];

//create counter to know which question you are on
function Countdown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " ";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

// var student = {
//     firstName: "Ari",
//     tutoring: true
// }

// var firstname = "Ari"
// console.log(firstname)

// console.log(student.firstName)
// console.log(questions[3].question)
// console.log(questions[3].choices[2])
