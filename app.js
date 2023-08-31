// handler function...

function handleAddTaskSubmit(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") {
    addTodo(input.value);
    //add count of task
    countFunc();
  }
  input.value = "";
}

function handleCheckDelete(e) {
  if (e.target.name == "checkButton") {
    checkTodo(e);
  }
  if (e.target.name == "deleteButton") {
    deleteTodo(e);
  }
}

function handleClearAll(e) {
  document.querySelector("ul").innerHTML = "";
  countFunc();
}


    

//helper function


//calcutaing count 
let countFunc = function count() {
  let count = document.querySelector("ul").getElementsByTagName("li").length;
  document.getElementById("count").innerText = `total tasks: ${count}`;
};
function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li"); // created new element

  li.classList.add("todo-list-item"); // give class name to newely added element
  ul.appendChild(li); // set position of element in HTML structure

  //to add HTML inside JS
  li.innerHTML = `
    <span class='todo-item'>${todo}</span>
    <button name='checkButton' id='checkBtn'><i class='fas fa-check-square'></i></button>
    <button name='deleteButton'><i class='fas fa-trash'></i></button>
    `;
}
function isCompleted(inpute) {
  if (inpute) return true;
  else return false;
}

function checkTodo(e) {
  let item = e.target.parentNode;

  if (item.style.textDecoration != "line-through") {
    item.style.textDecoration = "line-through";
    item.style.color = "green";
  } else {
    item.style.textDecoration = "none";
    item.style.color = "#595959";
  }
  isCompleted(true);
}
function deleteTodo(e) {
  let item = e.target.parentNode;

  item.remove();
  countFunc();
}


//calling eventListener

document.querySelector("form").addEventListener("submit", handleAddTaskSubmit);
document.querySelector("ul").addEventListener("click", handleCheckDelete);
document.getElementById("action_btn").addEventListener("click", handleClearAll);

