//created variables for all the elements by using querySelector
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
var fullScoreList = document.querySelector("#fullScoreList");
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






var rightAns = 0; //starting from zero after each question is right this will increment.
var qIndex = 0;
var totalTime = 80; 

//First Function when StartQuiz Button Initiated

function startQuiz(){

    timeRemaining.textContent = totalTime;
    mainContent.style.display = "none";
    questionDivision.style.display = "block"; //QuestionDivision is visible

    //created a setInterval Function 
    var startClock = setInterval(function() {
            totalTime --; // decrement of 1 second
            timeRemaining.textContent = totalTime; //shows the remaining time in timeremaining.
            if (totalTime === 0){
                clearInterval(startClock); // When time reaches Zero ,clearinterval function
                timeOver.style.display = "block"; // It is hidden by default from html and css
                quizFinished()

            }

        }, 1000); //milliseconds

        questionsFun();

}

//shows Qyestions and options
function questionsFun(){

    quizQuestion.textContent = questions[qIndex].question;
    answerA.textContent = questions[qIndex].options[0]
    answerB.textContent = questions[qIndex].options[1]
    answerC.textContent = questions[qIndex].options[2]
    answerD.textContent = questions[qIndex].options[3]

}


function checkAnswer(answer) {

    answerCheck.style.display= "block"; //// It is hidden by default from html and css

    if (questions[qIndex].answer === questions[qIndex].options[answer]) {
        rightAns++
        answerCheck.textContent = "Correct";// pushing the word Correct to answerCheck
        console.log(rightAns);
    } else {
        totalTime -= 15; // if questions[qIndex].answer !=== questions[qIndex].options[answer], the total time reduced to 15 seconds.
        answerCheck.textContent = "Wrong";
    }
        qIndex++; //questions index increased to one


    if (qIndex < questions.length){ // if the index is less than number questions it goes back to line 83.
        questionsFun();
    } else {
        quizFinished(); // if the index is greater than number of questions it goes back to line 118
    }

}

function quizFinished(){
    quizQuestion.style.display = "none";
    answerCheck.style.display = "none";
    optionList.style.display= "none";
    clock.style.display = "none";
    var img = document.createElement("img"); //created an image showing its over
    img.src = "./Images/over.webp";
    questionDivision.appendChild(img); //appended the image to the parent questDivision
    finalPage.style.display = "block";
    finalScore.textContent = rightAns; //to show the score in finalScore element 
    console.log(rightAns);

}


//
function viewHighScores(event){
    event.preventDefault(); // preventing the default function otherwise it will send to database

    if(nameInput.value === ""){ // if there is an empty entry then shows an alert.
        alert("Enter your name, you can't leave this blank");
        return;
    };
    mainContent.style.display = "none";
    

   var localHighScores = localStorage.getItem("Scores"); //scores is the name of the key to retrieve the value.
   var scores; //empty variable to add values into




   if (localHighScores === null){
    scores=[]; 
   } else{
    scores= JSON.parse(localHighScores); // exchange data to/from a web server.When receiving data is always a strin
   }

   var individualSCores = {
    name:nameInput.value,
    score: finalScore.textContent
   };
   console.log(individualSCores);
   scores.unshift(individualSCores);

//stringify the variable for local storage
   var scoresArray = JSON.stringify(scores);
   console.log(scoresArray);
   localStorage.setItem("scores", scoresArray);


   scoreList();

}


//function to show scores
function scoreList(){
    fullScoreList.style.display = "block";
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


   









//functions for checking answer: it goes to line 94 with an argument when the click happens on any of four options.

function optionA() { checkAnswer(0); }

function optionB() { checkAnswer(1); }

function optionC() { checkAnswer(2); }

function optionD() { checkAnswer(3); }


//AddeEventListener for the start button. -- goes to line 59
startButton.addEventListener("click", startQuiz);

//AddeEventListener for the four options button. goes to line (211-217).
answerA.addEventListener("click", optionA);
answerB.addEventListener("click", optionB);
answerC.addEventListener("click", optionC);
answerD.addEventListener("click", optionD);

//AddeEventListener for the name submit button. goes to line 133.
submitNameBtn.addEventListener("click", function(event){
    viewHighScores(event);
});

//AddeEventListener for the score. goes to line 133.
highScore.addEventListener("click", function(event) { 
    scoreList(event);
});
//AddeEventListener to back button with function

backBtn.addEventListener("click",function(){
    event.preventDefault();
    mainContent.style.display = "block";
    fullScoreList.style.display = "none";
    finalPage.style.display = "none";
    answerCheck.style.display = "none";
    clock.style.display = "none";
    quizQuestion.style.display = "none";
    questionDivision.style.display="none";
    finalScore.style.display="none";
    submitNameBtn.style.display="none";
})


//AddeEventListener to clear button with function


clearScoreBtn.addEventListener("click",function(event){
    event.preventDefault();
    localStorage.removeItem("scores");
    
});
