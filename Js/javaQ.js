// JavaScript Quiz Question & Answer

const javaQA = [
  {
    question: "Q1) Number of primitive data types in Java are?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    ans: "ans3",
  },
  {
    question: "Q2) Number of primitive data types in Java are?",
    a: "32 and 64",
    b: "32 and 32",
    c: "64 and 64",
    d: "64 and 32",
    ans: "ans1",
  },
  {
    question: "Q3) Number of primitive data types in Java are?",
    a: "Byte to int",
    b: "int to long",
    c: "Long to int",
    d: "Short to int",
    ans: "ans2",
  },
  {
    question: "Q4) Select the valid statement.",
    a: "char [] ch = new char(5)",
    b: "char [] ch - new char[5]",
    c: "char [] ch = new char()",
    d: "char [] ch = new char[]",
    ans: "ans2",
  },
  {
    question: "Q5) Select the valid statement.",
    a: "The refrence of the array",
    b: "A copy of a array",
    c: "Length of a array",
    d: "Copy of a first element",
    ans: "ans1",
  },
  {
    question: "Q6) Select the valid statement to declare and initialize an array.",
    a: "int[] A = {}",
    b: "int[] A = {1, 2, 3}",
    c: "int[] A = (1, 2, 3)",
    d: "int[][] A = {1, 2, 3}",
    ans: "ans2",
  },
  {
    question: "Q7) Arrays in java are-",
    a: "Object reference",
    b: "objects",
    c: "Primitive data types",
    d: "None",
    ans: "ans2",
  },
  {
    question: "Q8) When is the object created with new keyword?",
    a: "At run time",
    b: "At compile",
    c: "Depends on the code",
    d: "None",
    ans: "ans1",
  },
  {
    question: "Q9) When is the object created with new keyword?",
    a: "A package is collection of editing tools",
    b: "A package is collection of classes",
    c: "A package is collection of classes and interfaces",
    d: "A package is collection of interfaces",
    ans: "ans3",
  },
  {
    question: "Q10) Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class.",
    a: "final",
    b: "static",
    c: "volatile",
    d: "abstract",
    ans: "ans2",
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
const javaQuiz = () => {
  const questionList = javaQA[questionCount];

  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
submit.addEventListener("click", () => {
  const checkedAnswer = validateAns();
  console.log(checkedAnswer);

  if (checkedAnswer == javaQA[questionCount].ans) {
    score++;
    show_Score.innerText = score;
  }

  questionCount++;
  deselectAll();

  if (questionCount < javaQA.length) {
    javaQuiz();
    resetTime();
  } else if (score < 6) {
    Swal.fire({
      title: '<h2 style="color: #444444; font-size: 28px;">Opps 😔</h2>',
      text: `You failed Java Quiz. You scored ${score} / ${javaQA.length}`,
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
      text: `You have passed Java Quiz. You scored ${score} / ${javaQA.length}`,
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

javaQuiz();

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
  javaQuiz();
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
