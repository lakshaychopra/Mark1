var readlineSync = require('readline-sync')
var chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.blue("Hello...What is your name? "));
console.log("\n");
console.log(chalk.blue("Welcome ") + chalk.blue(userName) + chalk.blue(" to how well do you know Lakshay"));

var highScores = [
    {
        name: "Test",
        score: 0
    },
    {
        name: "Suryansh",
        score: 6
    }
]
var highScore = 0;

var questions = [
    {
        question: "When does my birthday comes? \na: 28th September \nb: 27th October \nc: 18th November\n",
        answer: "a"
    },
    {
        question: "What is the name of my cat? \na: Roxy \nb: Ginger \nc: Goldy\n",
        answer: "c"
    },
    {
        question: "Which one of these is my favourite sport? \na: Football \nb: Cricket \nc: Tennis\n",
        answer: "b"
    },
    {
        question: "Which OS I love to use? \na: Windows 10 \nb: Manjaro \nc: Ubuntu\n",
        answer: "b"
    },
    {
        question: "Which of these is my favourite tv series? \na: Friends \nb: Broklynn 99 \nc: The Office\n",
        answer: "c"
    },
    {
        question: "How many members are in my family? \na: 4 \nb: 5 \nc: 6\n",
        answer: "a"
    },
    {
        question: "Which one of these is my favourite fast food restaurant? \na: McDonalds \nb: KFC \nc: Dominos\n",
        answer: "c"
    },
    {
        question: "Which one I prefer Tea or Coffee? \na: Coffee \nb: Tea\n",
        answer: "a"
    },
    {
        question: "Which one of these is my favourite food? \na: Rajma-Chawal \nb: Dosa \nc: Chole-Bhature\n",
        answer: "c"
    },
    {
        question: "Which is my favourite sweet? \na: Gulab Jamun \nb: Barfi \nc: Rasgulla\n",
        answer: "a"
    },

]

function quiz(question, answer) {
    var userAnswer =  readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()){
        score = score + 1;
        console.log(chalk.green("That's Right!!!"));
    }
    else {
        console.log(chalk.red("Wrong!!!"));
    }
} 

    
for (var i=0; i<questions.length; i=i+1)
{
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
    console.log("\n");
}

for(var i=0; i<highScores.length;i=i+1)
{
    if(highScore<highScores[i].score){
        highScore=highScores[i].score;
    }
}
console.log(chalk.magentaBright("---------------------------------"));
if(score>highScore){
    console.log(chalk.green("Congrats!!! You have beaten the highscore"));
    highScore=score; 
}
else if(score===highScore){
    console.log(chalk.yellow("Congrats!!! You have matched the highScore"));
}
console.log(chalk.cyan("Your Score "+ score));
console.log(chalk.magentaBright("---------------------------------"));
