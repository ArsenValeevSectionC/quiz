let credentialsArray = [];
let logged = false;
let currentUser;

const questions = [
    {
        question: "What is the average lifespan of a rabbit?",
        options: ["3-5 years", "6-8 years", "10-12 years", "15-18 years"],
        answer: "10-12 years"
    },
    {
        question: "What is a baby rabbit called?",
        options: ["Pup", "Kitten", "Fawn", "Calf"],
        answer: "Kitten"
    },
    {
        question: "What is a group of rabbits called?",
        options: ["Pack", "Herd", "Flock", "Warren"],
        answer: "Warren"
    }
];

let currentQuestion = 0;
let score = 0;

const displayQuestion = () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQues = questions[currentQuestion];

    questionElement.textContent = currentQues.question;
    optionsElement.innerHTML = '';

    currentQues.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn', 'btn-success', 'm-2');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

const checkAnswer = (selectedOption) => {
    const currentQues = questions[currentQuestion];
    if (selectedOption === currentQues.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

const displayResult = () => {
    const quizElement = document.getElementById('quiz');
    const resultElement = document.getElementById('result');

    quizElement.style.display = 'none';

    const resultPercentage = (score / questions.length) * 100;
    let resultMessage = `You scored ${score} out of ${questions.length}. `;
    if (resultPercentage === 100) {
        resultMessage += "Congratulations, you got all correct!";
    } else if (resultPercentage >= 50) {
        resultMessage += "Well done!";
    } else {
        resultMessage += "You can do better!";
    }
    resultElement.textContent = resultMessage;

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Quiz';
    restartButton.classList.add('btn', 'btn-outline-warning', 'm-3');
    restartButton.addEventListener('click', () => restartQuiz());
    resultElement.appendChild(restartButton);
}

const restartQuiz = () => {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    document.getElementById('result').textContent = '';
    document.getElementById('quiz').style.display = 'block';
}

document.getElementById('startButton').addEventListener('click', () => {
    if (logged) {
        displayQuestion();
        document.getElementById('startButton').style.display = 'none';
    }
    else {
        alert('You have to log in to start the quiz')
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = credentialsArray.find(user => user.username === usernameInput);

    if (user) {
        if (user.password === passwordInput) {
            alert('Login successful!');
            currentUser = usernameInput;
            logged = true;
            document.getElementById('userInfo').classList.remove('d-none');
            document.getElementById('loggedInUser').innerText = currentUser;
        } else {
            alert('Password is incorrect!');
        }
    } else {
        credentialsArray.push({ username: usernameInput, password: passwordInput });
        alert('New record created!');

        currentUser = usernameInput;
        logged = true;
        document.getElementById('userInfo').classList.remove('d-none');
        document.getElementById('loggedInUser').innerText = currentUser;
    }
});
