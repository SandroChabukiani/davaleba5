'use strict';
//pirveli davaleba
const hideButton = document.getElementById('hideButton');
const myDiv = document.getElementById('myDiv');
hideButton.addEventListener('click', function () {
  if (myDiv.style.display === 'none' || myDiv.style.display === '') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
});

//meore davaleba

const div = document.createElement('div');
div.id = 'card';

const h2 = document.createElement('h2');
h2.textContent = 'Gandalf';

const a = document.createElement('a');
a.href = '#';
a.textContent = 'Go to profile';
div.appendChild(h2);
div.appendChild(a);
const parentElement = document.body; 
parentElement.appendChild(div);

//mesame davaleba

const questions = [
  {
      question: "Which is the capital of Georgia?",
      answers: ["Batumi", "Tbilisi", "Qutaisi", "Brooklyn"],
      correct: 1
  },
  {
      question: "The best place to learn programming?",
      answers: ["Skillwill", "abc", "def", "ghi"],
      correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  for (let i = 0; i < 4; i++) {
      answerElements[i].textContent = current.answers[i];
  }
}

function checkAnswer(selectedIndex) {
  const current = questions[currentQuestion];
  if (selectedIndex === current.correct) {
      answerElements[selectedIndex].style.backgroundColor = "green";
      score++;
  } else {
      answerElements[selectedIndex].style.backgroundColor = "red";
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
      setTimeout(() => {
          resetAnswers();
          displayQuestion();
      }, 1000);
  } else {
      questionElement.textContent = "ქუიზი დასრულებულია!";
      scoreElement.textContent = `შენი ქულა: ${score}`;
  }

  scoreElement.textContent = `ქულა: ${score}`;
}

function resetAnswers() {
  answerElements.forEach((answerElement) => {
      answerElement.style.backgroundColor = "#eee";
  });
}

answerElements.forEach((answerElement, index) => {
  answerElement.addEventListener("click", () => checkAnswer(index));
});

displayQuestion();