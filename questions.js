var questions = [
    {
        question: "Which of the following are capabilities of functions in JavaScript? ",
        choices: ["(a) Return a value", "(b) Accept parameters and Return a value", "(c) Accept parameters", "(d) None of the above"],
        answer: 'c'
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["(a) <js>", "(b) <scripting>", "(c) <script>", "(d) <javascript>"],
        answer: 'c'
    },

    {
        question: "Which of the following best describes JavaScript?",
        choices: ["(a)a low-level programming language", "(b) a scripting language precompiled in the browser.", "(c) a compiled scripting language.", "(d) an object-oriented scripting language."],
        answer: 'd'
    },

    {
        question: "Scripting language are",
        choices: ["(a) High Level Programming language", "(b) Assembly Level programming language", "(c) Machine level programming language",],
        answer: 'a'
    },

    {
        question: "In JavaScript, Window.prompt() method return true or false value?",
        choices: ["(a) True", "(b) False",],
        answer: 'a'
    }
]
/*
1. Calculate remaining time off the number of questions
2. Create start button
3. After click start countdown
4. Display questions and choices
5. Determine clicks to be right or wrong answers for the choice buttons
6. Display right or wrong text
7. Deduct remaing time with 15 seconds for only wrong answer
8. Either right or wrong go to nex question right away
9. Prompt enter intial text box and save button.
10. Save remaing time in localStorage.
11. Hide intials and prompt button
12. Show view high score and start quiz over buttons
13. CLick on view high score show high score from localstorage in text box
14. Restart button 
*/

var remaingTime = questions.length * 15
var countTimer = 0
var startdiv = document.getElementById("startdiv")
var startBtn = document.getElementById("startBtn")
var begingame = document.getElementById("begingame")
var questionsDiv = document.getElementById("questions")
var choicesDiv = document.getElementById("choices")
var results = document.getElementById("results")
var inputintial = document.getElementById("inputintial")
var showhighscore = document.getElementById("showhighscore")
var timer = document.getElementById("timer")
var questionIndex = 0

function start(){
     
    setInterval(countDown,1000)
}

function countDown(){
    remaingTime--
    timer.innerHTML = "timer:"+ remaingTime

    if(countTimer === 15 || countTimer===0){
        
        questionsDiv.innerHTML = questions[questionIndex].question
        choicesDiv.innerHTML=""
        for (let choiceIndex = 0; choiceIndex < questions[questionIndex].choices.length; choiceIndex++) {
         
               var btn=document.createElement("button")
               btn.setAttribute("class","btn btn-primary")
               btn.textContent=questions[questionIndex].choices[choiceIndex]
               var br=document.createElement("br")
              
               choicesDiv.appendChild(btn)
               choicesDiv.appendChild(br)
        }
        countTimer=0
        questionIndex++
    }
     
     
     countTimer++

}


startBtn.addEventListener("click" , function(){
   startdiv.classList.add("hideElement")
   begingame.classList.remove("hideElement")
   start()
})

function
