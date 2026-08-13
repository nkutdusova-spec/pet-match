// ======================================
// PET DATABASE
// ======================================

const pets = {

  dog: {
    name: "Dog",
    emoji: "🐶",
    personality: "Active & Loyal",
    tag: "Adventure Buddy",

    description:
      "You enjoy activity, companionship and spending lots of time with your pet. A dog could be the perfect adventure buddy."
  },


  cat: {
    name: "Cat",
    emoji: "🐱",
    personality: "Independent & Loving",
    tag: "Chill Companion",

    description:
      "You want affection while still enjoying independence. A cat could fit beautifully into your lifestyle."
  },


  turtle: {
    name: "Turtle",
    emoji: "🐢",
    personality: "Calm & Curious",
    tag: "Peaceful Pal",

    description:
      "You prefer a calm and fascinating pet that does not require constant attention."
  },


  hamster: {
    name: "Hamster",
    emoji: "🐹",
    personality: "Small & Playful",
    tag: "Tiny Adventurer",

    description:
      "You want a cute, playful companion that can live comfortably in a smaller space."
  },


  rabbit: {
    name: "Rabbit",
    emoji: "🐰",
    personality: "Gentle & Social",
    tag: "Soft Sweetheart",

    description:
      "You are patient and want a gentle, social pet with lots of personality."
  },


  parrot: {
    name: "Parrot",
    emoji: "🦜",
    personality: "Smart & Talkative",
    tag: "Social Genius",

    description:
      "You enjoy intelligent, social and entertaining animals and would enjoy lots of interaction."
  }

};



// ======================================
// AUTOMATICALLY CREATE PET CARDS
// ======================================

const petGrid =
  document.getElementById("petGrid");


function createPetCards() {

  petGrid.innerHTML = "";


  Object.entries(pets).forEach(
    ([id, pet]) => {

      const card =
        document.createElement("article");


      card.className =
        "pet-card";


      card.innerHTML = `

        <span class="pet-emoji">
          ${pet.emoji}
        </span>

        <h3>
          ${pet.name}
        </h3>

        <p>
          ${pet.personality}
        </p>

        <span class="pet-tag">
          ${pet.tag}
        </span>

      `;


      petGrid.appendChild(card);

    }
  );

}


createPetCards();



// ======================================
// QUIZ QUESTIONS
// ======================================

const questions = [

  {

    question:
      "How much time can you spend with your pet each day?",

    answers: [

      {
        text: "🌞 Several hours",

        scores: {
          dog: 3,
          rabbit: 2,
          parrot: 2
        }
      },


      {
        text: "⏰ About 1–2 hours",

        scores: {
          cat: 3,
          rabbit: 2,
          hamster: 1
        }
      },


      {
        text: "🌙 Less than an hour",

        scores: {
          turtle: 3,
          hamster: 2,
          cat: 1
        }
      }

    ]

  },


  {

    question:
      "What personality would you like your pet to have?",

    answers: [

      {
        text:
          "🎾 Energetic and playful",

        scores: {
          dog: 3,
          rabbit: 2,
          hamster: 2
        }
      },


      {
        text:
          "💛 Loving but independent",

        scores: {
          cat: 3,
          rabbit: 1
        }
      },


      {
        text:
          "🌿 Calm and peaceful",

        scores: {
          turtle: 3,
          cat: 1
        }
      },


      {
        text:
          "🧠 Smart and entertaining",

        scores: {
          parrot: 3,
          dog: 1
        }
      }

    ]

  },


  {

    question:
      "What kind of home do you have?",

    answers: [

      {
        text:
          "🏡 A house with plenty of space",

        scores: {
          dog: 3,
          rabbit: 2,
          parrot: 1
        }
      },


      {
        text:
          "🏢 An apartment",

        scores: {
          cat: 3,
          rabbit: 2,
          turtle: 2
        }
      },


      {
        text:
          "🛏 Limited space",

        scores: {
          hamster: 3,
          turtle: 3
        }
      }

    ]

  },


  {

    question:
      "How much noise are you comfortable with?",

    answers: [

      {
        text:
          "📢 Noise doesn't bother me",

        scores: {
          parrot: 3,
          dog: 2
        }
      },


      {
        text:
          "🎵 A little noise is okay",

        scores: {
          cat: 2,
          rabbit: 2,
          hamster: 1
        }
      },


      {
        text:
          "🤫 I prefer peace and quiet",

        scores: {
          turtle: 3,
          hamster: 2
        }
      }

    ]

  },


  {

    question:
      "How active do you want to be with your pet?",

    answers: [

      {
        text:
          "🏃 Very active",

        scores: {
          dog: 4
        }
      },


      {
        text:
          "🎾 Some playtime",

        scores: {
          rabbit: 3,
          cat: 2,
          hamster: 2
        }
      },


      {
        text:
          "🛋 Mostly relaxing",

        scores: {
          turtle: 4,
          cat: 1
        }
      },


      {
        text:
          "🧩 Training and interaction",

        scores: {
          parrot: 4,
          dog: 2
        }
      }

    ]

  },


  {

    question:
      "Which sounds like the best pet experience?",

    answers: [

      {
        text:
          "🐕 Going on adventures",

        scores: {
          dog: 5
        }
      },


      {
        text:
          "🐈 Relaxing together",

        scores: {
          cat: 5
        }
      },


      {
        text:
          "🌊 Creating an awesome habitat",

        scores: {
          turtle: 5
        }
      },


      {
        text:
          "🐹 Having a tiny companion",

        scores: {
          hamster: 5
        }
      },


      {
        text:
          "🥕 Playing with a gentle animal",

        scores: {
          rabbit: 5
        }
      },


      {
        text:
          "🦜 Teaching tricks",

        scores: {
          parrot: 5
        }
      }

    ]

  }

];



