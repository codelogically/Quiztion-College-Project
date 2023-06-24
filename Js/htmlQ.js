// Html Quiz Question & Answer

const htmlQA = [
  {
    question: "Q1) What is the full form of HTML?",
    a: "Hyperlink Markup Language",
    b: "Hypertext Market and Text Markup Language",
    c: "Hypertext Markup Language",
    d: "None of the Above",
    ans: "ans3",
  },
  {
    question: "Q2) Which one is the correct sequence of HTML tags?",
    a: "head, body, title, html",
    b: "html, title, head, body",
    c: "html, body, head, title",
    d: "html, head, title, body",
    ans: "ans4",
  },
  {
    question: "Q3) Which tag is used to make the underlined text?",
    a: "<b>",
    b: "<u>",
    c: "<ul>",
    d: "<line>",
    ans: "ans2",
  },
  {
    question: "Q4) How to create a checkbox in HTML?",
    a: "<input type='check'>",
    b: "<checkbox>",
    c: "<input type='checkbox'>",
    d: "<input type = 'button'>",
    ans: "ans3",
  },
  {
    question: "Q5) Which HTML tag is used to make the text bold in HTML?",
    a: "<br>",
    b: "<b>",
    c: "<pre>",
    d: "None",
    ans: "ans2",
  },
  {
    question: "Q6) Correct syntax to include external CSS in HTML?",
    a: "<link rel='stylesheet' src='style.css'>",
    b: "<link rel='stylesheet' href='style.css'>",
    c: "<link href='style.css'>",
    d: "<link rel='sheet' href='style.css'>",
    ans: "ans2",
  },
  {
    question:
      "Q7) Which HTML tag is used to display the text with scrolling effect?",
    a: "<run>",
    b: "<scroll>",
    c: "<marquee>",
    d: "None",
    ans: "ans3",
  },
  {
    question:
      "Q8) Which HTML tag is used to insert the largest heading in HTML?",
    a: "<h4>",
    b: "<h1>",
    c: "<h6>",
    d: "None",
    ans: "ans2",
  },
  {
    question: "Q9) Which HTML tag is used to insert a line-break?",
    a: "<b>",
    b: "<break>",
    c: "<br>",
    d: "<pre>",
    ans: "ans3",
  },
  {
    question: "Q10) Correct syntax to create ordered list?",
    a: "<ordered></ol>",
    b: "<order></order>",
    c: "<ol></ol>",
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
const question_value = document.getElementById("questionValue");
let questionCount = 0;
let score = 0;
let questionValue = 1;

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

// Function to load question & option
const htmlQuiz = () => {
  const questionList = htmlQA[questionCount];

  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;

};
submit.addEventListener("click", () => {
  const checkedAnswer = validateAns();
  console.log(checkedAnswer);

  if (checkedAnswer == htmlQA[questionCount].ans) {
    score++;
    show_Score.innerText = score;
  }

  questionCount++;
  deselectAll();

  
  if (questionCount < htmlQA.length) {
    htmlQuiz();
    resetTime();

  } else if (score < 6) { // If score is less than 6
    Swal.fire({
      title: '<h2 style="color: #444444; font-size: 28px;">Opps 😔</h2>',
      text: `You failed Html Quiz. You scored ${score} / ${htmlQA.length}`,
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
  } else if (score >= 6) { // If score is greater or equal to 6
    Swal.fire({
      title: '<h2 style="color: #444444; font-size: 28px;">Hurray! 🥳</h2>',
      text: `You have passed Html Quiz. You scored ${score} / ${htmlQA.length}`,
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

htmlQuiz();

// Count Down

const remainingTime = document.getElementById("remainingTime");
let intervalId;

function startTime() {
  let count = 15;
  remainingTime.textContent = count;

  intervalId = setInterval(function () {
    count--;
    remainingTime.textContent = count;
    if (count <= 9) { // If count is less than or equal to 9 it add 0 before the number
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
  }, 1000);
}

// Count Down will Reset

function resetTime() {
  clearInterval(intervalId);
  htmlQuiz();
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
