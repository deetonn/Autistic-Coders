// Quiz Questions Array
const quizQuestions = [
    {
        id: 1,
        question: "What's the result of adding two empty arrays together?",
        code: `[] + []`,
        options: [
            "[]",
            "Empty String ('')",
            "[object Object]",
            "undefined"
        ],
        correctAnswer: 1,
        explanation: `
            <div class="explanation-title">JavaScript garbage explained!</div>
            <p>Surprise! When you add two empty arrays together, JavaScript decides to turn them into strings first (because why not?).</p>
            <p>Here's what happens under the hood:</p>
            <ol>
                <li>First, JavaScript thinks: "Arrays? Let me convert those to strings!"</li>
                <li>[] becomes "" (an empty string)</li>
                <li>"" + "" equals ""</li>
            </ol>
            <p>It's like JavaScript is saying: "Empty array? That's just a fancy way of saying nothing!"</p>
            <p class="mt-3"><strong>Fun fact:</strong> This quirk has probably caused hundreds of thousands of developers to question their career choices! 🤔 Welcome to the club! 🎉</p>
        `
    },
    {
        id: 2,
        question: "What's the result of adding an empty array to an object?",
        code: `[] + {}`,
        options: [
            "[object Object]",
            "undefined",
            "TypeError",
            "[]",
        ],
        correctAnswer: 0,
        explanation: `
            <div class="explanation-title">God I hate this</div>
            <p>How disgusting is that? Javascript just decides to turn them into strings and call it a day.</p>
            <p>Here's what happens under the hood:</p>
            <ol>
                <li>First, JavaScript thinks: "Arrays? Let me convert those to strings!"</li>
                <li>[] becomes "" (an empty string)</li>
                <li>{} becomes "[object Object]" (a string representation of the object)</li>
                <li>"" + "[object Object]" equals "[object Object]"</li>
            </ol>
        `
    },
    {
        id: 3,
        question: "Now, to really toy with you, what's the previous operation backwards? So {} + []",
        code: `{} + []`,
        options: [
            "undefined",
            "0",
            "[object Object]",
            "TypeError"
        ],
        correctAnswer: 1,
        explanation: `
            <div class="explanation-title">I'm not even mad</div>
            <p>In this example, javascript interprets the <strong>{}</strong> as a code block, which is empty.</p>
            <p>Here's what happens under the hood:</p>
            <ol>
                <li>First, javascript interprets the <strong>{}</strong> as a code block, which is empty.</li>
                <li>Then, <strong>+[]</strong> is whats left, so thats what is evaluated.</li>
                <li>Because we used the plus operator, javascript will convert the array into a string, which as we saw previously, is <strong>""</strong>.</li>
                <li>In javascript, an empty string is <strong>falsey</strong>, so the <strong>+</strong> operator converts it to <strong>0</strong>. (as 0 = false, 1 = true)</li>
                <li>Then we get zero! 🎉</li>
                <p class="mt-3"><strong>Fun fact:</strong> The language with this horrible logic, is controlling this quiz logic right now 🤣</p>
            </ol>
        `
    }
];

// Quiz State
const quizState = {
    currentQuestion: 0,
    score: 0,
    answered: false
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const questionCard = document.querySelector('.question-card');
    const questionText = document.querySelector('.question-text');
    const codeBlock = document.querySelector('.code-block code');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const explanationDiv = document.querySelector('.explanation');
    const nextButton = document.getElementById('nextQuestion');

    // Initialize Quiz
    function initializeQuiz() {
        loadQuestion(quizState.currentQuestion);
        nextButton.style.display = 'none';
    }

    // Load Question
    function loadQuestion(questionIndex) {
        const question = quizQuestions[questionIndex];
        if (!question) return;

        // Reset state
        quizState.answered = false;
        explanationDiv.classList.add('d-none');
        nextButton.style.display = 'none';

        // Set question text
        questionText.textContent = question.question;
        
        // Load code content
        codeBlock.textContent = question.code;
        
        // Load answers
        answerButtons.forEach((button, index) => {
            button.textContent = question.options[index];
            button.classList.remove('correct', 'incorrect');
            button.disabled = false;
        });
    }

    // Handle Answer Selection
    function handleAnswer(selectedIndex) {
        const question = quizQuestions[quizState.currentQuestion];
        
        // Reset previous answers
        answerButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
        });

        // Show correct/incorrect answers
        answerButtons.forEach((button, index) => {
            if (index === question.correctAnswer) {
                button.classList.add('correct');
            } else if (index === selectedIndex) {
                button.classList.add('incorrect');
            }
        });

        // Show explanation
        explanationDiv.innerHTML = question.explanation;
        explanationDiv.classList.remove('d-none');

        // Update score
        if (selectedIndex === question.correctAnswer && !quizState.answered) {
            quizState.score++;
        }
        
        quizState.answered = true;

        // Show next button
        if (quizState.currentQuestion < quizQuestions.length - 1) {
            nextButton.style.display = 'block';
        } else {
            nextButton.textContent = 'See Results';
            nextButton.style.display = 'block';
        }
    }

    // Event Listeners
    answerButtons.forEach((button, index) => {
        button.addEventListener('click', () => handleAnswer(index));
    });

    nextButton.addEventListener('click', () => {
        if (quizState.currentQuestion < quizQuestions.length - 1) {
            quizState.currentQuestion++;
            loadQuestion(quizState.currentQuestion);
        } else {
            // Handle quiz completion
            showResults();
        }
    });

    // Show Quiz Results
    function showResults() {
        const percentage = (quizState.score / quizQuestions.length) * 100;
        questionCard.innerHTML = `
            <h2 class="text-center mb-4">Quiz Complete!</h2>
            <p class="lead text-center">You scored ${quizState.score} out of ${quizQuestions.length} (${percentage}%)</p>
            <div class="text-center mt-4">
                <button class="btn btn-primary" onclick="location.reload()">Try Again</button>
            </div>
        `;
    }

    // Initialize the quiz
    initializeQuiz();
}); 