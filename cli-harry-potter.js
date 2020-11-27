var readlineSync = require("readline-sync");
var score = 0;

var ck = require("chalk");

var userName = readlineSync.question(
  ck.rgb(248, 248, 255).bgBlack("Please enter your name? ")
);

console.log(
  ck.blue.underline.bold(
    "\nHi " +
      ck.underline.red(userName) +
      " welcome to " +
      ck.underline.red("~POTTER HEAD~\n")
  )
);

console.log(
  ck
    .rgb(248, 248, 255)
    .bgBlack(
      "1. User with all correct asnwer WINS!\n2. Only choose the option 1, 2 or 3\n"
    )
);

function gamePlay(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(ck.green("You are Right!"));
    score += 1;
  } else {
    console.log(ck.red("You are wrong!"));
    score -= 1;
  }
  console.log("Your current score is: " + score + "\n");
  console.log(
    ck.yellowBright.bold("      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~          \n")
  );
}

questions = [
  {
    question:
      "What is the middle name of Harry Potter son?\n1. Albus\n2. Severus\n3. Harry\n",
    answer: "2",
  },
  {
    question:
      "Who is Tom Riddle?\n1. Hagrid\n2. Voldemort\n3. Albus Dumbledore\n",
    answer: "2",
  },
  {
    question:
      "Who killed Dumbledore?\n1. Severus Snape\n2. Sirius Black\n3. Draco Malfoy\n",
    answer: "1",
  },
  {
    question:
      "What was the name of last hocrux to be destroyed?\n1. Marvolo Gaunt's Ring\n2. Tom Riddle's Diary\n3. Nagini\n",
    answer: "3",
  },
  {
    question:
      "Who killed sirius black?\n1. Bellatrix\n2. Severus Snape\n3. Lucius Malfoy\n",
    answer: "1",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  gamePlay(currentQuestion.question, currentQuestion.answer);
}

var highScore = [
  {
    name: "Rohit",
    score: 5,
  },
  {
    name: "Priya",
    score: 4,
  },
  {
    name: "Ankit",
    score: 4,
  },
];

//leaderboard
console.log(ck.bgCyan("\n####### LEADERBOARD #######\n"));

for (var i = 0; i < highScore.length; i++) {
  var newScore = highScore[i];
  console.log(newScore.name, newScore.score);
}

console.log(
  ck.rgb(248, 248, 255).bgBlack("\nYour final score is: " + score + "\n")
);

//checking the score-board
if (score === 5) {
  console.log(
    ck.bold.green(
      "\nCongratulations! You've beaten the high score: " +
        score +
        ", Send me the screenshot!"
    )
  );
} else {
  console.log(ck.bold.red("\nNice try!"));
}
