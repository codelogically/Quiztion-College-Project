const inputs = document.querySelectorAll(".input_field");
const register = document.querySelector(".register");
const login = document.querySelector(".login");
const main = document.querySelector("main");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

register.addEventListener("click", () => {
  main.classList.add("sign-up-mode");
  document.title = "Quiztion - Register";
});

login.addEventListener("click", () => {
  main.classList.remove("sign-up-mode");
  document.title = "Quiztion - Login";
});

// Store Data in localStorage

const register_name = document.getElementById("register_name");
const register_password = document.getElementById("register_password");
const register_btn = document.querySelector(".register_btn");

function reload() {
  window.location.reload();
}
function loginPage() {
  window.location.replace("instruction.html");
}

register_btn.addEventListener("click", () => {

  if (register_name.value == "" && register_password.value == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      width: '500px',
    });
    
    Toast.fire({
      icon: 'warning',
      iconColor: '#80b3ff',
      title: 'Enter your Name & Create new password'
    });
  }
  else if (register_name.value == "" && register_password.value != "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      width: '450px',
    });
    
    Toast.fire({
      icon: 'warning',
      iconColor: '#80b3ff',
      title: 'Enter your name'
    });
  }
  else if (register_name.value != "" && register_password.value == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      width: '450px',
    });
    
    Toast.fire({
      icon: 'warning',
      iconColor: '#80b3ff',
      title: 'Create new password'
    });
  }
  else {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      width: '400px'
    });
    
    Toast.fire({
      icon: 'success',
      iconColor: '#32CD32',
      title: 'Account created successfully'
    });
    localStorage.setItem("Name", register_name.value);
    localStorage.setItem("Password", register_password.value);
    setInterval(reload, 2000);
  }
});

// Accessing Data from localStorage to Login

const login_name = document.getElementById("login_name");
const login_password = document.getElementById("login_password");
const login_btn = document.querySelector(".login_btn");

login_btn.addEventListener("click", () => {
  var userName = localStorage.getItem("Name");
  var userPassword = localStorage.getItem("Password");

  if (login_name.value == "" && login_password.value == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      width: '450px',
    });
    
    Toast.fire({
      icon: 'warning',
      iconColor: '#80b3ff',
      title: 'Enter your Name & Password to login'
    });
  }
  else if (login_name.value == "" && login_password.value != "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    
    Toast.fire({
      icon: 'warning',
      iconColor: '#80b3ff',
      title: 'Enter your Name to login'
    });
  }
  else if (login_name.value != "" && login_password.value == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      width: '400px',
    });
    
    Toast.fire({
      icon: 'warning',
      iconColor: '#80b3ff',
      title: 'Enter your Password to login'
    });
  }
  else if (login_name.value != userName && login_password.value != userPassword) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    
    Toast.fire({
      icon: 'error',
      iconColor: '#FE3232',
      title: 'Invalid Name or Password'
    });
  }
  else if (login_name.value != userName && login_password.value == userPassword) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    
    Toast.fire({
      icon: 'error',
      iconColor: '#FE3232',
      title: 'Invalid Name'
    });
  }
  else if (login_name.value == userName && login_password.value != userPassword) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    
    Toast.fire({
      icon: 'error',
      iconColor: '#FE3232',
      title: 'Invalid Password'
    });
  }
  else if (login_name.value == userName && login_password.value == userPassword) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    
    Toast.fire({
      icon: 'success',
      iconColor: '#32CD32',
      title: 'Login Successfully'
    });
    setInterval(loginPage, 2000);
  }
});
