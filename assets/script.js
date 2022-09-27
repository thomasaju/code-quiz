var clock = document.querySelector("#clock");
var timeRemaining = document.querySelector("#timeRemaining");
var timeOver = document.querySelector("#timeOver");
var mainContent = document.querySelector("main-content");
var startButton = document.querySelector("#start-button");
var questionDivision= document.querySelector("#question-division");
var quizQuestion = document.querySelector("#quiz-question")
var answerA = document.querySelector("#button1");
var answerB = document.querySelector("#button2");
var answerC = document.querySelector("#button3");
var answerD = document.querySelector("#button4");
var answerCheck = document.querySelector("#answerCheck");
var finalPage = document.querySelector("#final-page");
var submitNameBtn = document.querySelector("#submitNameBtn");
var nameInput = document.querySelector("#nameInput");
var highScoreList = document.querySelector("#highScoreList");
var finalScore = document.querySelector("#finalScore");
var backBtn = document.querySelector("#backBtn");
var clearScoreBtn = document.querySelector("#clearScoreBtn");
var highScore = document.querySelector("#highScore");
var listScores = document.querySelector("#listScores");

var questions =[    //created 
{
    question : "whhhaat is ..?",
    choices : ["a.aa","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
},
{
    question : "whhhaat is ..?",
    choices : ["a.qq","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
},
{
    question : "whhhaat is ..?",
    choices : ["a.ww","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
},
{
    question : "whhhaat is ..?",
    choices : ["a.ee","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
},
{
    question : "whhhaat is ..?",
    choices : ["a.rr","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
}
];






//WHN START BUTTON CLICK THE CLOCK INITIATED

var totalTime = 50;
function startQuiz(){
    totalTime--;
    timeRemaining.textContent = totalTime

}







