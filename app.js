const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// array to store todos
let todos = [];

// function to add todo to the array and render on the screen
function addTodo() {
  event.preventDefault();
  if (todoInput.value === "") {
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoInput.value,
    completed: false
  };

  todos.push(todo);
  renderTodos();
  todoInput.value = "";
}

// function to render all the todos in the array
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todo.text}</span>
      <button class="delete-btn">Delete</button>
    `;
    li.dataset.id = todo.id;
    if (todo.completed) {
      li.classList.add("completed");
    }
    todoList.appendChild(li);
  });
}

// function to mark a todo as completed or not completed
function toggleCompleted(id) {
  const index = todos.findIndex(todo => todo.id == id);
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

// function to delete a todo from the array and the screen
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id != id);
  renderTodos();
}

// event listeners
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", event => {
  if (event.target.tagName === "SPAN") {
    const id = event.target.parentNode.dataset.id;
    toggleCompleted(id);
  } else if (event.target.classList.contains("delete-btn")) {
    const id = event.target.parentNode.dataset.id;
    deleteTodo(id);
  }
});

// render initial todos
renderTodos();
