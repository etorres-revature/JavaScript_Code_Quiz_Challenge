# :school: [*JavaScript Code Quiz Challenge*](https://etorres-revature.github.io/JavaScript_Code_Quiz_Challenge/) :school:

The world wide web is composed of three primary languages:  Hypertext Markup Lanauge **(HTML)**; Cascading Style Sheets **(CSS)** and JavaScript **(JS)**.

Each perfroms a specific funciton: 

1. *HTML* is used to structure and present content on the World Wide Web;
2. *CSS* is the language for describing the presentation of web pages (i.e. - fonts, layout, colors, etc) as well, it allows for the presentation to adapt to different types of devices with different size screens;
3. _JS_ is used to implement complex features on web pages by

    * displaying timely content
    * creating interactrive features
    * animating graphics
    * dynamically created properties
    * setting timers/intervals
    * inserting special effects in games
    * and many other prominent aspects of world wide web interactivity.

In order to test your **JS** knowledge, I have created the [*JavaScript Code Quiz Challenge*](https://etorres-revature.github.io/JavaScript_Code_Quiz_Challenge/).  It is powered by **JS** with ten questions ranging from beginner to intermediate difficulty. While you are determining your level of **JS** knowledge, you will also be getting an indication of the sorts of capabilities that **JS** can bring to a web page.

## :video_game: GAMEPLAY :video_game:
     
<p align="justify"><a href="https://etorres-revature.github.io/JavaScript_Code_Quiz_Challenge/">JavaScript Code Quiz Challenge</a></p>

When the link above is clicked you will be taken to the web page containing the *JavaScript Code Quiz Challenge*.  The NavBar will take you to the ***Recent Scores*** page and there are links to my [***Responsive Portfolio***](https://etorres-revature.github.io/Responsive_Portfolio/) on the far right.  The quiz rules are displayed in the middle of the screen.


![JavaScript Code Quiz Challenge before start button pushed](./assets/images/readme_screenshots/quiz.png)

If the default background does not suit your taste, then I have provided a ***"New Background"*** button that uses **JS** to change the **CSS** setting for the *background color*.


![JavaScript Code Quiz Challenge with different backgrounds](./assets/images/readme_screenshots/quiz-background.png)

When you click on the button that reads ***"Start Quiz!!"***; **JS** is used to display the elements of the game:

* *an image*
* *an area to display the question*
* *four buttons each with a potential correct answer*

![JavaScript Code Quiz Challenge after game started](./assets/images/readme_screenshots/quiz-active.png)

While you are taking the *JavaScript Code Quiz Challenge*; **JS** is being used to manipulate the following **HTML** elements:

1. Dynamic display of the *Progress Bar* informing you of the percentage time left in the game;
1. Providing a running *counter* of the seconds left to finish the game;
1. Displaying the *number of questions* that have been *answered*; and 
1. Keeping a *tally of correct answers* (e.g. - you're ***SCORE!!***).

Once you have answered all of the questions, the image and message will be changed by **JS** based on the *percentage of questions* that you have *answered correctly*.

![JavaScript Code Quiz Challenge completed game](./assets/images/readme_screenshots/quiz-finished.png)


Don't let the timer run out; otherwise, a *devil-may-care* **Lisa Simpson** will ***devilishly*** appear to inform you that you have lost!!

![JavaScript Code Quiz Challenge Lisa Simpson loser message](./assets/images/readme_screenshots/quiz-loser.png)

When you are finished with the *JavaScript Code Quiz Challenge*; **JS** is used to store an array of objects containing player initials and scores.  When the ***Top Scores*** page is visited **JS** is used to dynamically display information of the last ten players and their associated scores.  ***JSON parse/stringify*** is used to store this array of objects in *Local Storage*, so that the information is ***persisted*** and will be available in the browser even if it is closed or reloaded (the information will be lost once the user or another application **clears** *Local Storage*).

![JavaScript Code Quiz Challenge ***Top Scores*** page display](./assets/images/readme_screenshots/quiz-top-scores.png)

And there you have it, just a small taste of the ways in which **JS** can make your web pages both *dynamic* and *interactive* ***!!!***

### :computer: Technologies Used :computer:

#### :memo: HTML5 :memo:

**HTML5** is a markup language used for structuring and presenting content on the World Wide Web.  The goals are to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices; and to remain backward compatible to older software.  Many new symantec features are included.

*HTML5* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/HTML5).</a>

#### :art: CSS :art:

**Cascading Style Sheets (CSS)** is a stylesheet language used for describing the presentation of a document written in a markup language (such as HTML5).  CSS is designed to enable the separation of presentation and content; including layout, colors, and fonts.  This separation improves content accessibility to provide more flexibility and control in the specification of presentation characteristics, enabling multiple web pages to share formatting by specifying relevant CSS in a separate file, which reduces complexity and repetition in the structural content (HTML), as well as enabling the file to be cached to improve the page load speed between the pages that share the file and its formatting.

Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice, and on Braille-based tactile devices. 

*CSS* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).</a>

#### :shoe: Bootstrap 4 :shoe:

**Bootstrap 4** is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.  It contains CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.  

*Bootstrap 4* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)).</a>

#### :sparkler: JavaScript :sparkler:

**JavaScript (JS)** is one of the core technologies of the World Wide Web (along with HTML and CSS). It enables interactive web pages and is an essential part of web applications.  JS is a multi-faceted, scripting language that provides versatility through Application Programming Interfaces (APIs) and Document Object Model (DOM) manipulation, among others.

*JavaScript* content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/JavaScript).</a>

## Author :sunglasses:

Content and design created by :green_heart: Eric D. Torres :green_heart:.  

The author can be reached at etorresnotary@gmail.com. 

#### License

MIT License

Copyright (c) 2020 EricDTorres

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.