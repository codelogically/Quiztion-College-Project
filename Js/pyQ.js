// JavaScript Quiz Question & Answer

const pythonQA = [
  {
    question: "Q1) What is the maximum length of a Python identifier?",
    a: "32",
    b: "16",
    c: "128",
    d: "No fixed lenth is specified",
    ans: "ans4",
  },
  {
    question:
      "Q2) What will be the datatype of the var in the below code snippet?" +
      "\n\nvar = 10\nprint(type(var))\nvar = 'Hello'\nprint(type(var))",
    a: "str and int",
    b: "int and int",
    c: "str and str",
    d: "int and str",
    ans: "ans4",
  },
  {
    question: "Q3) How is a code block indicated in Python?",
    a: "Brackets",
    b: "Indentation",
    c: "Key",
    d: "None of above",
    ans: "ans2",
  },
  {
    question: "Q4) Which of the following concepts is not a part of Python?",
    a: "Pointer",
    b: "Loops",
    c: "Dynamic Typing",
    d: "All of above",
    ans: "ans1",
  },
  {
    question: "Q5) Which of the following statements are used in Exception Handling in Python?",
    a: "try",
    b: "except",
    c: "finally",
    d: "All of above",
    ans: "ans4",
  },
  {
    question: "Q6) Which of the following types of loops are not supported in Python?",
    a: "for",
    b: "while",
    c: "do while",
    d: "None of above",
    ans: "ans3",
  },
  {
    question: "Q7) Which of the following types of loops are not supported in Python?",
    a: "if ele in list",
    b: "if not ele not in list",
    c: "Both A and B",
    d: "None of above",
    ans: "ans3",
  },
  {
    question: "Q8) Which of the following functions converts date to corresponding time in Python?",
    a: "strptime()",
    b: "strftime()",
    c: "Both A and B",
    d: "None of above",
    ans: "ans1",
  },
  {
    question: "Q9) As what datatype are the *args stored, when passed into a function?",
    a: "List",
    b: "Tuple",
    c: "Dictionary",
    d: "None of above",
    ans: "ans2",
  },
  {
    question: "Q10) As what datatype are the *kwargs stored, when passed into a function?",
    a: "List",
    b: "Tuple",
    c: "Dictionary",
    d: "None of above",
    ans: "ans3",
  },
];

// Quiz Functions

const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const text = document.getElementById("text");
const resultSection = document.querySelector(".result_section");
const show_Score = document.getElementById("show_Score");
const tryagain = document.getElementById("tryagain");
let questionCount = 0;
let score = 0;

// Answer Validation
const validateAns = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });

  return answer;
};

//  Deselect all answer when next load's
const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

// JavaScript Quiz Function
const pyQuiz = () => {
  const questionList = pythonQA[questionCount];

  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
submit.addEventListener("click", () => {
  const checkedAnswer = validateAns();
  console.log(checkedAnswer);

  if (checkedAnswer == pythonQA[questionCount].ans) {
    score++;
    show_Score.innerText = score;
  }

  questionCount++;
  deselectAll();

  if (questionCount < pythonQA.length) {
    pyQuiz();
    resetTime();
  } else if (score < 6) {
    Swal.fire({
      title: '<h2 style="color: #444444; font-size: 28px;">Opps 😔</h2>',
      text: `You failed Python Quiz. You scored ${score} / ${pythonQA.length}`,
      showConfirmButton: true,
      confirmButtonText: "Try Again",
      confirmButtonColor: "#0066ff",
      showDenyButton: true,
      denyButtonText: "Quit Quiz",
      denyButtonColor: "#9370db",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      } else if (result.isDenied) {
        window.location.replace("instruction.html");
      }
    });
  } else if (score >= 6) {
    Swal.fire({
      title: '<h2 style="color: #444444; font-size: 28px;">Hurray! 🥳</h2>',
      text: `You have passed Python Quiz. You scored ${score} / ${pythonQA.length}`,
      showConfirmButton: true,
      confirmButtonColor: "#0066ff",
      confirmButtonText: "Play Again",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace("instruction.html");
      }
    });
  }
});

pyQuiz();

// Count Down

const remainingTime = document.getElementById("remainingTime");
let intervalId;

function startTime() {
  let count = 15;
  remainingTime.textContent = count;

  intervalId = setInterval(function() {
    count--;
    remainingTime.textContent = count;
    if (count <= 9) {
      let addZero = remainingTime.textContent;
      remainingTime.textContent = "0" + addZero;
    }

    if (count == 0) {
      clearInterval(intervalId);
      questionCount++;
      resetTime();
    }
    answers.forEach((curAnsElem) =>  {
      if (curAnsElem.checked) {
        clearInterval(intervalId);
      }
    });
  }, 1000)
}

function resetTime() {
  clearInterval(intervalId);
  pyQuiz();
  startTime();
}

startTime();

// Quit Quiz

function QuiztQuiz() {
  window.location.replace("instruction.html");
}

const quitQuiz = document.getElementById("quitQuiz");

quitQuiz.addEventListener("click", () => {

  clearInterval(intervalId);

  if (quitQuiz) {
    Swal.fire({
      icon: "question",
      iconColor: "#80b3ff",
      text: "Are you sure you want to quit the quiz",
      showCancelButton: true,
      cancelButtonText: "No",
      showConfirmButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#0066ff",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          iconColor: "#32CD32",
          title: "Quiting Quiz",
        });
        setInterval(QuiztQuiz, 1500);
      } else {
        startTime();
      }
    });
  }
});
