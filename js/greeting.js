const logInForm = document.querySelector(".login-form");
const logInInput = logInForm.querySelector("input");
const greetingTitle = document.querySelector(".greeting");
const quote = document.querySelector(".quotes");
const todoForm = document.querySelector(".todo");
const content = document.querySelector(".content");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function fillGreeting(userName) {
  greetingTitle.classList.remove(HIDDEN_CLASSNAME);
  greetingTitle.innerText = `${userName}'s to-do list`;
}

function handleLogInSubmit(event) {
  event.preventDefault();
  logInForm.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  content.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  const userName = logInInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  fillGreeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  logInForm.classList.remove(HIDDEN_CLASSNAME);
  logInForm.addEventListener("submit", handleLogInSubmit);
} else {
  fillGreeting(savedUserName);
  quote.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  content.classList.remove(HIDDEN_CLASSNAME);
}