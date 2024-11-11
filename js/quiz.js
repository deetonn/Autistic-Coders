// Quiz Questions Array
const quizQuestions = [
    {
        id: 1,
        code: `console.log([] + []);`,
        question: "What will this code output?",
        options: [
            "[]",
            "''", // empty string
            "[object Object]",
            "TypeError"
        ],
        correctAnswer: 1, // Index of correct answer
        explanation: "In JavaScript, when you use the + operator with arrays, they are first converted to strings. An empty array converts to an empty string, so [] + [] is equivalent to '' + '', which results in an empty string."
    },
    // More questions will be added here
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

        // Load question content
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
        if (quizState.answered) return;
        
        const question = quizQuestions[quizState.currentQuestion];
        quizState.answered = true;

        // Show correct/incorrect answers
        answerButtons.forEach((button, index) => {
            button.disabled = true;
            if (index === question.correctAnswer) {
                button.classList.add('correct');
            } else if (index === selectedIndex) {
                button.classList.add('incorrect');
            }
        });

        // Show explanation
        explanationDiv.textContent = question.explanation;
        explanationDiv.classList.remove('d-none');

        // Update score and show next button
        if (selectedIndex === question.correctAnswer) {
            quizState.score++;
        }

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