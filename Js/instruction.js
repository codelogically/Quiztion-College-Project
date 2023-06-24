const username = document.getElementById("userName");
username.innerText = localStorage.getItem("Name");

const topic_btn = document.getElementById("topic_btn");
const topics = document.getElementById("topics");
const allTopics = document.querySelectorAll(".input_topic");
const btn_txt = document.querySelector(".btn_txt");
const start_quiz = document.getElementById("start_quiz");

topic_btn.addEventListener("click", () => {
  topics.classList.add("open");
});

allTopics.forEach((topic) => {
  topic.addEventListener("click", () => {
    if (topic.checked) {
      btn_txt.innerText = topic.value;
    }
    topics.classList.remove("open");
  });
});

// Start Quiz by clicking on Start Quiz button

const topic1 = document.getElementById("topic1");
const topic2 = document.getElementById("topic2");
const topic3 = document.getElementById("topic3");
const topic4 = document.getElementById("topic4");
const topic5 = document.getElementById("topic5");
const quizSection = document.querySelector(".quiz_section");

start_quiz.addEventListener("click", () => {
  if (topic1.checked) {
    window.location.replace("htmlQuiz.html");
  } 
  else if (topic2.checked) {
    window.location.replace("cssQuiz.html");
  } 
  else if (topic3.checked) {
    window.location.replace("jsQuiz.html");
  } 
  else if (topic4.checked) {
    window.location.replace("pyQuiz.html");
  } 
  else if (topic5.checked) {
    window.location.replace("javaQuiz.html");
  } 
  else if ( !topic1.checked && !topic2.checked && !topic3.checked && !topic4.checked && !topic5.checked ) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      width: "480px",
    });

    Toast.fire({
      icon: "warning",
      iconColor: "#80b3ff",
      title: "To start quiz you must select langauge",
    });
  }
});

// Logout

function logOut() {
  window.location.replace("index.html");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  if (logout) {
    Swal.fire({
      icon: "question",
      iconColor: "#80b3ff",
      text: "Are you sure you want to logout",
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
          title: "Logining Out",
        });
        setInterval(logOut, 1500);
      }
    });
  }
});
