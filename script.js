const jsQuizStartBtn = document.querySelector("#start");
const jsQuizEl = document.querySelector("#quiz");
const jsQuizQuestionEl = document.querySelector("#js-question");
const jsQuizImageEl = document.querySelector("#quiz-image");
const jsQuizAnswerABtn = document.querySelector("#answerA");
const jsQuizAnswerBBtn = document.querySelector("#answerB");
const jsQuizAnswerCBtn = document.querySelector("#answerC");
const jsQuizAnswerDBtn = document.querySelector("#answerD");
const jsQuizCounterEL = document.querySelector("#counter");
const jsQuizScoreEl = document.querySelector("#score");
const jsQuizTimerEl = document.querySelector("#timer");

let questions = [{question: "Which of the following is correct about JavaScript", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "JavaScript is a lightweight, interpreted programming language.", choiceB: "JavaScript has object-oriented capabilities that allow you to build interactivity into otherwise static HTML pages.", choiceC: "The general-purpose core of the language has been embedded in web browsers.", choiceD: "All of the above.", correctAnswer: "D"},
{question: "How can hou get the type of arguments passed to a function?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "Using 'typeof' operator.", choiceB: "Using 'getType function.", choiceC: "Both of the above.", choiceD: "None of the above.", correctAnswer: "A"},
{question: "Which of the following type of variables take precedence over other variables if names are the same?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "Global variable.", choiceB: "Local variable.", choiceC: "Both of the above.", choiceD: "None of the above.", correctAnswer: "B"},
{question: "Which built-in method returns the string representation of the number's value?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "toValue()", choiceB: "toNumber()", choiceC: "toString()", choiceD: "None of the above.", correctAnswer: "C"},
{question: "Which of the following funciton of Numbrer objects return a string value version of the current number?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "toString()", choiceB: "toFixed()", choiceC: "toLocaleString()", choiceD: "toPrecision()", correctAnswer: "A"},
{question: "Which of the following function of String objects return a number indicating whether a reference string comes before or after or is the same as teh given string in sort order?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "localeCompare()", choiceB: "search()", choiceC: "substr()", choiceD: "concat()", correctAnswer: "B"},
{question: "Which of the following funciton of String objects create a string to be displayed as bold as if it were in a <b> tage?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "anchor()", choiceB: "big()", choiceC: "blink()", choiceD: "bold()", correctAnswer: "D"},
{question: "Which of the following funciton of String objects cause a string to be displayed as a subscript, as if it were in a <sub> tage?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "sup()", choiceB: "small()", choiceC: "strike()", choiceD: "sub()", correctAnswer: "D"},
{question: "Which of the following funciton of Array objects add one of more elements to the end of an array and returns the new length of the array?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "pop()", choiceB: "push()", choiceC: "join()", choiceD: "map()", correctAnswer: "B"},
{question: "Which of the following funciton of Array objects return true if at least one element in this array staisfies the provided testing funciton?", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "reverse()", choiceB: "shift()", choiceC: "slice()", choiceD: "some()", correctAnswer: "D"}];

let timer = 10;
let score = 0;
let count = 0;
let questionIndex = 0
let questionNum = questionIndex + 1; 
const questionTime = 10;

let interval = setInterval(function() {
    countdown();
    timer--
    questionRender();    
}, 10000);


// jsQuizStartBtn.addEventListener("click", startQuiz);
jsQuizAnswerABtn.addEventListener("click", chooseAnswerA);
jsQuizAnswerBBtn.addEventListener("click", chooseAnswerB);
jsQuizAnswerCBtn.addEventListener("click", chooseAnswerC);
jsQuizAnswerDBtn.addEventListener("click", chooseAnswerD);

function questionRender() {
    let q = questions[questionIndex];
    jsQuizImageEl.setAttribute("src", q.imgSrc);
    jsQuizQuestionEl.innerHTML = q.question;
    jsQuizAnswerABtn.textContent = "A. " + q.choiceA;
    jsQuizAnswerBBtn.textContent = "B. " + q.choiceB;
    jsQuizAnswerCBtn.textContent = "C. " + q.choiceC;
    jsQuizAnswerDBtn.textContent = "D. " + q.choiceD;
    jsQuizCounterEL.textContent = "You are on question number " + questionNum + " of 10 questions"
    questionIndex++;
    questionNum++
}

function countdown(){
    jsQuizTimerEl.textContent = "You have " + timer + " seconds left to answer this question.";
}

function chooseAnswerA(event) {
    event.preventDefault();
    console.log("You have clicked Button A!")
}

function chooseAnswerB(event) {
    event.preventDefault();
    console.log("You have clicked Button B!")
}

function chooseAnswerC(event) {
    event.preventDefault();
    console.log("You have clicked Button C!")
}

function chooseAnswerD(event) {
    event.preventDefault();
    console.log("You have clicked Button D!")
}