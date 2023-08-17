//CREATI NG AN ARRAY AND PASSING NUMBER, QUESTIONS, OPTION AND ANSWER//
let questions= [
    {
        numb :1,
        question: "Inside which element do we put the JavaScript?",
        answer:"<script>",
        options: [
            "<js>",
            "<scripting>",
            "<script>",
            "<javaScript>"
        ]
    },

    {
        numb:2,
        question:"Where is the correct place to insert a JavaScript?",
        answer:"both the <body>and <head> section",
        options:[
            "the <body> section",
            "the <head> section",
            "both the <body> and <head> section",
            "in the <p> tag",
        ]
        
    },
    
    {
        numb:3,
        question:"What is the correct syntax for referring to an external script called 'xxx.js'",
        answer:"both the <body>and <head> section",
        options:[
            "<script src = 'xxx.js'>",
            "<href src = 'xxx.js'>",
            "<id src = 'xxx.js'>",
            "in the <p> tag",
            "<name src = xxx.js'>"
        ]
        
    },

    {
        numb:4,
        question:"The external JavaScript file must contain the <script> tag.",
        answer:"true",
        options:[
            "true",
            "maybe",
            "false",
            "i don't know",
        ]
        
    },

    {
        numb:5,
        question:"How do you write 'hello world' in an alert box?",
        answer:"alert('hello world')",
        options:[
            "msgBox('hello world')",
            "alertBox('hello world')",
            "msgtBox('hello world')",
            "alert('hello world')",
        ]
        
    },


    {
        numb:6,
        question:"Inside which HTML elment do we put the JavaScript?",
        answer:"<script>",
        options:[
            "<js>",
            "<scripting>",
            "<script>",
            "<javascript>",
        ]
        
    },


    
    {
        numb:7,
        question:"How do you create a function in JavaScript?",
        answer:"function myFunction()",
        options:[
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "function == myFunction",
        ]
        
    },

    
    {
        numb:8,
        question:"How do you call a function named 'myFunction'?",
        answer:"myFunction()",
        options:[
            "call myFunction()",
            "myFunction()",
            "invoke myFunction()",
            "call function myFunction()",
        ]
        
    },

    
    {
        numb:9,
        question:"How to write an IF statement in JavaScript?",
        answer:"alert('hello world')",
        options:[
            "if i = 5 then",
            "if i = 5",
            "if (i==5) then",
            "i== 5 then",
        ]
        
    },

    {
        question:"How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: [
            {text:"if i <> 5", correct: false},
            {text:"if (i != 5)", correct: true},
            {text:"if (i <> 5)", correct: false},
            {text:"if i != 5 then", correct: false},
        ]
    },
    {
        question:"How does a WHILE loop start??",
        answers: [
            {text:"while(i <= 10)", correct: true},
            {text:"while(i<= 10; i++)", correct: false},
            {text:"while i = 1 to 10", correct:false},
            {text:"while(i < 10; 1--)", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    },
    {
        question:"Inside which HTML elment do we put the JavaScript?",
        answers: [
            {text:"<js>", correct: false},
            {text:"<scripting>", correct: false},
            {text:"<script>", correct: true},
            {text:"<javascript>", correct: false},
        ]
    }

]

let startBtn = document.querySelector(".start-btn")
let popupInfo = document.querySelector(".info-box")
let exitBtn =  document.querySelector(".exit")
let main = document.querySelector(".section-1")
let continueBtn = document.querySelector(".continue")
let quizBox =  document.querySelector(".quiz-box")
startBtn.onclick = () => {
    popupInfo.classList.add('active');    //shows the popup ifo//
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active'); //hides the popup info//
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    popupInfo.classList.remove('active'); //hides the popup info//
    quizBox.classList.add('active');    ///shows the quiz box//
}
        //Quiz section
        let guide = document.querySelector("#quiz")
        let time = document.querySelector("#time")

        //QUESTION SECTION
        let questionNo =document.querySelector("#qustionNo")
        let quesitonText = document.querySelector("questionText")

        //MULTIPLE CHOICE OF QUESTION
        let option1 = document.querySelector("#optional1");
        let option2 = document.querySelector("#optional2");
        let option3 = document.querySelector("#optional3");
        let option4 = document.querySelector("#optional4");

        //CORRECT AND NEXT BUTTON
        let total_correct =  document.querySelector("#total_correct");
        let next_question =  document.querySelector("#next_question")


        //RESULT SECTION
        let points = document.querySelector("#points")
        let quit = document.querySelector("#quit")
        let startAgain= document.querySelector("#startAgain")
        //GET ALL "H4" ROM THE QUIZ SECTION//
        let choice_que= document.querySelector(".choice_que");
        let index = 0;
        let timer = 0;
        let interval = 0;
    //total points
    let correct = 0;
    //store answer value
    let UserAns = undefined;
    //creating the timer for quiz section
    
    function countdown() {
        let seconds = 16;
    
        function tick() {
            seconds = seconds - 1;
            let time = setTimeout(tick , 1000);
            if(seconds == -1) {
                clearTimeout(time);
            }
        }
        tick()
    }

    let loadData = () =>{
        questionNo.innerText = index + 1 + ". "
        quesitonText.innerText = NCQS[index].question;
        option1.innerText = NCQS[index].choice1;
        option2.innerText = NCQS[index].choice2;
        option3.innerText = NCQS[index].choice3;
        option4.innerText = NCQS[index].choice4;
        timer
    }
    loadData()
    // let countDown = () =>{
    //     if(timer === 15) {
    //         clearInterval(interval);
    //     } else{
    //         timer++;
    //         console.log(timer)
    //     }
    //     setInterval(countDown,1000);
    // }
















//     let que_count = 0;

//     const nextBtn = document.getElementById("#next-btn")

//     nextBtn.onclick = () => {
//     que_count++;
//     showQuestions(que_count);
// }

//         // js for the question section//
//         //getting questions and options form array
//         function showQuestions(index) {
//             const que_text = document.getElementById("que_text")
//             let option_list = document.getElementById("option-list")
//             let que_tag = ' <h2>' + questions[index].numb + ". " + questions[index].question + '</h2>';
//             let option_tag = 
//             que_text.innerHTML = que_tag;
        
//         }
