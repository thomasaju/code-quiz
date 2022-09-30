//created 
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
var optionList = document.querySelector("#option-list");

var questions =[    //created questions.question
{
    question : "Javascript is an _______ language?",
    options : ["Object-Oriented","Object_Based", "Procedural", "None of the Above"],
    answer : "Object-Oriented"
},
{
    question : "Which of the following keywords is used to define a variable in Javascript?",
    options  : ["Var","Let", "Both A & B", "None of the Above"],
    answer : "Both A & B"
},
{
    question : "How can a datatype be declared to be a constant type?",
    options : ["Const","Var", "Let", "None of the Above"],
    answer : "Const"
},
{
    question : "Which of the following are closures in Javascript?",
    options : ["Variables","Functions", "Objects", "All of the above"],
    answer : "All of the above"
},
];






//WHN START BUTTON CLICK THE CLOCK INITIATED
var rightAns = 0;
var qIndex = 0;
var totalTime = 80;


function startQuiz(){
    qIndex = 0;
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
            if (totalTime === 0){
                clearInterval(startClock);
                timeOver.style.display = "block";
                quizFinished()

                if (qIndex <= questions.length){
                    quizFinished()
                }
            }

        }, 1000);

        displayQuiz();

}



function displayQuiz(){
    questionsFun();
}

function questionsFun(){

    quizQuestion.textContent = questions[qIndex].question;
    answerA.textContent = questions[qIndex].options[0]
    answerB.textContent = questions[qIndex].options[1]
    answerC.textContent = questions[qIndex].options[2]
    answerD.textContent = questions[qIndex].options[3]

}
function checkAnswer(answer) {

    answerCheck.style.display= "block"

    if (questions[qIndex].answer === questions[qIndex].options[answer]) {
        rightAns++
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
        quizFinished();
    }

}

function quizFinished(){
    quizQuestion.style.display = "none";
    // summary.style.display = "block";
    answerCheck.style.display = "none";
    optionList.style.display= "none";
    clock.style.display = "none";
    var img = document.createElement("img");
    img.src = "./Images/over.webp";
    questionDivision.appendChild(img);
    finalPage.style.display = "block";
    finalScore.textContent = rightAns;//to show the score
    console.log(rightAns);

}



function viewHighScores(event){
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Enter your name, you can't leave this blank");
        return;
    };



   var localHighScores = localStorage.getItem("Scores");
   var scores;

//    console.log(localHighScores);


   if (localHighScores=== null){
    scores=[];
   } else{
    scores= JSON.parse(localHighScores)
   }

   var individualSCores = {
    name:nameInput.value,
    score: finalScore.textContent
   };
   console.log(individualSCores);
   scores.unshift(individualSCores);


   var scoresArray = JSON.stringify(scores);
   console.log(scoresArray);
   localStorage.setItem("scores", scoresArray);


   scoreList();

}



function scoreList(){
    highScoreList.style.display = "block";
    mainContent.style.display = "none";

    var localStoredScore = localStorage.getItem("scores");

if(localStoredScore === null){
    return;
}
console.log(localStoredScore);




var localystored = JSON.parse(localStoredScore);

for (var i=0;i < localystored.length; i++){
    var personalSCore = document.createElement("h6");
    personalSCore.innerHTML = ("Name: " + localystored[i].name + " Score :" + localystored[i].score);
    listScores.appendChild(personalSCore);
}

}


   











function optionA() { checkAnswer(0); }

function optionB() { checkAnswer(1); }

function optionC() { checkAnswer(2); }

function optionD() { checkAnswer(3); }



startButton.addEventListener("click", startQuiz);
answerA.addEventListener("click", optionA);
answerB.addEventListener("click", optionB);
answerC.addEventListener("click", optionC);
answerD.addEventListener("click", optionD);

submitNameBtn.addEventListener("click", function(event){
    viewHighScores(event);
});


highScore.addEventListener("click", function(event) { 
    scoreList(event);
});

backBtn.addEventListener("click",function(){
    mainContent.style.display = "block";
    highScoreList.style.display = "none";
    finalPage.style.display = "none";
    answerCheck.style.display = "none";
    clock.style.display = "none";
    quizQuestion.style.display = "none";
    questionDivision.style.display="none";
    finalScore.style.display="none";
    submitNameBtn.style.display="none";
})
clearScoreBtn.addEventListener("click",function(){
    mainContent.style.display = "block";
    highScoreList.style.display = "none";
    finalPage.style.display = "none";
    answerCheck.style.display = "none";
    clock.style.display = "none";
    quizQuestion.style.display = "none";
    questionDivision.style.display="none";
    finalScore.style.display="none";
    submitNameBtn.style.display="none";
    localStorage.removeItem("score")
})


