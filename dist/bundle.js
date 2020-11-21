/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("// JS to grab elements and buttons for DOM manipulation\r\nconst jsQuizStartBtn = document.querySelector(\"#start\");\r\nconst jsQuizAnswerABtn = document.querySelector(\"#answerA\");\r\nconst jsQuizAnswerBBtn = document.querySelector(\"#answerB\");\r\nconst jsQuizAnswerCBtn = document.querySelector(\"#answerC\");\r\nconst jsQuizAnswerDBtn = document.querySelector(\"#answerD\");\r\nconst jsQuizChangeBackgroundBtn = document.querySelector(\"#background\");\r\nconst jsQuizEl = document.querySelector(\"#quiz\");\r\nconst jsQuizQuestionEl = document.querySelector(\"#js-question\");\r\nconst jsQuizImageEl = document.querySelector(\"#quiz-image\");\r\nconst jsQuizCounterEL = document.querySelector(\"#counter\");\r\nconst jsQuizScoreEl = document.querySelector(\"#score\");\r\nconst jsQuizTimerEl = document.querySelector(\"#timer\");\r\nconst jsQuizQuestionTitleEl = document.querySelector(\"#js-question-title\");\r\nconst jsQuizChoicesEl = document.querySelector(\"#choices\");\r\nconst jsQuizHeaderEl = document.querySelector(\"#js-quiz-header\");\r\nconst jsQuizTimeBarEl = document.querySelector(\"#quiz-timer\");\r\n// const jsQuizHighScoresEl = document.querySelector(\"#quiz-highscores\");\r\nconst jsQuizRankEl = document.querySelector(\"#quiz-rank\");\r\nconst jsQuizInitialsEl = document.querySelector(\"#initials\");\r\nconst jsQuizGameScoreEl = document.querySelector(\"#quiz-gamescore\");\r\n//const jsQuizReStartGameBtn = document.querySelector(\"#restart\");\r\n\r\n// question array to display question, answer choices, and correct answer\r\nlet questions = [\r\n  {\r\n    question: \"Which of the following is correct about JavaScript?\",\r\n    choiceA: \"JavaScript is a lightweight, interpreted programming language.\",\r\n    choiceB:\r\n      \"JavaScript has object-oriented capabilities that allow you to build interactivity into otherwise static HTML pages.\",\r\n    choiceC:\r\n      \"The general-purpose core of the language has been embedded in web browsers.\",\r\n    choiceD: \"All of the above.\",\r\n    correctAnswer: \"D\",\r\n  },\r\n  {\r\n    question: \"How can you get the type of arguments passed to a function?\",\r\n    choiceA: \"Using 'typeof' operator.\",\r\n    choiceB: \"Using 'getType function.\",\r\n    choiceC: \"Both of the above.\",\r\n    choiceD: \"None of the above.\",\r\n    correctAnswer: \"A\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which of the following type of variables take precedence over other variables if names are the same?\",\r\n    choiceA: \"Global variable.\",\r\n    choiceB: \"Local variable.\",\r\n    choiceC: \"Both of the above.\",\r\n    choiceD: \"None of the above.\",\r\n    correctAnswer: \"B\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which built-in method returns the string representation of the number's value?\",\r\n    choiceA: \"toValue()\",\r\n    choiceB: \"toNumber()\",\r\n    choiceC: \"toString()\",\r\n    choiceD: \"None of the above.\",\r\n    correctAnswer: \"C\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which of the following funciton of Number objects return a string value version of the current number?\",\r\n    choiceA: \"toString()\",\r\n    choiceB: \"toFixed()\",\r\n    choiceC: \"toLocaleString()\",\r\n    choiceD: \"toPrecision()\",\r\n    correctAnswer: \"A\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which of the following function of String objects return a number indicating whether a reference string comes before or after or is the same as the given string in sort order?\",\r\n    choiceA: \"localeCompare()\",\r\n    choiceB: \"search()\",\r\n    choiceC: \"substr()\",\r\n    choiceD: \"concat()\",\r\n    correctAnswer: \"B\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which of the following funciton of String objects create a string to be displayed as bold as if it were in a &lt;b&gt; tag?\",\r\n    choiceA: \"anchor()\",\r\n    choiceB: \"big()\",\r\n    choiceC: \"blink()\",\r\n    choiceD: \"bold()\",\r\n    correctAnswer: \"D\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which of the following funciton of String objects cause a string to be displayed as a subscript, as if it were in a &lt;sub&gt; tag?\",\r\n    choiceA: \"sup()\",\r\n    choiceB: \"small()\",\r\n    choiceC: \"strike()\",\r\n    choiceD: \"sub()\",\r\n    correctAnswer: \"D\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which of the following funciton of Array objects add one of more elements to the end of an array and returns the new length of the array?\",\r\n    choiceA: \"pop()\",\r\n    choiceB: \"push()\",\r\n    choiceC: \"join()\",\r\n    choiceD: \"map()\",\r\n    correctAnswer: \"B\",\r\n  },\r\n  {\r\n    question:\r\n      \"Which of the following funciton of Array objects return true if at least one element in this array staisfies the provided testing funciton?\",\r\n    choiceA: \"reverse()\",\r\n    choiceB: \"shift()\",\r\n    choiceC: \"slice()\",\r\n    choiceD: \"some()\",\r\n    correctAnswer: \"D\",\r\n  },\r\n];\r\n\r\n//array of potential header colors\r\nlet headerColorArray = [\r\n  \"darkturquoise\",\r\n  \"chocolate\",\r\n  \"aqua\",\r\n  \"green\",\r\n  \"gold\",\r\n  \"blue\",\r\n  \"black\",\r\n  \"red\",\r\n  \"goldenrod\",\r\n  \"greenyellow\",\r\n  \"pink\",\r\n  \"magenta\",\r\n  \"darkKhaki\",\r\n  \"darkOrange\",\r\n  \"CadetBlue\",\r\n  \"Chartreuse\",\r\n  \"crimson\",\r\n  \"deeppink\",\r\n  \"fucshia\",\r\n  \"lavender\",\r\n  \"lemonchiffon\",\r\n  \"lime\",\r\n  \"maroon\",\r\n];\r\n\r\n//global variables\r\n//amount of time in game decrementer\r\nlet timer = 180;\r\n//amount of time in game as constant for progress bar\r\nlet wholeTime = 180;\r\n//interval variable initialized for game set interval\r\nlet interval = 0;\r\n//interval variable initialized ror header set interval\r\nlet colorInterval = 0;\r\n//score\r\nlet gameScore = 0;\r\n//question count\r\nlet count = 0;\r\n//variable to represent index of question array\r\nlet questionIndex = 0;\r\n//variable for number of questions asked\r\nlet questionNum = questionIndex + 1;\r\n//const questionTime = 10;\r\nlet initials = \"\";\r\n// let scores = [];\r\n// let players = [];\r\n// let player = [{\r\n//     name: \"\",\r\n//     correct: \"\"\r\n// }]\r\n\r\n//variable accepting JSON object for manipulation on  high scores web page\r\nlet highScores = JSON.parse(localStorage.getItem(\"playersAndScores\"));\r\n// let pastScores = JSON.parse(localStorage.getItem(\"score\"));\r\n// let pastPlayers = JSON.parse(localStorage.getItem(\"player\"));\r\n\r\n//funciton that creates the html to populate highscores table in html, called on load of body\r\nfunction populateHighScores() {\r\n  let rank = jsQuizRankEl;\r\n  let initials = jsQuizInitialsEl;\r\n  let score = jsQuizGameScoreEl;\r\n  let jsonScores = highScores;\r\n  console.log(jsonScores);\r\n\r\n  //displaying numbers 1 - 10\r\n  for (var i = 1; i <= 10; i++) {\r\n    //created p element\r\n    var newListItem = document.createElement(\"p\");\r\n    console.log(\"li!\");\r\n    //filling in p element\r\n    newListItem.textContent = i;\r\n    //appending p element to page\r\n    rank.appendChild(newListItem);\r\n  }\r\n\r\n  //displaying last ten players initials backwards so that current player is listed first\r\n  if (jsonScores.length <= 10) {\r\n    for (var i = 0; i < jsonScores.length; i++) {\r\n      var newInitials = document.createElement(\"p\");\r\n      console.log(jsonScores[i].name);\r\n      newInitials.textContent = jsonScores[i].name;\r\n      initials.appendChild(newInitials);\r\n    }\r\n  } else {\r\n    for (var i = 9; i >= 0; i--) {\r\n      jsonScores.slice(-10);\r\n      newInitials = document.createElement(\"p\");\r\n      console.log(jsonScores[i].name);\r\n      newInitials.textContent = jsonScores[i].name;\r\n      initials.appendChild(newInitials);\r\n    }\r\n  }\r\n\r\n  //displaying last ten scores backwards so that current score listed first\r\n  if (jsonScores.length <= 10) {\r\n    for (var i = 0; i < jsonScores.length; i++) {\r\n      var newScore = document.createElement(\"p\");\r\n      console.log(jsonScores[i].correct);\r\n      newScore.textContent = jsonScores[i].correct;\r\n      score.appendChild(newScore);\r\n    }\r\n  } else {\r\n    for (var i = 9; i >= 0; i--) {\r\n      jsonScores.slice(-10);\r\n      newScore = document.createElement(\"p\");\r\n      console.log(jsonScores[i].correct);\r\n      newScore.textContent = jsonScores[i].correct;\r\n      score.appendChild(newScore);\r\n    }\r\n  }\r\n\r\n  // function backGroundColorInitial(initials) {\r\n  //     // var element = initials;\r\n  //     // console.log(\"This is the element\", element);\r\n  //     if (initials.getElementbyTag(\"p\") === true) {\r\n  //         console.log(\"in the if statement\");\r\n  //     initials.style.backGroundColor = \"#ccc\";\r\n  //     }\r\n  // }\r\n\r\n  // backGroundColorInitial(initials)\r\n}\r\n\r\n//storing player initials and score in local storage\r\nfunction storeInitialsAndScore() {\r\n  //variable to hold what's currently in local storage\r\n  var existingEntries = JSON.parse(localStorage.getItem(\"playersAndScores\"));\r\n  //if nothing in storage creating array\r\n  if (existingEntries === null) {\r\n    existingEntries = [];\r\n  }\r\n  //object to put into local storage\r\n  var newPlayer = {\r\n    name: initials,\r\n    correct: gameScore,\r\n  };\r\n  //putting the current player and score into local storage\r\n  localStorage.setItem(\"newEntry\", JSON.stringify(newPlayer));\r\n  //adding the new object onto the existing entries array\r\n  existingEntries.push(newPlayer);\r\n  //turning the array into a string for local storage\r\n  localStorage.setItem(\"playersAndScores\", JSON.stringify(existingEntries));\r\n\r\n  // localStorage.setItem(\"player\", JSON.stringify(players));\r\n  // localStorage.setItem(\"score\", JSON.stringify(scores));\r\n}\r\n\r\n//funciton to change color of main header every 2.5s\r\nfunction headerColor() {\r\n  //putting setInterval into global vaiable\r\n  colorInterval = setInterval(function () {\r\n    console.log(\"in headerColor function\");\r\n    //initializing random int for color display\r\n    let randomInt = Math.floor(Math.random() * headerColorArray.length);\r\n    //using random int to pick an index of the color array\r\n    jsQuizHeaderEl.style.color = headerColorArray[randomInt];\r\n    //every 2.5s\r\n  }, 2500);\r\n}\r\n\r\nfunction changeBackground() {\r\n  console.log(\"inside change background function\");\r\n  let randomInt = Math.floor(Math.random() * headerColorArray.length);\r\n  document.body.setAttribute(\r\n    \"style\",\r\n    \"background-color: \" + headerColorArray[randomInt]\r\n  );\r\n  console.log(headerColorArray[randomInt]);\r\n}\r\n\r\n//funciton to start game\r\nfunction startTimer() {\r\n  //setting interval funcionality into variable\r\n  interval = setInterval(function () {\r\n    //if timer is 0 changing image display to loser gif\r\n    if (timer <= -1) {\r\n      //changing quiz image to Lisa Simpson loser GIF\r\n      jsQuizImageEl.setAttribute(\r\n        \"src\",\r\n        \"./assets/images/loser/simpson-loser.gif\"\r\n      );\r\n      //changing the title caption and styling\r\n      jsQuizQuestionTitleEl.textContent = \"You are a JS LOSER!!!\";\r\n      jsQuizQuestionTitleEl.setAttribute(\r\n        \"style\",\r\n        \"margin-left: 85px; margin-right: 85px; margin-top: 25px; font-weight: 725;\"\r\n      );\r\n      jsQuizQuestionTitleEl.style.textDecoration = \"underline\";\r\n      //changing the message body and styling\r\n      jsQuizQuestionEl.textContent =\r\n        \"You have run out of time and LOST the JavaScript Code Quiz Challenge.\\nLisa Simpson is here to heap you with the appropriate amounts of scorn, derision, and judgment (all in equal amounts).\\nDo not return to darken our doors until you know at least a little something about JS.\";\r\n      jsQuizQuestionEl.setAttribute(\r\n        \"style\",\r\n        \"margin-left: 85px; margin-right: 85px; margin-top: 18px; font-style: italic;\"\r\n      );\r\n      //making the display of the buttons to none.\r\n      jsQuizChoicesEl.setAttribute(\"style\", \"display: none\");\r\n      //stopping the timer interval\r\n      clearInterval(timer);\r\n    } else {\r\n      //putting timer variable into string to display on screen\r\n      jsQuizTimerEl.textContent =\r\n        \"You have \" + timer + \" seconds left to finish this quiz.\";\r\n      //decrementing timer\r\n      timer--;\r\n      //running progress bar\r\n      progressBar(timer, wholeTime);\r\n    }\r\n    //every second\r\n  }, 1000);\r\n}\r\n\r\n//function to populate the progress bar\r\nfunction progressBar(time, start) {\r\n  //equation that will produce the percentage displayed visually and numerically by progress bar\r\n  var timePercent = (time / start) * 100;\r\n  //reducing that percentage to a whole number\r\n  timePercent = Math.floor(timePercent);\r\n  //concatinating the percent sign\r\n  timePercent = timePercent + \"%\";\r\n  //using javascript to populate the percentage to the appropriate style and html elements\r\n  jsQuizTimeBarEl.style.width = timePercent;\r\n  jsQuizTimeBarEl.textContent = timePercent;\r\n}\r\n//function that renders the question on the screen\r\nfunction questionRender() {\r\n  //if logic for what to do if number of questions is under 10\r\n  if (questionNum < 11) {\r\n    //logic to populate HTML elements based on questions array above\r\n    let q = questions[questionIndex];\r\n    jsQuizQuestionEl.innerHTML = q.question;\r\n    jsQuizAnswerABtn.textContent = \"A. \" + q.choiceA;\r\n    jsQuizAnswerBBtn.textContent = \"B. \" + q.choiceB;\r\n    jsQuizAnswerCBtn.textContent = \"C. \" + q.choiceC;\r\n    jsQuizAnswerDBtn.textContent = \"D. \" + q.choiceD;\r\n    jsQuizCounterEL.textContent =\r\n      \"You are on question number \" + questionNum + \" of 10 questions\";\r\n    // jsQuizImageEl.setAttribute(\"src\", \"./assets/images/quiz/JavaScript-logo.png\")\r\n    questionNum++;\r\n    console.log(questionNum);\r\n    //end game logic\r\n  } else {\r\n    //stop the game timer\r\n    clearInterval(interval);\r\n    //figure out what percentage the player got correct\r\n    quizPercentage();\r\n    //removing the buttons from the html displaying the quiz\r\n    jsQuizChoicesEl.setAttribute(\"style\", \"display: none\");\r\n    //applying the appropriate styling to the heading where the quiz was displayed\r\n    quizMessageHeadingStyling();\r\n    //applying the heading to send where the quiz was displayed based on percentage\r\n    quizMessageHeading();\r\n    //applying the styling to where the end game message will be displayed\r\n    quizMessageStyling();\r\n    //applying the appropriate message based on percentage\r\n    quizMessage();\r\n    //saving the current player's information into local storage\r\n    storeInitialsAndScore();\r\n  }\r\n}\r\n\r\n//logic that makes the start button go\r\nfunction startQuiz(event) {\r\n  event.preventDefault();\r\n  event.stopPropagation();\r\n  //collecting current players intials for local storage\r\n  initials = prompt(\"Please enter your initials for local storage\");\r\n  //starting the game timer\r\n  startTimer();\r\n  //displaying the area where the quiz will be displayed\r\n  jsQuizEl.style.display = \"block\";\r\n  //running first instance of question render\r\n  questionRender();\r\n  //starting the header change colors interval function\r\n  headerColor();\r\n}\r\n\r\n// function reStartQuiz(event) {\r\n//     event.preventDefault();\r\n//     event.stopPropagation();\r\n//     location.reload();\r\n//     event.preventDefault();\r\n//     event.stopPropagation();\r\n//     timer = 180;\r\n//     gameScore = 0;\r\n//     count = 0;\r\n//     questionIndex = 0;\r\n//     initials = prompt(\"Please enter your initials for local storage\");\r\n//     startTimer();\r\n//     questionRender();\r\n//     headerColor();\r\n// }\r\n\r\n//click event for button a\r\nfunction chooseAnswer(event) {\r\n  event.preventDefault();\r\n  event.stopPropagation();\r\n  console.log(\"You have clicked Button A!\");\r\n  console.log(event);\r\n  //runs to check if this is correct answer\r\n  checkAnswer(event);\r\n  //returns to render next question\r\n  questionRender();\r\n}\r\n//click event for button b\r\n// function chooseAnswerB(event) {\r\n//     event.preventDefault();\r\n//     event.stopPropagation();\r\n//     console.log(\"You have clicked Button B!\");\r\n//     console.log(event);\r\n//     //runs to check if this is correct answer\r\n//     checkAnswer(event);\r\n//     //returns to render next question\r\n//     questionRender();\r\n// }\r\n\r\n// //click event for button c\r\n// function chooseAnswerC(event) {\r\n//     event.preventDefault();\r\n//     event.stopPropagation;\r\n//     console.log(event);\r\n//     console.log(\"You have clicked Button C!\");\r\n//     //runs to check if this is correct answer\r\n//     checkAnswer(event);\r\n//     //returns to render next question\r\n//     questionRender();\r\n// }\r\n\r\n// //click event for button d\r\n// function chooseAnswerD(event) {\r\n//     event.preventDefault();\r\n//     event.stopPropagation();\r\n//     console.log(event);\r\n//     console.log(\"You have clicked Button D!\");\r\n//     //runs to check if this is correct answer\r\n//     checkAnswer(event)\r\n//     //returns to render next question\r\n//     questionRender()\r\n// }\r\n\r\n//check the answer event with the correct answer stored in the questions array\r\nfunction checkAnswer(event) {\r\n  console.log(\"you are in checkAnswer\");\r\n  //creating a function reference to questions index/using question index for dynamic references\r\n  let q = questions[questionIndex];\r\n  //directly access the correct answer property of the questions array\r\n  let correctAnswer = q.correctAnswer;\r\n  console.log(correctAnswer);\r\n  //putting the target event of the button clicked into a variable\r\n  let answerChosen = event.target.dataset.value;\r\n  console.log(answerChosen);\r\n  //logic to compare the target event with the correct answer from the questions array\r\n  if (answerChosen === correctAnswer) {\r\n    //alert like this if correct\r\n    alert(\r\n      \"Congrats!  That's the right answer.\\nYou're score will go up by one point!!\"\r\n    );\r\n    //increase score\r\n    gameScore++;\r\n    //change the text displayed with current score\r\n    jsQuizScoreEl.textContent =\r\n      \"You have answered \" + gameScore + \" out of 10 questions correctly.\";\r\n  } else {\r\n    //alert message for incorrect answer\r\n    alert(\"No points for wrong answers!!\");\r\n    //decreasing timer by 15 seconds for incorrect answer\r\n    timer = timer - 15;\r\n  }\r\n  //increasing the global variable representing the index position of the question array\r\n  questionIndex++;\r\n}\r\n\r\n//funciton to display image based on certain percentage score\r\nfunction quizPercentage() {\r\n  //setting the percentage score calculation\r\n  let percentage = Math.round((100 * gameScore) / questions.length);\r\n  //declaring a variable to hold the src asset for the quiz image based on percentage obtained by taking quiz\r\n  //ternary operators - WHAT, WHHHHHAAAAAATTTTTTTT!!!! amiright?\r\n  let x =\r\n    percentage >= 80\r\n      ? \"./assets/images/percent/great-job.jpg\"\r\n      : percentage >= 60\r\n      ? \"./assets/images/percent/Just-OK.jpg\"\r\n      : percentage >= 40\r\n      ? \"./assets/images/percent/Fair-to-Middling.png\"\r\n      : percentage >= 20\r\n      ? \"./assets/images/percent/perspective.jpg\"\r\n      : \"./assets/images/percent/Landon_Moss-OOF!.gif\";\r\n  //putting the image in the html\r\n  jsQuizImageEl.setAttribute(\"src\", x);\r\n}\r\n\r\n//funciton to display image based on certain percentage score\r\nfunction quizMessage() {\r\n  //setting the percentage score calculation\r\n  let percentage = Math.round((100 * gameScore) / questions.length);\r\n  //declaring a variable to hold the quiz messsage to display based on percentage obtained by taking quiz\r\n  //ternary operators - WHAT, WHHHHHAAAAAATTTTTTTT!!!! amiright?\r\n  let x =\r\n    percentage >= 80\r\n      ? \"You are a JavaScript wizard!!  Gandalf, Harry Potter, Merlin, Dr. Strange ... none of them have anything on you.\"\r\n      : percentage >= 60\r\n      ? \"Yeah, ok.  You did pretty good; and, you obviously know quite a bit about JavaScript.  But, there's still room for improvement.\"\r\n      : percentage >= 40\r\n      ? \"Ah, well ... you know a few things.  Not enough to be considered anything more than a N00b though.\"\r\n      : percentage >= 20\r\n      ? \"Time to hit the books.  You might know something, but at this level it is just as likely as you guessed a few correct.\"\r\n      : \"What's that smell!?  Oh, it's you.  Time to put that google-fu to work and get cracking learning JavaScript.\";\r\n  //putting the text in the html\r\n  jsQuizQuestionEl.textContent = x;\r\n}\r\n\r\n//funciton to display image based on certain percentage score\r\nfunction quizMessageHeading() {\r\n  //setting the percentage score calculation\r\n  let percentage = Math.round((100 * gameScore) / questions.length);\r\n  //declaring a variable to hold the heading for the quis message based on percentage obtained by taking quiz\r\n  //ternary operators - WHAT, WHHHHHAAAAAATTTTTTTT!!!! amiright?\r\n  let x =\r\n    percentage >= 80\r\n      ? \"EXCELSIOR!!     (\" + percentage + \"%):\"\r\n      : percentage >= 60\r\n      ? \"PRETTY GOOD     (\" + percentage + \"%):\"\r\n      : percentage >= 40\r\n      ? \"MEH    (\" + percentage + \"%):\"\r\n      : percentage >= 20\r\n      ? \"YOWZA     (\" + percentage + \"%):\"\r\n      : \"OOFFFF--fa!     (\" + percentage + \"%):\";\r\n  //putting the heading in the html\r\n  jsQuizQuestionTitleEl.textContent = x;\r\n}\r\n\r\n//function to change the sytling of the quiz message\r\nfunction quizMessageHeadingStyling() {\r\n  jsQuizQuestionTitleEl.setAttribute(\r\n    \"style\",\r\n    \"margin-left: 85px; margin-right: 85px; margin-top: 25px; font-weight: 725;\"\r\n  );\r\n  jsQuizQuestionTitleEl.style.textDecoration = \"underline\";\r\n}\r\n\r\n//function to change the sytling of the quiz heading\r\nfunction quizMessageStyling() {\r\n  jsQuizQuestionEl.setAttribute(\r\n    \"style\",\r\n    \"margin-left: 85px; margin-right: 85px; margin-top: 18px; font-style: italic;\"\r\n  );\r\n}\r\n\r\n//eventlistenesr for start button and answer buttons (A, B, C, D)\r\njsQuizStartBtn.addEventListener(\"click\", startQuiz);\r\njsQuizAnswerABtn.addEventListener(\"click\", chooseAnswer);\r\njsQuizAnswerBBtn.addEventListener(\"click\", chooseAnswer);\r\njsQuizAnswerCBtn.addEventListener(\"click\", chooseAnswer);\r\njsQuizAnswerDBtn.addEventListener(\"click\", chooseAnswer);\r\njsQuizChangeBackgroundBtn.addEventListener(\"click\", changeBackground);\r\n//jsQuizReStartGameBtn.addEventListener(\"click\", reStartQuiz);\r\n\n\n//# sourceURL=webpack://javascript_code_quiz_challenge/./script.js?");
/******/ })()
;