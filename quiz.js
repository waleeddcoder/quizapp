const quizQuestions = [
    {
        question: "What is the capital of France?",

        a: "London",
        b: "Berlin",
        c: "Madrid",
        d: "Paris",

        correctAnswer: "d",
    },
    {
        question: "Which planet is known as the Red Planet?",

        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Saturn",

        correctAnswer: "a",
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",

        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",

        correctAnswer: "b",
    },
    {
        question: "What is the largest mammal on Earth?",

        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Lion",

        correctAnswer: "b",
    },
    {
        question:
            "Which famous scientist developed the theory of general relativity?",

        a: "Isaac Newton",
        b: "Niels Bohr",
        c: "Albert Einstein",
        d: "Galileo Galilei",

        correctAnswer: "c",
    },
    {
        question: "What is the chemical symbol for the element gold?",

        a: "Go",
        b: "Gl",
        c: "Au",
        d: "Gd",

        correctAnswer: "c",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",

        a: "China",
        b: "South Korea",
        c: "Japan",
        d: "Vietnam",

        correctAnswer: "c",
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",

        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Argon",

        correctAnswer: "c",
    },
    {
        question: "What is the largest organ in the human body?",

        a: "Brain",
        b: "Liver",
        c: "Skin",
        d: "Heart",

        correctAnswer: "c",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",

        a: "William Shakespeare",
        b: "Charles Dickens",
        c: "Jane Austen",
        d: "Leo Tolstoy",

        correctAnswer: "a",
    },
];
let index = 0;
let total = quizQuestions.length;
let right = 0,
    wrong = 0;
let data;
const questionArea = document.getElementById("questionArea");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    data = quizQuestions[index];
    questionArea.innerText = data.question;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const answer = getAnswer();
    if (answer === data.correctAnswer) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
};
const getAnswer = () => {
    let answer;
    for (const input of optionInputs) {
        if (input.checked) {
            answer = input.value;
            break;
        }
    }
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        if ((input.checked = false)) {
            return input.value;
        }
    });
};

const endQuiz = () => {
    const percentage = (right / total) * 100;
    const message = `<h3>You managed to get ${percentage.toFixed(
        0
    )}% scores</h3>`;
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thankyou for playing the quiz</h3>
    ${message}
    <div/>
    `;
};
loadQuestion();
