const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questione1 = document.getElementById("question").innerText = `What is ${num1} multiply by ${num2}`
var score = 0;

const inputE1 = document.getElementById('input');

const formE1 = document.getElementById('form');
const scoreE1 = document.getElementById('score')

const correctAnswer = num1 * num2;
formE1.addEventListener("submit", () => {
    const userAnswer = inputE1.value;
    if (userAnswer == correctAnswer) {

        plusOne();
    } else {
        minusOne();
    }
});

function plusOne() {
    score = +1;
    document.getElementById('score').score = "score" + score;
}

function minusOne() {
    score = score - 1;
    document.getElementById('score').score = "score" + score;

}