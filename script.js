const jsQuizStartBtn = document.querySelector("#start");
const jsQuizEl = document.querySelector("#quiz");
const jsQuizQuestionEl = document.querySelector("#js-question");
const jsQuizImageEl = document.querySelector("#quiz-image");
const jsQuizAnswerABtn = document.querySelector("#answerA");
const jsQuizAnswerBBtn = document.querySelector("#answerB");
const jsQuizAnswerCBtn = document.querySelector("#answerC");
const jsQuizAnswerDBtn = document.querySelector("#answerD");
const jsQuizCounterEL = document.querySelector("#counter");
const jsScoreEl = document.querySelector("#score");

let questions = [{question: "Which of the following is correct about JavaScript", imgSrc: "./assets/questions_array/images/JavaScript-logo-q1.png", choiceA: "JavaScript is a lightweight, interpreted programming language.", choiceB: "JavaScript has object-oriented capabilities that allow you to build interactivity into otherwise static HTML pages.", choiceC: "The general-purpose core of the language has been embedded in web browsers.", choiceD: "All of the above.", correctAnswer: "D"},
{question: "How can hou get the type of arguments passed to a function?", imgSrc: "./assets/questions_array/images/typeof-q2.png", choiceA: "Using 'typeof' operator.", choiceB: "Using 'getType function.", choiceC: "Both of the above.", choiceD: "None of the above.", correctAnswer: "A"},
{question: "Which of the following type of variables take precedence over other variables if names are the same?", imgSrc: "./assets/questions_array/images/javascript-variable-q3", choiceA: "Global variable.", choiceB: "Local variable.", choiceC: "Both of the above.", choiceD: "None of the above.", correctAnswer: "B"},
{question: "Which built-in method returns the string representation of the number's value?", imgSrc: "./assets/questions_array/images/type-conversion-q4.jpg", choiceA: "toValue()", choiceB: "toNumber()", choiceC: "toString()", choiceD: "None of the above.", correctAnswer: "C"},
{question: "Which of the following funciton of Numbrer objects returns a string value version of the current number?", imgSrc: "./assets/questions_array/images/String-Methods-q5.jpeg", choiceA: "toString()", choiceB: "toFixed()", choiceC: "toLocaleString()", choiceD: "toPrecision()", correctAnswer: "A"},
{question: "Which of the following funciotn of String objects return a number indicating whether a reference string comes before or after or is the same as teh given string in sort order?", imgSrc: "./addets/questions/array/images/JS-compare-q6.jpg", choiceA: "localeCompare()", choiceB: "search()", choiceC: "substr()", choiceD: "concat()", correctAnswer: "B"},
{question: "Which of the following funciton of String objects creates a string to be displayed as bold as if it were in a <b> tage?", imgSrc: "./assets/questions_array/images/weightStyle-q7.gif", choiceA: "anchor()", choiceB: "big()", choiceC: "blink()", choiceD: "bold()", correctAnswer: "D"},
{question: "Which of the following funciton of String objects causes a string to be displayed as a subscript, as if it were in a <sub> tage?", imgSrc: "./assets/questions_array/images/subscript-q8.jpg", choiceA: "sup()", choiceB: "small()", choiceC: "strike()", choiceD: "sub()", correctAnswer: "D"},
{question: "Which of the following funciton of Array objects adds one of more elements to the end of an array and returns the new length of the array?", imgSrc: "./assets/questions_array/images/push-q9.png", choiceA: "pop()", choiceB: "push()", choiceC: "join()", choiceD: "map()", correctAnswer: "B"},
{question: "Which of the following funciton of Array objects return true if at least one element in this array staisfies the provided testing funciton?", imgSrc: "./assets/questions_array/images/some-q10.jpg", choiceA: "reverse()", choiceB: "shift()", choiceC: "slice()", choiceD: "some()", correctAnswer: "D"}];

let count = 0;
let score = 0;
const questionTime = 10;


// jsQuizStartBtn.addEventListener("click", startQuiz);
jsQuizAnswerABtn.addEventListener("click", chooseAnswerA);
jsQuizAnswerBBtn.addEventListener("click", chooseAnswerB);
jsQuizAnswerCBtn.addEventListener("click", chooseAnswerC);
jsQuizAnswerDBtn.addEventListener("click", chooseAnswerD);

function questionRender() {
    let q = questions[0];
    jsQuizImageEl.setAttribute("src", q.imgSrc);
    jsQuizQuestionEl.innerHTML = q.question;
    jsQuizAnswerABtn.textContent = q.choiceA;
    jsQuizAnswerBBtn.textContent = q.choiceB;
    jsQuizAnswerCBtn.textContent = q.choiceC;
    jsQuizAnswerDBtn.textContent = q.choiceD;
}

questionRender()

function chooseAnswerA(event) {
    event.preventDefault();
    console.log("You have clicked Button A!")
}

function chooseAnswerB(event) {
    event.preventDefault();
    console.log("You have clicked Button A!")
}

function chooseAnswerC(event) {
    event.preventDefault();
    console.log("You have clicked Button A!")
}

function chooseAnswerD(event) {
    event.preventDefault();
    console.log("You have clicked Button A!")
}