// JavaScript Quiz Question & Answer

const jsQA = [
  {
    question: "Q1) Javascript is an _______ language?",
    a: "Object-Based",
    b: "Object-Oriented",
    c: "Procedural",
    d: "None of above",
    ans: "ans2",
  },
  {
    question:
      "Q2) Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "None of above",
    ans: "ans3",
  },
  {
    question:
      "Q3) Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementbyId()",
    b: "getElementbyClassName()",
    c: "Both A and B",
    d: "None of above",
    ans: "ans3",
  },
  {
    question:
      "Q4) Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignores the statements",
    c: "Gives a warning",
    d: "None of above",
    ans: "ans2",
  },
  {
    question:
      "Q5) Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    ans: "ans4",
  },
  {
    question: "Q6) How can a datatype be declared to be a constant type?",
    a: "constant",
    b: "let",
    c: "const",
    d: "var",
    ans: "ans3",
  },
  {
    question:
      "Q7) When the switch statement matches the expression with the given labels, how is the comparison done?",
    a: "Both the datatype and the result of the expression are compared.",
    b: "Only the datatype of the expression is compared.",
    c: "Only the value of the expression is compared.",
    d: "None of the above.",
    ans: "ans1",
  },
  {
    question:
      "Q8) What keyword is used to check whether a given property is valid or not?",
    a: "is in",
    b: "exists",
    c: "in",
    d: "lies",
    ans: "ans3",
  },
  {
    question: "Q9) What is the use of the <noscript> tag in Javascript?",
    a: "Clears all the cookies and cache.",
    b: "The contents are displayed by non-JS-based browsers.",
    c: "Both A and B",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question:
      "Q10) When an operator’s value is NULL, the typeof returned by the unary operator is:",
    a: "Undefined",
    b: "Integer",
    c: "Object",
    d: "Boolean",
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
const showScore = document.getElementById("showScore");
const resultSection = document.querySelector(".result_section");
const show_Score = document.getElementById("show_Score");
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
const jsQuiz = () => {
  const questionList = jsQA[questionCount];

  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
submit.addEventListener("click", () => {
  const checkedAnswer = validateAns();
  console.log(checkedAnswer);

  if (checkedAnswer == jsQA[questionCount].ans) {
    score++;
    show_Score.innerText = score;
  }

  questionCount++;
  deselectAll();

  if (questionCount < jsQA.length) {
    jsQuiz();
    resetTime();
  } else if (score < 6) {
    Swal.fire({
      title: '<h2 style="color: #444444; font-size: 28px;">Opps 😔</h2>',
      text: `You failed you scored ${score} / ${jsQA.length}`,
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
      text: `You have passed JavaScript Quiz. You scored ${score} / ${jsQA.length}`,
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

jsQuiz();

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
  jsQuiz();
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
