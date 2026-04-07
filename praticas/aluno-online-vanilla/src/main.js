import './style.css'
const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const emailError = document.getElementById("emailError");
const senhaError = document.getElementById("senhaError");
const formError = document.getElementById("form-error");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 🚫 impede recarregar página

  let isValid = true;

  emailError.textContent = "";
  senhaError.textContent = "";
  formError.textContent = "";

  // valida email
  if (email.value.trim() === "") {
    emailError.textContent = "O email é obrigatório";
    isValid = false;
  }

  if (senha.value.trim() === "") {
    senhaError.textContent = "A senha é obrigatória";
    isValid = false;
  }

  if (isValid) {
    window.location.href = "/index.html"; 
  } else {
    formError.textContent = "Preencha todos os campos!";
  }
});

email.addEventListener("input", () => {
  emailError.textContent = "";
  formError.textContent = "";
});

senha.addEventListener("input", () => {
  senhaError.textContent = "";
  formError.textContent = "";
});
