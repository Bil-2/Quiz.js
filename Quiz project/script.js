document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");



  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "How many continents are there on Earth?",
      choices: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent Van Gogh",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "Which country is famous for the pyramids?",
      choices: ["India", "Mexico", "Egypt", "China"],
      answer: "Egypt",
    },
    {
      question: "How many legs does a spider have?",
      choices: ["6", "8", "10", "12"],
      answer: "8",
    },
    {
      question: "What is the boiling point of water?",
      choices: ["90°C", "95°C", "100°C", "105°C"],
      answer: "100°C",
    },
    {
      question: "Which language is used for web development?",
      choices: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "Which is the longest river in the world?",
      choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "What is the main ingredient in guacamole?",
      choices: ["Tomato", "Cucumber", "Avocado", "Onion"],
      answer: "Avocado",
    },
    {
      question: "Which planet has the most moons?",
      choices: ["Earth", "Mars", "Saturn", "Jupiter"],
      answer: "Saturn",
    },
  ];
  

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
