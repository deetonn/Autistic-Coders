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
        question: "Now, to really toy with you, what's the result of {} + []?",
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
                <li>Because we used the plus operator, javascript will convert the array into a number, which, because it is empty, is <strong>0</strong>.</li>
                <li>Its not zero because its empty either, its zero because an empty array is <strong>falsey</strong>, so the <strong>+</strong> operator converts it to <strong>0</strong>. (as 0 = false, 1 = true)</li>
                <li>Then we get zero! 🎉</li>
                <p class="mt-3"><strong>Fun fact:</strong> The language with this horrible logic, is controlling this quiz logic right now 🤣</p>
            </ol>
        `
    },
    {
        id: 4,
        question: "What's the result of comparing an empty array to zero?",
        code: `[] == 0`,
        options: [
            "true",
            "false",
            "undefined",
            "TypeError"
        ],
        correctAnswer: 0,
        explanation: `
            <div class="explanation-title">That's right, they're equal??</div>
            <p>In JavaScript, an empty array when converted to a string is an empty string, which is equal to zero. (I know. I know.)</p>
            <p>Here's what happens under the hood:</p>
            <ol>
                <li>JavaScript doesn't know how to compare an array with a number."</li>
                <li>So, naturally instead of throwing an exception, it simply converts the array into a string.</li>
                <li>An empty string is equal to zero, so [] == 0 is true!</li>
            </ol>
            <p class="mt-3"><strong>Fun fact:</strong> This is why you should always use <strong>===</strong> (strict equality, will not perform type coercion) instead of <strong>==</strong> (loose equality, will perform type coercion) in JavaScript. (unless you want this behavior)</p> 
        `
    },
    {
        id: 5,
        question: "What about this one? Is a string of zero, equal to zero?",
        code: `"0" == 0`,
        options: [
            "true",
            "false",
            "undefined",
            "TypeError"
        ],
        correctAnswer: 0,
        explanation: `
            <div class="explanation-title">Yes, it is</div>
            <p>Again, because we used the <strong>==</strong> operator, javascript will convert the string into a number before comparison.</p>
            <p>A string of "0" is converted to the number 0, so "0" == 0 is true!</p>
            <p class="mt-3"><strong>Fun fact:</strong> <strong>SERIOUSLY</strong>, you should always use <strong>===</strong> lol.</p> 
        `
    },
    {
        id: 6,
        question: "What is the result of this expression?",
        code: `"b" + "a" + +"a" + "a"`,
        options: [
            "'baNaNa'",
            "TypeError",
            "undefined",
            "'baaa'"
        ],
        correctAnswer: 0,
        explanation: `
            <div class="explanation-title">What is this madness?</div>
            <p>This expression is a bit simple, but let's break it down:</p>
            <ol>
                <li>First, we have the string "b" + "a" which is "ba"</li>
                <li>Next, we have + +"a" which is 'NaN' (Not a Number), because that's what the + operator does.</li>
                <li>Then, we have "a" left, so we add that to the string, resulting in "baa"</li>
                <li>Finally, we add "a" to the string, resulting in "baNaNa"</li>
            </ol>
        `
    },
    {
        id: 7,
        question: "What is the result of this expression?",
        code: "{foo: 'bar'}{}",
        options: [
            'undefined',
            '"foo"',
            '"bar"',
            'TypeError'
        ],
        correctAnswer: 2,
        explanation: `
            <div class="explanation-title">This is an obscure one</div>
            <p>This expression is a bit strange. The first {} is interpreted as a code block, and the second {} is interpreted as an empty object.</p>
            <p>The result is the string "bar", because it is the value of the foo property, which wasnt actually defined inside of an object, but an empty block.</p>
        `
    },
    {
        id: 8,
        question: "What is returned from this function?",
        code: `function a(x) {
  arguments[0] = "hello";
  return x;
}

a(1); // ? What does this return?`,
        options: [
            "1",
            "undefined",
            "hello",
            "null"
        ],
        correctAnswer: 2,
        explanation: `
            <div class="explanation-title">Meet argument bindings, the joys of dynamic programming languages!</div>
            <p>In JavaScript, the <strong>arguments</strong> object is an array-like object that contains the values of the arguments passed to a function. However, it behaves like an array, but it is not an array.</p>
            <p>Lets break down the function:</p>
            <ol>
                <li>The function <strong>a</strong> takes a single argument <strong>x</strong>.</li>
                <li>When the function is called with <strong>a(1)</strong>, the argument <strong>x</strong> is set to <strong>1</strong>.</li>
                <li>When it returns, it returns the value of <strong>x</strong>, which is <strong>"hello"</strong>. (because we set it to "hello" using arguments[0] = "hello")</li>
            </ol>
            <p>Booky one that!</p>
        `
    },
    {
        id: 9,
        question: "What happens when this code is run?",
        code: '[666]["\x6D\x61\x70"]["\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72"]("\x61\x6C\x65\x72\x74(666)")(666);',
        options: [
            "666",
            "console.log('hello, world!')",
            "alert(666)",
            "TypeError"
        ],
        correctAnswer: 2,
        explanation: `
            <div class="explanation-title">This one is directly from hell.</div>
            <p>This code is a bit complex, but lets break it down:</p>
            <ol>
                <li>The expression starts with <strong>[666]</strong>, which is an array with a single element, the number 666.</li>
                <li>Next, it accesses the <strong>map</strong> property of the array, which is a function that creates a new array with the results of calling a provided function on every element in the calling array.</li>
                <li>Then, it accesses the <strong>constructor</strong> property of the map function, which is a function that creates a new object.</li>
                <li>Then, it calls the constructor function with the string "\x61\x6C\x65\x72\x74(666)", which is the string "alert(666)" in Unicode escape notation.</li>
                <li>Finally, it calls the resulting function with the argument 666.</li>
            </ol>
            <p class="mt-3">Warning, this may not work in our runner, because browsers block unsafe eval.</p>
        `
    }
].sort(() => Math.random() - 0.5);

