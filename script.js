// JS to grab elements and buttons for DOM manipulation
const jsQuizStartBtn = document.querySelector("#start");
const jsQuizAnswerABtn = document.querySelector("#answerA");
const jsQuizAnswerBBtn = document.querySelector("#answerB");
const jsQuizAnswerCBtn = document.querySelector("#answerC");
const jsQuizAnswerDBtn = document.querySelector("#answerD");
const jsQuizChangeBackgroundBtn = document.querySelector("#background");
const jsQuizEl = document.querySelector("#quiz");
const jsQuizQuestionEl = document.querySelector("#js-question");
const jsQuizImageEl = document.querySelector("#quiz-image");
const jsQuizCounterEL = document.querySelector("#counter");
const jsQuizScoreEl = document.querySelector("#score");
const jsQuizTimerEl = document.querySelector("#timer");
const jsQuizQuestionTitleEl = document.querySelector("#js-question-title");
const jsQuizChoicesEl = document.querySelector("#choices");
const jsQuizHeaderEl = document.querySelector("#js-quiz-header");
const jsQuizTimeBarEl = document.querySelector("#quiz-timer")
// const jsQuizHighScoresEl = document.querySelector("#quiz-highscores");
const jsQuizRankEl = document.querySelector("#quiz-rank");
const jsQuizInitialsEl = document.querySelector("#initials");
const jsQuizGameScoreEl = document.querySelector("#quiz-gamescore");
//const jsQuizReStartGameBtn = document.querySelector("#restart");

// question array to display question, answer choices, and correct answer
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

//array of potential header colors
let headerColorArray = ["darkturquoise", "chocolate", "aqua", "green", "gold", "blue", "black", "red", "goldenrod", "greenyellow", "pink", "magenta", "darkKhaki", "darkOrange", "CadetBlue", "Chartreuse", "crimson", "deeppink", "fucshia", "lavender", "lemonchiffon", "lime", "maroon"]

//global variables
//amount of time in game decrementer
let timer = 180;
//amount of time in game as constant for progress bar
let wholeTime = 180;
//interval variable initialized for game set interval
let interval = 0;
//interval variable initialized ror header set interval
let colorInterval = 0;
//score
let gameScore = 0;
//question count
let count = 0;
//variable to represent index of question array
let questionIndex = 0;
//variable for number of questions asked
let questionNum = questionIndex + 1;
//const questionTime = 10;
let initials = "";
// let scores = [];
// let players = [];
// let player = [{
//     name: "",
//     correct: ""
// }]

//variable accepting JSON object for manipulation on  high scores web page
let highScores = JSON.parse(localStorage.getItem("playersAndScores"));
// let pastScores = JSON.parse(localStorage.getItem("score"));
// let pastPlayers = JSON.parse(localStorage.getItem("player"));

//funciton that creates the html to populate highscores table in html, called on load of body
function populateHighScores() {
    let rank = jsQuizRankEl;
    let initials = jsQuizInitialsEl;
    let score = jsQuizGameScoreEl;
    let jsonScores = highScores;
    console.log(jsonScores);

    //displaying numbers 1 - 10 
    for (var i = 1; i <= 10; i++) {
        //created p element
        var newListItem = document.createElement("p")
        console.log("li!")
        //filling in p element
        newListItem.textContent = i;
        //appending p element to page
        rank.appendChild(newListItem);
    }

    //displaying last ten players initials backwards so that current player is listed first
    if (jsonScores.length <= 10) {
        for (var i = 0; i < jsonScores.length; i++) {
            var newInitials = document.createElement("p");
            console.log(jsonScores[i].name);
            newInitials.textContent = jsonScores[i].name;
            initials.appendChild(newInitials);
        }
    } else {
        for (var i = 9; i >= 0; i--) {
            jsonScores.slice(-10);
            newInitials = document.createElement("p");
            console.log(jsonScores[i].name);
            newInitials.textContent = jsonScores[i].name;
            initials.appendChild(newInitials);
        }
    }

    //displaying last ten scores backwards so that current score listed first
    if (jsonScores.length <= 10) {
        for (var i = 0; i < jsonScores.length; i++) {
            var newScore = document.createElement("p");
            console.log(jsonScores[i].correct);
            newScore.textContent = jsonScores[i].correct;
            score.appendChild(newScore);
        }
    } else {
        for (var i = 9; i >= 0; i--) {
            jsonScores.slice(-10);
            newScore = document.createElement("p");
            console.log(jsonScores[i].correct);
            newScore.textContent = jsonScores[i].correct;
            score.appendChild(newScore);
        }
    }

    // function backGroundColorInitial(initials) {
    //     // var element = initials;
    //     // console.log("This is the element", element);
    //     if (initials.getElementbyTag("p") === true) {
    //         console.log("in the if statement");
    //     initials.style.backGroundColor = "#ccc";
    //     }
    // }

    // backGroundColorInitial(initials)
}

