 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");
         answerContainers.forEach(e => e.style.color = "black");
         
         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Which stress is neglected for thin plates?", ///// Write the question inside double quotes
            answers: {
                a: "stress in the x direction (&#963;<sub>X X</sub>)", ///// Write the option 1 inside double quotes
                b: "stress in the z direction (&#963;<sub>z z</sub>)", ///// Write the option 2 inside double quotes
                c: "stress in the y direction (&#963;<sub>y y</sub>)", ///// Write the option 1 inside double quotes
                d: "stress in the xz direction (&#963;<sub>x z</sub>)", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "2. For plate dynamic equilibrium equations is function of which axis?", ///// Write the question inside double quotes
            answers: {
                a: "Function of x, z, and t.", ///// Write the option 1 inside double quotes
                b: "Function of y, z, and t.", ///// Write the option 2 inside double quotes
                c: "Function of x, y, and t.", ///// Write the option 1 inside double quotes
                d: "Function of z, y, and t.", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "3. The linear strain-displacement relations are given by?", ///// Write the question inside double quotes
            answers: {
                a: "<img src='images/pr1.png' style='height: 43px' draggable='false'>", ///// Write the option 1 inside double quotes
                b: "<img src='images/pr2.png' style='height: 43px' draggable='false'>", ///// Write the option 2 inside double quotes
                c: "<img src='images/pr3.png' style='height: 43px' draggable='false'>", ///// Write the option 1 inside double quotes
                d: "<img src='images/pr4.png' style='height: 43px' draggable='false'>", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "4. The flexural rigidity of the plate, is given by?", ///// Write the question inside double quotes
            answers: {
                a: "<img src='images/pr5.png' style='height: 43px' draggable='false'>", ///// Write the option 1 inside double quotes
                b: "<img src='images/pr6.png' style='height: 43px' draggable='false'>", ///// Write the option 2 inside double quotes
                c: "<img src='images/pr7.png' style='height: 43px' draggable='false'>", ///// Write the option 1 inside double quotes
                d: "<img src='images/pr8.png' style='height: 43px' draggable='false'>", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "5. Which of following is denote the biharmonic operator?", ///// Write the question inside double quotes
            answers: {
                a: "&#8711;<sup>2</sup>", ///// Write the option 1 inside double quotes
                b: "&#8711;<sup>3</sup>", ///// Write the option 2 inside double quotes
                c: "&#8711;<sup>5</sup>", ///// Write the option 1 inside double quotes
                d: "&#8711;<sup>4</sup>", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },



     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
