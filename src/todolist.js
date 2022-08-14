const todoListBtn = document.querySelector("#todo-list");
const todoListContainer = document.querySelector("#todo-list-container");
const todoListForm = document.getElementById("todo-list-form");

const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-lists");

const TODO_KEY = "todos";
let toDos = [];

function openTodoList(event) {
  todoListContainer.classList.toggle("hidden");
}

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
  console.log(toDos);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((toDo) => {
    // li.id : string
    //toDo.id : number
    return parseInt(li.id) !== toDo.id;
  });

  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const cancleBtn = document.createElement("button");
  cancleBtn.innerText = "❌";
  cancleBtn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(cancleBtn);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function handleTodoListSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  if (todoInput.value.length === 0) {
    alert("다시 입력해주세요");
    return;
  }
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };

  todoInput.value = "";
  toDos.push(newTodoObj);
  saveTodos();
  paintTodo(newTodoObj);
}

todoListBtn.addEventListener("click", openTodoList);
todoListForm.addEventListener("submit", handleTodoListSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
