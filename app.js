let todos = [];

function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();

  if (value !== "") {
    todos.push(value);
    input.value = "";
    displayTodos();
  }
}

function displayTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => { // Pass index as an argument
    const li = document.createElement("li");
    li.textContent = todo;
    list.appendChild(li);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn"); 
    removeBtn.style.backgroundColor = "red";
    removeBtn.onclick = () => removeTodoAtIndex(index); // Pass index to removeTodoAtIndex
    li.appendChild(removeBtn);

  });
}

function removeTodoAtIndex(index) {
  todos.splice(index, 1);
  displayTodos();
}

function downloadTodo() {
  const mainLine = "Here is the list of your ToDo's:\n"
  const defaultLines = "\n\n\n\n\n\n\n\n\n*****Thank you for using******\n***Designed & developed by***\n*******Devashish Prasad*******";
  const data = mainLine + todos.join("\n") + defaultLines;
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "todos.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