//storing player initials and score in local storage
function storeInitialsAndScore() {
    //variable to hold what's currently in local storage
    var existingEntries = JSON.parse(localStorage.getItem("playersAndScores"))
    //if nothing in storage creating array
    if (existingEntries === null) {
        existingEntries = [];
    }
    //object to put into local storage
    var newPlayer = {
        name: initials,
        correct: gameScore
    }
    //putting the current player and score into local storage
    localStorage.setItem("newEntry", JSON.stringify(newPlayer));
    //adding the new object onto the existing entries array
    existingEntries.push(newPlayer);
    //turning the array into a string for local storage
    localStorage.setItem("playersAndScores", JSON.stringify(existingEntries));

    // localStorage.setItem("player", JSON.stringify(players));
    // localStorage.setItem("score", JSON.stringify(scores));
}

//funciton to change color of main header every 2.5s
function headerColor() {
    //putting setInterval into global vaiable
    colorInterval = setInterval(function () {
        console.log("in headerColor function")
        //initializing random int for color display
        let randomInt = Math.floor(Math.random() * headerColorArray.length);
        //using random int to pick an index of the color array
        jsQuizHeaderEl.style.color = headerColorArray[randomInt];
        //every 2.5s
    }, 2500)
}

function changeBackground() {
    console.log("inside change background function")
    let randomInt = Math.floor(Math.random() * headerColorArray.length);
    document.body.setAttribute("style", "background-color: " + headerColorArray[randomInt]);
    console.log(headerColorArray[randomInt])
}

//funciton to start game
function startTimer() {
    //setting interval funcionality into variable
    interval = setInterval(function () {
        //if timer is 0 changing image display to loser gif
        if (timer === -1) {
            jsQuizImageEl.setAttribute("src", "./assets/images/loser/simpson-loser.gif");
            //stopping the timer interval
            clearInterval(timer);
        } else {
            //putting timer variable into string to display on screen
            jsQuizTimerEl.textContent = "You have " + timer + " seconds left to finish this quiz."
            //decrementing timer
            timer--
            //running progress bar
            progressBar(timer, wholeTime);
        }
        //every second
    }, 1000)
};

