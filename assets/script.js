var clock = document.querySelector("#clock");
var timeRemaining = document.querySelector("#timeRemaining");
var timeOver = document.querySelector("#timeOver");
var mainContent = document.querySelector("#main-content");
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
    question : "hhaat is ..?",
    choices : ["a.qq","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
},
{
    question : "waat is ..?",
    choices : ["a.ww","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
},
{
    question : "aat is ..?",
    choices : ["a.ee","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
},
{
    question : "at is ..?",
    choices : ["a.rr","b.Bb", "c.Cc", "d.Dd"],
    answer : "d.Dd"
}
];






//WHN START BUTTON CLICK THE CLOCK INITIATED
var rightAns = 0;
var qnum= 0;
var qIndex = 0;
var result;
var totalTime = 80;


function startQuiz(){
    // qIndex = 0;
    totalTime= 80;
    timeRemaining.textContent = totalTime;
    nameInput.textContent = "";

    mainContent.style.display = "none";
    questionDivision.style.display = "block";
    clock.style.display = "block";
    // timeOver.style.display = "none";

    var startClock = setInterval(function() {
            totalTime --;
            timeRemaining.textContent = totalTime;
            if (totalTime == 0){
                clearInterval(startClock);
                // if (qIndex < questions.length - 1){
                //     gameOver()
                // }
            }

        }, 1000);

        displayQuiz();

}



function displayQuiz(){
    questionsFun();
}

function questionsFun(){

    quizQuestion.textContent = questions[0].question;
    answerA.textContent = questions[0].choices[0]
    answerB.textContent = questions[0].choices[1]
    answerC.textContent = questions[0].choices[2]
    answerD.textContent = questions[0].choices[3]

}
function checkAnswer(answer) {

    answerCheck.style.display= "block"

    if (questions[qIndex].answer === questions[qIndex].choices[answer]) {
        // rightAns++
        answerCheck.textContent = "Correct";
        console.log(rightAns);
    } else {
        totalTime -= 15;
        timeRemaining.textContent = totalTime;
        answerCheck.textContent = "Wrong";
    }
        
        qIndex++;
    if (qIndex < questions.length){
        questionsFun();
    } else {
        alert("game over");
    }

}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }



startButton.addEventListener("click", startQuiz);
answerA.addEventListener("click", chooseA);
answerB.addEventListener("click", chooseB);
answerC.addEventListener("click", chooseC);
answerD.addEventListener("click", chooseD);







