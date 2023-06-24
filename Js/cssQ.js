// Css Quiz Question & Answer

const cssQA = [
  {
    question: "Q1) What is the full form of CSS?",
    a: "Coloured Special Sheets",
    b: "Cascading Style Sheets",
    c: "Color and Style Sheets",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question: "Q2) How can we change the background color of an element?",
    a: "color",
    b: "background-color",
    c: "Both a and b",
    d: "None of above",
    ans: "ans2",
  },
  {
    question: "Q3) In how many ways can CSS be written in?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    ans: "ans3",
  },
  {
    question:
      "Q4) What type of CSS is the following code snippet? " +
      "\n\n<h1 style='color:blue;'>A Blue Heading</h1>",
    a: "Internal",
    b: "Inline",
    c: "External",
    d: "None of above",
    ans: "ans2",
  },
  {
    question:
      "Q5) What type of CSS is generally recommended for designing large web pages?",
    a: "Inline",
    b: "Internal",
    c: "External",
    d: "None of above",
    ans: "ans3",
  },
  {
    question: "Q6) Which HTML tag is used to declare internal CSS?",
    a: "<link>",
    b: "<style>",
    c: "<script>",
    d: "<css>",
    ans: "ans2",
  },
  {
    question: "Q7) How can we select an element with specific ID in CSS?",
    a: ".",
    b: "/",
    c: "#",
    d: "?",
    ans: "ans3",
  },
  {
    question: "Q8) How can we select an element with specific Class in CSS?",
    a: "/",
    b: "?",
    c: ".",
    d: "@",
    ans: "ans3",
  },
  {
    question: "Q9) Can negative values be allowed in padding property?",
    a: "Depends on property",
    b: "No",
    c: "Yes",
    d: "None of above",
    ans: "ans3",
  },
  {
    question:
      "Q10) The CSS property used to specify the transparency of an element is?",
    a: "Visibility",
    b: "Opacity",
    c: "Filter",
    d: "rgba()",
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

// Css Quiz Function
const cssQuiz = () => {
  const questionList = cssQA[questionCount];

  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
submit.addEventListener("click", () => {
  const checkedAnswer = validateAns();
  console.log(checkedAnswer);

  if (checkedAnswer == cssQA[questionCount].ans) {
    score++;
    show_Score.innerText = score;
  }

  questionCount++;
  deselectAll();

  if (questionCount < cssQA.length) {
    cssQuiz();
    resetTime();
  } else if (score < 6) {
    Swal.fire({
      title: '<h2 style="color: #444444; font-size: 28px;">Opps 😔</h2>',
      text: `You failed Css Quiz. You scored ${score} / ${cssQA.length}`,
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
      text: `You have passed Css Quiz. You scored ${score} / ${cssQA.length}`,
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

cssQuiz();

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
  cssQuiz();
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