//function to populate the progress bar
function progressBar(time, start) {
    //equation that will produce the percentage displayed visually and numerically by progress bar
    var timePercent = (time / start) * 100;
    //reducing that percentage to a whole number 
    timePercent = Math.floor(timePercent);
    //concatinating the percent sign
    timePercent = (timePercent + "%");
    //using javascript to populate the percentage to the appropriate style and html elements
    jsQuizTimeBarEl.style.width = timePercent;
    jsQuizTimeBarEl.textContent = timePercent;
}
//function that renders the question on the screen
function questionRender() {
    //if logic for what to do if number of questions is under 10
    if (questionNum < 11) {
        //logic to populate HTML elements based on questions array above
        let q = questions[questionIndex];
        jsQuizQuestionEl.innerHTML = q.question;
        jsQuizAnswerABtn.textContent = "A. " + q.choiceA;
        jsQuizAnswerBBtn.textContent = "B. " + q.choiceB;
        jsQuizAnswerCBtn.textContent = "C. " + q.choiceC;
        jsQuizAnswerDBtn.textContent = "D. " + q.choiceD;
        jsQuizCounterEL.textContent = "You are on question number " + questionNum + " of 10 questions"
        // jsQuizImageEl.setAttribute("src", "./assets/images/quiz/JavaScript-logo.png")
        questionNum++
        console.log(questionNum);
        //end game logic
    } else {
        //stop the game timer
        clearInterval(interval);
        //figure out what percentage the player got correct
        quizPercentage();
        //removing the buttons from the html displaying the quiz
        jsQuizChoicesEl.setAttribute("style", "display: none");
        //applying the appropriate styling to the heading where the quiz was displayed
        quizMessageHeadingStyling();
        //applying the heading to send where the quiz was displayed based on percentage
        quizMessageHeading();
        //applying the styling to where the end game message will be displayed
        quizMessageStyling();
        //applying the appropriate message based on percentage
        quizMessage();
        //saving the current player's information into local storage
        storeInitialsAndScore();
    }
}

//logic that makes the start button go
function startQuiz(event) {
    event.preventDefault();
    event.stopPropagation();
    //collecting current players intials for local storage
    initials = prompt("Please enter your initials for local storage");
    //starting the game timer
    startTimer();
    //displaying the area where the quiz will be displayed
    jsQuizEl.style.display = "block";
    //running first instance of question render
    questionRender();
    //starting the header change colors interval function
    headerColor();
}

// function reStartQuiz(event) {
//     event.preventDefault();
//     event.stopPropagation();
//     location.reload();
//     event.preventDefault();
//     event.stopPropagation();
//     timer = 180;
//     gameScore = 0;
//     count = 0;
//     questionIndex = 0;
//     initials = prompt("Please enter your initials for local storage");
//     startTimer();
//     questionRender();
//     headerColor(); 
// }


//click event for button a
function chooseAnswerA(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("You have clicked Button A!");
    console.log(event);
    //runs to check if this is correct answer
    checkAnswer(event);
    //returns to render next question
    questionRender();
}
//click event for button b
function chooseAnswerB(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("You have clicked Button B!");
    console.log(event);
    //runs to check if this is correct answer
    checkAnswer(event);
    //returns to render next question
    questionRender();
}

//click event for button c
function chooseAnswerC(event) {
    event.preventDefault();
    event.stopPropagation;
    console.log(event);
    console.log("You have clicked Button C!");
    //runs to check if this is correct answer
    checkAnswer(event);
    //returns to render next question
    questionRender();
}

//click event for button d
function chooseAnswerD(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    console.log("You have clicked Button D!");
    //runs to check if this is correct answer
    checkAnswer(event)
    //returns to render next question
    questionRender()
}

//check the answer event with the correct answer stored in the questions array
function checkAnswer(event) {
    console.log("you are in checkAnswer");
    //creating a function reference to questions index/using question index for dynamic references
    let q = questions[questionIndex];
    //directly access the correct answer property of the questions array
    let correctAnswer = q.correctAnswer;
    console.log(correctAnswer);
    //putting the target event of the button clicked into a variable
    let answerChosen = event.target.dataset.value;
    console.log(answerChosen);
    //logic to compare the target event with the correct answer from the questions array
    if (answerChosen === correctAnswer) {
        //alert like this if correct
        alert("Congrats!  That's the right answer.\nYou're score will go up by one point!!")
        //increase score
        gameScore++
        //change the text displayed with current score
        jsQuizScoreEl.textContent = "You have answered " + gameScore + " out of 10 questions correctly."
    } else {
        //alert message for incorrect answer
        alert("No points for wrong answers!!");
        //decreasing timer by 15 seconds for incorrect answer
        timer = timer - 15;
    }
    //increasing the global variable representing the index position of the question array
    questionIndex++;
}

