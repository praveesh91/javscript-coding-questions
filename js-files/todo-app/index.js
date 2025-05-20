const inputEl = document.getElementById("todo");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task-list");

function add() {
  const inputValue = inputEl.value.trim();

  if (inputValue === "") {
    alert("Please enter a task!");
    return;
  }
  const listItem = document.createElement("li");
  listItem.textContent = inputValue;
  taskList.appendChild(listItem);
  inputEl.value = "";
}