// Quiz State
const quizState = {
    currentQuestion: 0,
    score: 0,
    answered: false,
    answerHistory: [], // Store answers for each question
    selectedAnswers: {} // Track selected answers
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const questionCard = document.querySelector('.question-card');
    const questionText = document.querySelector('.question-text');
    const codeBlock = document.querySelector('.code-block code');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const explanationDiv = document.querySelector('.explanation');
    const nextButton = document.getElementById('nextQuestion');
    const prevButton = document.getElementById('prevQuestion');

    const tryItYourself = document.querySelector('.try-it-yourself');
    const codeEditor = document.querySelector('.code-editor code');
    const runCodeBtn = document.querySelector('.run-code-btn');
    const outputContent = document.querySelector('.output-content');

    // Initialize Quiz
    function initializeQuiz() {
        loadQuestion(quizState.currentQuestion);
        nextButton.style.display = 'none';
    }

    // Load Question
    function loadQuestion(questionIndex) {
        const question = quizQuestions[questionIndex];
        if (!question) return;

        // Reset state but maintain answer if it exists
        quizState.answered = quizState.selectedAnswers[questionIndex] !== undefined;
        explanationDiv.classList.add('d-none');

        // Set question text and code
        questionText.textContent = question.question;
        codeBlock.textContent = question.code;
        
        // Load answers and show previous selections
        answerButtons.forEach((button, index) => {
            button.textContent = question.options[index];
            button.classList.remove('correct', 'incorrect');
            
            // Restore previous answer state if it exists
            if (quizState.selectedAnswers[questionIndex] !== undefined) {
                if (index === question.correctAnswer) {
                    button.classList.add('correct');
                } else if (index === quizState.selectedAnswers[questionIndex]) {
                    button.classList.add('incorrect');
                }
            }
            
            button.disabled = false;
        });

        // Show/hide navigation buttons
        prevButton.style.display = questionIndex > 0 ? 'block' : 'none';
        nextButton.style.display = quizState.answered ? 'block' : 'none';
        
        // Update next button text for last question
        if (questionIndex === quizQuestions.length - 1) {
            nextButton.textContent = 'See Results';
        } else {
            nextButton.textContent = 'Next';
        }

        // Show explanation if question was answered
        if (quizState.selectedAnswers[questionIndex] !== undefined) {
            explanationDiv.innerHTML = question.explanation;
            explanationDiv.classList.remove('d-none');
        }

        // Show try-it-yourself if question was answered
        if (quizState.selectedAnswers[questionIndex] !== undefined) {
            tryItYourself.classList.remove('d-none');
            codeEditor.textContent = question.code;
        } else {
            tryItYourself.classList.add('d-none');
        }
    }

    // Handle Answer Selection
    function handleAnswer(selectedIndex) {
        const question = quizQuestions[quizState.currentQuestion];
        
        // Store the selected answer
        quizState.selectedAnswers[quizState.currentQuestion] = selectedIndex;

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

        // Update score only if first attempt
        if (!quizState.answered && selectedIndex === question.correctAnswer) {
            quizState.score++;
        }
        
        quizState.answered = true;

        // Show navigation buttons
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';

        // Show the try it yourself section
        tryItYourself.classList.remove('d-none');
        
        // Set the current question's code in the editor
        codeEditor.textContent = question.code;
    }

    // Event Listeners
    nextButton.addEventListener('click', handleNextQuestion);
    prevButton.addEventListener('click', handlePreviousQuestion);
    
    // Answer button listeners
    answerButtons.forEach((button, index) => {
        button.addEventListener('click', () => handleAnswer(index));
    });

    function handleNextQuestion() {
        if (quizState.currentQuestion < quizQuestions.length - 1) {
            quizState.currentQuestion++;
            loadQuestion(quizState.currentQuestion);
            // Scroll to quiz section
            document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
        } else {
            showResults();
        }
    }

    function handlePreviousQuestion() {
        if (quizState.currentQuestion > 0) {
            quizState.currentQuestion--;
            loadQuestion(quizState.currentQuestion);
            // Scroll to quiz section
            document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Safe eval function
    function safeEval(code) {
        try {
            // we dont wrap the code, because it may vary results if returned from a function.
            const result = eval(code);
            
            // Handle different types of results
            if (result === '') {
                return "\"\"";
            } else if (result === undefined) {
                return 'undefined';
            } else if (result === null) {
                return 'null';
            } else {
                return String(result);
            }
        } catch (error) {
            return 'Error: ' + error.message;
        }
    }

    // Run code button handler
    runCodeBtn.addEventListener('click', () => {
        const code = codeEditor.textContent.trim();
        const result = safeEval(code);
        
        // Set the output directly, no template literal
        outputContent.textContent = result;
    });

    // Show Quiz Results
    function showResults() {
        const percentage = Math.round((quizState.score / quizQuestions.length) * 100);
        questionCard.innerHTML = `
            <h2 class="text-center mb-4">Quiz Complete!</h2>
            <p class="lead text-center">You scored ${quizState.score} out of ${quizQuestions.length} (${percentage}%)</p>
            <div class="text-center mt-4">
                <button class="btn btn-primary" onclick="resetQuiz()">Try Again</button>
            </div>
        `;
    }

    // Initialize the quiz
    initializeQuiz();
}); 