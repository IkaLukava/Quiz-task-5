
const questions = [

    // QUESTION 1-----------------------
    {
        question:"რომელ აპლიკაციას ვხმარობ ყველაზე ხშირად🤔?",
        answers:[
            {text:"ტიკ-ტოკი",correct:false},
            {text:"ფეისბუკი",correct:false},
            {text:"ინსტაგრამი",correct:true},
            {text:"ტვიტერი",correct:false},
        ]

    },
    // QUESTION 2 ----------------------
    {
        question:"ჩემი საყვარელი სპორტი🥸?",
        answers:[
            {text:"ფრენბურთი",correct:false},
            {text:"რაგბი",correct:false},
            {text:"ჩოგბურთი",correct:false},
            {text:"კალათბურთი",correct:true},
        ]
    },
    // QUESTION 3 ----------------------
    {
        question:"ჩამოთვლილთაგან რომელია ჩემი საყვარელი ფეხბურთელი🫢?",
        answers:[
            {text:"ნეიმარი",correct:true},
            {text:"ლევანდოვსკი",correct:false},
            {text:"ჰალანდი",correct:false},
            {text:"მბაპე",correct:false},
        ]
    },
    // QUESTION 4 ----------------------
    {
        question:"რომელია ჩემი საყვარელი მანქანა😑?",
        answers:[
            {text:"მერსედესი",correct:false},
            {text:"ჟიგული",correct:false},
            {text:"პორშე",correct:false},
            {text:"არცერთი",correct:true},
        ]
    },
    // QUESTION 5 -------------------------
    {
        question:"რა გვარის ვარ მე😲?",
        answers:[
            {text:"ლუკავა", correct: false},
            {text:"აკობია", correct: true},
            {text:"ლორთქიფანიძე", correct: false},
            {text:"ზარანდია", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const showQuastion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });
};

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuastion();
};
const resetState = () =>{
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        } 
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

const handleNextButton = () =>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuastion();
    }else{
        showScore();
    }
}

const showScore = () =>{
    resetState();
    questionElement.innerHTML = `შენ გამოიცანი ${score} კითხვის პასუხი, ${questions.length}-დან!🤦‍♂️`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();


