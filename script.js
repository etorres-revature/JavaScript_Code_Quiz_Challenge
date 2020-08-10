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
const jsQuizQuestionTitleEl = document.querySelector("#js-question-title");
const jsQuizChoices = document.querySelector("#choices");
const jsQuizHeader = document.querySelector("#js-quiz-header");

let questions = [{ question: "Which of the following is correct about JavaScript?", choiceA: "JavaScript is a lightweight, interpreted programming language.", choiceB: "JavaScript has object-oriented capabilities that allow you to build interactivity into otherwise static HTML pages.", choiceC: "The general-purpose core of the language has been embedded in web browsers.", choiceD: "All of the above.", correctAnswer: "D" },
{ question: "How can you get the type of arguments passed to a function?", choiceA: "Using 'typeof' operator.", choiceB: "Using 'getType function.", choiceC: "Both of the above.", choiceD: "None of the above.", correctAnswer: "A" },
{ question: "Which of the following type of variables take precedence over other variables if names are the same?", choiceA: "Global variable.", choiceB: "Local variable.", choiceC: "Both of the above.", choiceD: "None of the above.", correctAnswer: "B" },
{ question: "Which built-in method returns the string representation of the number's value?", choiceA: "toValue()", choiceB: "toNumber()", choiceC: "toString()", choiceD: "None of the above.", correctAnswer: "C" },
{ question: "Which of the following funciton of Number objects return a string value version of the current number?", choiceA: "toString()", choiceB: "toFixed()", choiceC: "toLocaleString()", choiceD: "toPrecision()", correctAnswer: "A" },
{ question: "Which of the following function of String objects return a number indicating whether a reference string comes before or after or is the same as the given string in sort order?", choiceA: "localeCompare()", choiceB: "search()", choiceC: "substr()", choiceD: "concat()", correctAnswer: "B" },
{ question: "Which of the following funciton of String objects create a string to be displayed as bold as if it were in a &lt;b&gt; tag?", choiceA: "anchor()", choiceB: "big()", choiceC: "blink()", choiceD: "bold()", correctAnswer: "D" },
{ question: "Which of the following funciton of String objects cause a string to be displayed as a subscript, as if it were in a &lt;sub&gt; tag?", choiceA: "sup()", choiceB: "small()", choiceC: "strike()", choiceD: "sub()", correctAnswer: "D" },
{ question: "Which of the following funciton of Array objects add one of more elements to the end of an array and returns the new length of the array?", choiceA: "pop()", choiceB: "push()", choiceC: "join()", choiceD: "map()", correctAnswer: "B" },
{ question: "Which of the following funciton of Array objects return true if at least one element in this array staisfies the provided testing funciton?", choiceA: "reverse()", choiceB: "shift()", choiceC: "slice()", choiceD: "some()", correctAnswer: "D" }];

let headerColorArray = ["darkturquoise", "chocolate", "coral","antiquwhite", "aqua", "green", "gold", "blue", "black", "red", "goldenrod", "greenyellow", "pink", "magenta", "salmon", ]

let timer = 180;
let interval = 0;
let colorInterval = 0;
let score = 0;
let count = 0;
let questionIndex = 0;
let questionNum = questionIndex + 1;
const questionTime = 10;

function headerColor() {
    colorInterval = setInterval(function(){
        console.log("in headerColor function")
        let randomInt = Math.floor(Math.random() * headerColorArray.length);
        jsQuizHeader.style.color = headerColorArray[randomInt];
    }, 2500)
}

function startTimer() {
    interval = setInterval(function() {
        if (timer === -1) {
            jsQuizImageEl.setAttribute("src", "./assets/images/loser/simpson-loser.gif");
            clearInterval(timer);
        } else {
            jsQuizTimerEl.textContent = "You have " + timer + " seconds left to finish this quiz."
            timer--
        }
    }, 1000)
};

jsQuizStartBtn.addEventListener("click", startQuiz);
jsQuizAnswerABtn.addEventListener("click", chooseAnswerA);
jsQuizAnswerBBtn.addEventListener("click", chooseAnswerB);
jsQuizAnswerCBtn.addEventListener("click", chooseAnswerC);
jsQuizAnswerDBtn.addEventListener("click", chooseAnswerD);