// ======================================
// ELEMENTS
// ======================================

const modal =
  document.getElementById(
    "quizModal"
  );


const startButtons =
  document.querySelectorAll(
    ".start-quiz"
  );


const closeButton =
  document.getElementById(
    "closeQuiz"
  );


const questionText =
  document.getElementById(
    "questionText"
  );


const questionCounter =
  document.getElementById(
    "questionCounter"
  );


const progressPercent =
  document.getElementById(
    "progressPercent"
  );


const progressBar =
  document.getElementById(
    "progressBar"
  );


const answers =
  document.getElementById(
    "answers"
  );


const questionArea =
  document.getElementById(
    "quizQuestions"
  );


const resultArea =
  document.getElementById(
    "quizResult"
  );


const resultEmoji =
  document.getElementById(
    "resultEmoji"
  );


const resultName =
  document.getElementById(
    "resultName"
  );


const resultPercentage =
  document.getElementById(
    "resultPercentage"
  );


const resultDescription =
  document.getElementById(
    "resultDescription"
  );


const restartButton =
  document.getElementById(
    "restartQuiz"
  );


const finishButton =
  document.getElementById(
    "finishQuiz"
  );



// ======================================
// QUIZ STATE
// ======================================

let questionIndex = 0;

let scores = {};



// ======================================
// CREATE EMPTY SCORES
// Automatically works if new pets
// are added later.
// ======================================

function resetScores() {

  scores = {};


  Object.keys(pets).forEach(
    pet => {

      scores[pet] = 0;

    }
  );

}



// ======================================
// OPEN QUIZ
// ======================================

function openQuiz() {

  resetQuiz();

  modal.classList.add(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}



// ======================================
// CLOSE QUIZ
// ======================================

function closeQuiz() {

  modal.classList.remove(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}



// ======================================
// SHOW QUESTION
// ======================================

function showQuestion() {

  const current =
    questions[questionIndex];


  questionText.textContent =
    current.question;


  questionCounter.textContent =
    `Question ${questionIndex + 1} of ${questions.length}`;


  const percentage =
    Math.round(
      (
        (questionIndex + 1) /
        questions.length
      ) * 100
    );


  progressPercent.textContent =
    `${percentage}%`;


  progressBar.style.width =
    `${percentage}%`;


  answers.innerHTML =
    "";


  current.answers.forEach(
    answer => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "answer";


      button.textContent =
        answer.text;


      button.addEventListener(
        "click",
        () => {

          submitAnswer(
            answer.scores
          );

        }
      );


      answers.appendChild(
        button
      );

    }
  );

}



// ======================================
// SUBMIT ANSWER
// ======================================

function submitAnswer(
  answerScores
) {

  Object.entries(
    answerScores
  ).forEach(
    ([pet, points]) => {

      if (
        scores[pet] !== undefined
      ) {

        scores[pet] +=
          points;

      }

    }
  );


  questionIndex++;


  if (
    questionIndex <
    questions.length
  ) {

    showQuestion();

  } else {

    showResult();

  }

}



// ======================================
// FIND WINNING PET
// ======================================

function getBestPet() {

  return Object.keys(scores)
    .reduce(
      (best, pet) => {

        return scores[pet] >
          scores[best]
          ? pet
          : best;

      }
    );

}



// ======================================
// CALCULATE MATCH %
// ======================================

function calculatePercentage(
  bestPet
) {

  const allPoints =
    Object.values(scores)
      .reduce(
        (total, points) =>
          total + points,
        0
      );


  if (allPoints === 0) {
    return 80;
  }


  const ratio =
    scores[bestPet] /
    allPoints;


  const percentage =
    Math.round(
      78 +
      ratio * 35
    );


  return Math.min(
    percentage,
    98
  );

}



// ======================================
// RESULT
// ======================================

function showResult() {

  const petId =
    getBestPet();


  const pet =
    pets[petId];


  const percentage =
    calculatePercentage(
      petId
    );


  questionArea.classList.add(
    "hidden"
  );


  resultArea.classList.remove(
    "hidden"
  );


  resultEmoji.textContent =
    pet.emoji;


  resultName.textContent =
    pet.name;


  resultPercentage.textContent =
    `${percentage}% Match`;


  resultDescription.textContent =
    pet.description;

}



// ======================================
// RESET
// ======================================

function resetQuiz() {

  questionIndex =
    0;


  resetScores();


  resultArea.classList.add(
    "hidden"
  );


  questionArea.classList.remove(
    "hidden"
  );


  showQuestion();

}



// ======================================
// EVENTS
// ======================================

startButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      openQuiz
    );

  }
);


closeButton.addEventListener(
  "click",
  closeQuiz
);


finishButton.addEventListener(
  "click",
  closeQuiz
);


restartButton.addEventListener(
  "click",
  resetQuiz
);


modal.addEventListener(
  "click",
  event => {

    if (
      event.target === modal
    ) {

      closeQuiz();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      closeQuiz();

    }

  }
);
