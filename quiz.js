const quizQuestions = [
    {
        question:
            "What is the capital of Eswatini (formerly known as Swaziland)?",
        a: "Mbabane",
        b: "Lobamba",
        c: "Manzini",
        d: "Hhohho",
        correctAnswer: "a",
    },
    {
        question:
            "Which planet is often referred to as the 'Morning Star' or 'Evening Star'?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correctAnswer: "a",
    },
    {
        question: "In which year did the French Revolution begin?",
        a: "1789",
        b: "1799",
        c: "1776",
        d: "1804",
        correctAnswer: "a",
    },
    {
        question: "What is the smallest prime number?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correctAnswer: "c",
    },
    {
        question:
            "Which African country is known as the 'Land of a Thousand Hills'?",
        a: "Kenya",
        b: "Uganda",
        c: "Rwanda",
        d: "Tanzania",
        correctAnswer: "c",
    },
    {
        question:
            "Who is the famous scientist known for his theory of general relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Niels Bohr",
        d: "Galileo Galilei",
        correctAnswer: "b",
    },
    {
        question: "What is the national flower of Japan?",
        a: "Cherry Blossom",
        b: "Lotus",
        c: "Rose",
        d: "Sunflower",
        correctAnswer: "a",
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
        question: "Which gas is known as the 'Laughing Gas'?",
        a: "Carbon Dioxide",
        b: "Oxygen",
        c: "Nitrous Oxide",
        d: "Methane",
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
    {
        question: "What is the largest species of shark?",
        a: "Great White Shark",
        b: "Hammerhead Shark",
        c: "Whale Shark",
        d: "Tiger Shark",
        correctAnswer: "c",
    },
    {
        question: "In which year did the Titanic sink?",
        a: "1912",
        b: "1920",
        c: "1907",
        d: "1915",
        correctAnswer: "a",
    },
    {
        question: "Who composed the famous classical music piece 'Fur Elise'?",
        a: "Ludwig van Beethoven",
        b: "Wolfgang Amadeus Mozart",
        c: "Johann Sebastian Bach",
        d: "Franz Schubert",
        correctAnswer: "a",
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
        question: "What is the main component of Earth's core?",
        a: "Nickel",
        b: "Iron",
        c: "Gold",
        d: "Copper",
        correctAnswer: "b",
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
