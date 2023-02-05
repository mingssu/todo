const toDoForm = document.querySelector(".todoForm");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.querySelector(".everything .list");
const todayTodoList = document.querySelector(".today .list");
const dueDateCheck = document.querySelector(".todo .due .check");
const checker = dueDateCheck.querySelector("input");
const dueDatePickerDiv = document.querySelector(".todo .due .date");
const dueDatePicker = document.querySelector(".todo .due .date input");

const TODOS_KEY = "todos";
const FOCUS = "Focus";
const TODAY = "today";
let toDos = [];

function isDueDate() {
  dueDateCheck.classList.add(HIDDEN_CLASSNAME);
  dueDatePickerDiv.classList.remove(HIDDEN_CLASSNAME);

  dueDatePicker.required = true;
}

checker.addEventListener("change", isDueDate);

function parseYYMMDD(dates) {
  const month = String(dates.getMonth() + 1).padStart(2, "0");

  const date = String(dates.getDate()).padStart(2, "0");
  const year = String(dates.getFullYear());

  return `${year}-${month}-${date}`;
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  saveToDos();
}

function makeTodoElement(newToDo) {
  const div = document.createElement("div");
  div.id = newToDo.id;
  div.classList.add("todoList");
  const content = document.createElement("div");
  const button = document.createElement("input");
  const buttonLabel = document.createElement("label");

  content.classList.add("task");
  buttonLabel.for = "check";
  button.type = "checkbox";
  button.value = "1";
  buttonLabel.classList.add("button");
  button.classList.add("buttonCheck");

  content.innerText = newToDo.text;
  buttonLabel.addEventListener("click", deleteToDo);

  div.appendChild(button);
  div.appendChild(buttonLabel);
  div.appendChild(content);

  return div;
}

function paintToDo(newToDo) {
  const div = makeTodoElement(newToDo);
  const today = new Date();
  const dueDate = newToDo.due;
  const parsedToday = parseYYMMDD(today);
  div.addEventListener("mouseenter", handleMouseEnter);
  div.addEventListener("mouseleave", handleMouseLeave);

  todoList.appendChild(div);
  if (dueDate == parsedToday) {
    todayTodoList.appendChild(div);
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  let dueDate;

  if (!dueDatePickerDiv.classList.contains(HIDDEN_CLASSNAME)) {
    dueDate = dueDatePicker.value;
    dueDatePicker.value = "";
    //dueDatePickerDiv.classList.toggle(HIDDEN_CLASSNAME);
    //dueDateCheck.classList.toggle(HIDDEN_CLASSNAME);
    dueDatePicker.required = false;
    checker.checked = false;
  } else {
    dueDate = "";
    checker.checked = false;
  }

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    user: currentUser,
    due: dueDate,
  };
  toDos.push(newToDoObj);
  saveToDos();
  paintToDo(newToDoObj, newToDoObj.due);
}

function handleMouseEnter(event) {
  const obj = event.target;
  obj.classList.add(FOCUS);
}
function handleMouseLeave(event) {
  const obj = event.target;
  obj.classList.remove(FOCUS);
}

function parseYYMMDD(dates) {
  const month = String(dates.getMonth() + 1).padStart(2, "0");

  const date = String(dates.getDate()).padStart(2, "0");
  const year = String(dates.getFullYear());

  return `${year}-${month}-${date}`;
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoInput.addEventListener("mouseenter", handleMouseEnter);
toDoInput.addEventListener("mouseleave", handleMouseLeave);

const currentUser = localStorage.getItem("userName");
const savedToDos = localStorage.getItem(TODOS_KEY);
const today = new Date();
const parsedToday = parseYYMMDD(today);

if (savedToDos !== null) {
  let parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
  parsedToDos.forEach((item) => {
    paintToDo(item);
  });
}