function questionRender() {
    if (questionNum < 11) {
        let q = questions[questionIndex];
        jsQuizQuestionEl.innerHTML = q.question;
        jsQuizAnswerABtn.textContent = "A. " + q.choiceA;
        jsQuizAnswerBBtn.textContent = "B. " + q.choiceB;
        jsQuizAnswerCBtn.textContent = "C. " + q.choiceC;
        jsQuizAnswerDBtn.textContent = "D. " + q.choiceD;
        jsQuizCounterEL.textContent = "You are on question number " + questionNum + " of 10 questions"
        questionNum++
        console.log(questionNum);
    } else {
        quizPercentage();
       jsQuizChoices.setAttribute("Style", "display: none;")
        quizMessageHeading();
        quizMessage();
        storeInitialsAndScore();
        clearInterval(interval);

    }
}

function startQuiz(event) {
    event.preventDefault();
    startTimer();
    jsQuizEl.style.display = "block";
    questionRender();
    headerColor();
}

function chooseAnswerA(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("You have clicked Button A!");
    console.log(event);
    checkAnswer(event);
    questionRender()
}

function chooseAnswerB(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("You have clicked Button B!");
    console.log(event);
    checkAnswer(event);
    questionRender()
}

function chooseAnswerC(event) {
    event.preventDefault();
    event.stopPropagation;
    console.log(event);
    console.log("You have clicked Button C!");
    checkAnswer(event);
    questionRender()
}

function chooseAnswerD(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    console.log("You have clicked Button D!");
    checkAnswer(event)
    questionRender()
}

function checkAnswer(event) {
    console.log("you are in checkAnswer");
    let q = questions[questionIndex];
    let correctAnswer = q.correctAnswer;
    console.log(correctAnswer);
    let answerChosen = event.target.dataset.value;
    console.log(answerChosen);
    if (answerChosen === correctAnswer) {
        alert("Congrats!  That's the right answer.\nYou're score will go up by one point!!")
        score++
        jsQuizScoreEl.textContent = "You have answered " + score + " out of 10 questions correctly."
    } else {
        alert("No points for wrong answers!!");
        timer = timer - 15;
    }
    questionIndex++;
}

function quizPercentage() {
    let percentage = Math.round(100 * score / questions.length);

    let x = (percentage >= 80) ? "./assets/images/percent/great-job.jpg" :
        (percentage >= 60) ? "./assets/images/percent/Just-OK.jpg" :
            (percentage >= 40) ? "./assets/images/percent/Fair-to-Middling.png" :
                (percentage >= 20) ? "./assets/images/percent/perspective.jpg" : "./assets/images/percent/Landon_Moss-OOF!.gif"

    jsQuizImageEl.setAttribute("src", x);
}

function quizMessage() {
    let percentage = Math.round(100 * score / questions.length);

    let x = (percentage >= 80) ? "You are a JavaScript wizard!!  Gandalf, Harry Potter, Merlin, Dr. Strange ... none of them have anything on you." :
        (percentage >= 60) ? "Yeah, ok.  Youd did pretty good.  But, there's still room for improvement." :
            (percentage >= 40) ? "Ah, well ... you know a few things.  Not enough to be considered anything more than a N00b though." :
                (percentage >= 20) ? "Time to hit the books.  You might now something, but at this level it is just as likely as you guessed a few correct." : "What's that smell!?  Oh, it's you.  Time to put that google-fu to work and get cracking learning JavaScript."

    jsQuizQuestionEl.textContent = x;
}

function quizMessageHeading() {
    let percentage = Math.round(100 * score / questions.length);

    let x = (percentage >= 80) ? "EXCELSIOR!!:" :
        (percentage >= 60) ? "PRETTY GOOD:" :
            (percentage >= 40) ? "MEH:" :
                (percentage >= 20) ? "YOWZA:" : "OOF-fa!:"

    jsQuizQuestionTitleEl.textContent = x;
    jsQuizQuestionTitleEl.setAttribute("text-decoration", "underline");
    jsQuizQuestionTitleEl.style.fontWeight = 725;
}

function storeInitialsAndScore() {
    let initials = prompt("Please enter your initials for local storage");
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
}

