const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const quizContainer = document.getElementById('quiz-container');
const scoreText = document.getElementById('score-text');

let currentQuestionIndex = 0;
let score = 0;

// รายการคำถาม 5 ข้อ
const questions = [
    {
        question: '1. วันเกิดของเราคือวันไหน?',
        answers: [
            { text: '21/07', correct: false },
            { text: '16/01', correct: true },
            { text: '31/12', correct: false },
            { text: '29/12', correct: false }
        ]
    },
    {
        question: '2. เราเจอกันที่ไหนครั้งแรก?',
        answers: [
            { text: 'แอพหาคู่', correct: false },
            { text: 'สนามแบด', correct: true },
            { text: 'หลังเซเว่น', correct: false },
            { text: 'ห้องน้ำ', correct: false }
        ]
    },
    {
        question: '3. วันครอบรอบคือวันอะไร?',
        answers: [
            { text: '21/07', correct: false },
            { text: '29/12', correct: true },
            { text: '21/12', correct: false },
            { text: '24/12', correct: false }
        ]
    },
    {
        question: '4. ข้อความแรกที่ทักหาเราคือข้อความอะไร?',
        answers: [
            { text: 'ทักค่ะ', correct: false },
            { text: 'ใช้คนเสื้อเขียวมั้ย', correct: true },
            { text: 'ดีเคิ้บบ~', correct: false },
            { text: 'ดีง้าบอุ่นเต้อะ', correct: false }
        ]
    },
    {
        question: '5. เราคบกันมาได้กี่ปีแล้ว?',
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false }
        ]
    }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
        alert("ถูกต้อง!");
    } else {
        alert("ผิดนะจ๊ะ!");
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreText.innerText = `เธอได้คะแนน ${score} เต็ม ${questions.length}`;
}

startQuiz();