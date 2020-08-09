let jsQuizQuestionEl = document.querySelector("#js-question");
let jsQuizImageEl = document.querySelector("#quiz-image");
let jsQuizAnswerABtn = document.querySelector("#answerA");
let jsQuizAnswerBBtn = document.querySelector("#answerB");
let jsQuizAnswerCBtn = document.querySelector("#answerC");
let jsQuizAnswerDBtn = document.querySelector("#answerD");
let jsQuizEl = document.querySelector("#quiz");
let jsStartQuizBtn = document.querySelector("#start");
let jsScoreEl = document.querySelector("#score");


jsQuizAnswerABtn.addEventListener("click", chooseAnswerA);
jsQuizAnswerBBtn.addEventListener("click", chooseAnswerB);
jsQuizAnswerCBtn.addEventListener("click", chooseAnswerC);
jsQuizAnswerDBtn.addEventListener("click", chooseAnswerD);

var correctAnswer = 0;

function chooseAnswerA(event) {
    event.preventDefault();
    console.log("Button A selected");
}

function chooseAnswerB(event) {
    event.preventDefault();
    console.log("Button B selected");
}

function chooseAnswerC(event) {
    event.preventDefault();
    console.log("Button C selected")
}

function chooseAnswerD(event) {
    event.preventDefault();
    console.log("Button D selected");
}