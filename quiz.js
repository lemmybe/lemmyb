
const options = document.querySelector(".options").children;
const trackanswerAll = document.querySelector(".tracker");
const questionSpn = document.querySelector(".question-num-value");
const questionTotal = document.querySelector(".allQuestions");
const correctAnswer = document.querySelector ("correct-ans");
const totalQuestion2 = document.querySelector ("total-question");
const question = document.querySelector(".question");
const opt1 = document.querySelector(".option1");
const opt2 = document.querySelector(".option2");
const opt3 = document.querySelector(".option3");
const opt4 = document.querySelector(".option4");
let questionIndex;
let index=0;
let array= [];
let arr=[];
let score=0;



const questions = [
    {
        q:'What year was bitcoin whitepaper released?',
        options:['2009','2012','2013','2014'],
        ans:0
    },
    {
        q:'The computers that find new blocks are called:',
        options:['Miners','Mitigators','Accountants','Verifiers'],
        ans:0
    },
    {
        q:'Where is the Bitcoin processing server located?',
        options:['Washington, D.C., USA','Undisclosed location',
        'The United Nations votes on a new location every two years','None of these- Bitcoin has no processing server'],
        ans:3
    },
    {
        q:'What date was the Bitcoin network launched?',
        options:['November 5, 2008','May 1, 2010','January 3, 2009','December 28, 2008'],
        ans:2
    },
    {
        q:'Which of the following statements is true?',
        options:['By 2030, all bitcoins will have been mined.','Bitcoin has smart contract capabilities.',
        'Before Satoshi created Bitcoin, he and a group of developers premined roughly 1 million coins.',
        'Only select people can mine bitcoins.'],
        ans:1 
    }

]

function check(element) {
    if(element.id==questions[questionIndex].ans){
        element.classList.add("correct");
        trackanswerSymbol("correct");
        score++
        console.log("score:"+score)
    }else {
        element.classList.add("wrong");
        trackanswerSymbol("wrong");
    }
    disabledOptions()
}
function disabledOptions() {
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled");
        if (options[i].id==questions[questionIndex].ans){
            options[i].classList.add("correct"); 
        }
    }
    
}

function enableOptions() {
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled","correct","wrong");
    }
}

function enableOptions() {
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled","correct","wrong");    
    }
    
}

function trackanswer() {
    for (let i=0;i<questions.length;i++) {
        const div=document.createElement("div")
        trackanswerAll.appendChild(div);
    }
}

function trackanswerSymbol(trackClass) {
    trackanswerAll.children[index-1].classList.add(trackClass);
    
}
 questionTotal.innerHTML=questions.length;
function load() {
    questionSpn.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    opt1.innerHTML=questions[questionIndex].options[0];
    opt2.innerHTML=questions[questionIndex].options[1];
    opt3.innerHTML=questions[questionIndex].options[2];
    opt4.innerHTML=questions[questionIndex].options[3];
    index++;
}

function validate() {
    if (!options[0].classList.contains("disabled")) {
        alert("pick an option");
    } 
    else{
        enableOptions();
        anySelectedQuestion();
    }
}

function loadNextQuestion() {
    validate();
}
 



    function anySelectedQuestion() {
    let selectedNumber=Math.floor(Math.random()*questions.length);
    let dup=0;
    if(index==questions.length){
        QuizEnds();
    }
    else{
        if(array.length>0) {
            for(let i=0; i<array.length; i++) {
                if(array[i]==selectedNumber){
                    dup=1;
                    break;
                }
            }
            if (dup==1){
                anySelectedQuestion();
             }
             else {
                 questionIndex=selectedNumber;
                 load();
                 arr.push(questionIndex);
                }
        }
        if(array.length==0){
          questionIndex=selectedNumber;
          load();
          arr.push(questionIndex);
        }
        
        array.push(selectedNumber);
    }
}
function quizEnds() {
 document.querySelector(".quiz-ends").classList.add("show");
 correctAnswer.innerHTML=score;
 totalQuestion2.innerHTML=questions.length;
    
}

function tryAgain() {
    window.location.reload();
    
}

window.onload=function() {
    anySelectedQuestion()
    trackanswer();
    
}