//funciton to display image based on certain percentage score
function quizPercentage() {
    //setting the percentage score calculation
    let percentage = Math.round(100 * gameScore / questions.length);
    //declaring a variable to hold the src asset for the quiz image based on percentage obtained by taking quiz
    //ternary operators - WHAT, WHHHHHAAAAAATTTTTTTT!!!! amiright?
    let x = (percentage >= 80) ? "./assets/images/percent/great-job.jpg" :
        (percentage >= 60) ? "./assets/images/percent/Just-OK.jpg" :
            (percentage >= 40) ? "./assets/images/percent/Fair-to-Middling.png" :
                (percentage >= 20) ? "./assets/images/percent/perspective.jpg" : "./assets/images/percent/Landon_Moss-OOF!.gif"
    //putting the image in the html
    jsQuizImageEl.setAttribute("src", x);
}

//funciton to display image based on certain percentage score
function quizMessage() {
    //setting the percentage score calculation
    let percentage = Math.round(100 * gameScore / questions.length);
    //declaring a variable to hold the quiz messsage to display based on percentage obtained by taking quiz
    //ternary operators - WHAT, WHHHHHAAAAAATTTTTTTT!!!! amiright?
    let x = (percentage >= 80) ? "You are a JavaScript wizard!!  Gandalf, Harry Potter, Merlin, Dr. Strange ... none of them have anything on you." :
        (percentage >= 60) ? "Yeah, ok.  You did pretty good; and, you obviously know quite a bit about JavaScript.  But, there's still room for improvement." :
            (percentage >= 40) ? "Ah, well ... you know a few things.  Not enough to be considered anything more than a N00b though." :
                (percentage >= 20) ? "Time to hit the books.  You might know something, but at this level it is just as likely as you guessed a few correct." : "What's that smell!?  Oh, it's you.  Time to put that google-fu to work and get cracking learning JavaScript."
    //putting the text in the html
    jsQuizQuestionEl.textContent = x;
}

//funciton to display image based on certain percentage score
function quizMessageHeading() {
    //setting the percentage score calculation
    let percentage = Math.round(100 * gameScore / questions.length);
    //declaring a variable to hold the heading for the quis message based on percentage obtained by taking quiz
    //ternary operators - WHAT, WHHHHHAAAAAATTTTTTTT!!!! amiright?
    let x = (percentage >= 80) ? "EXCELSIOR!!     (" + percentage + "%):" :
        (percentage >= 60) ? "PRETTY GOOD     (" + percentage + "%):" :
            (percentage >= 40) ? "MEH    (" + percentage + "%):" :
                (percentage >= 20) ? "YOWZA     (" + percentage + "%):" : "OOFFFF--fa!     (" + percentage + "%):"
    //putting the heading in the html
    jsQuizQuestionTitleEl.textContent = x;
}

//function to change the sytling of the quiz message
function quizMessageHeadingStyling() {
    jsQuizQuestionTitleEl.setAttribute("style", "margin-left: 85px; margin-right: 85px; margin-top: 25px; font-weight: 725;");
    jsQuizQuestionTitleEl.style.textDecoration = "underline";
}

//function to change the sytling of the quiz heading
function quizMessageStyling() {
    jsQuizQuestionEl.setAttribute("style", "margin-left: 85px; margin-right: 85px; margin-top: 18px; font-style: italic;");
}

//eventlistenesr for start button and answer buttons (A, B, C, D)
jsQuizStartBtn.addEventListener("click", startQuiz);
jsQuizAnswerABtn.addEventListener("click", chooseAnswerA);
jsQuizAnswerBBtn.addEventListener("click", chooseAnswerB);
jsQuizAnswerCBtn.addEventListener("click", chooseAnswerC);
jsQuizAnswerDBtn.addEventListener("click", chooseAnswerD);
jsQuizChangeBackgroundBtn.addEventListener("click", changeBackground);
//jsQuizReStartGameBtn.addEventListener("click", reStartQuiz);