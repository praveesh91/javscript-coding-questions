const inputEl = document.getElementById("todo");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task-list");
let editMode = false;
let editItem = null;

function add() {
  const inputValue = inputEl.value.trim();

  if (inputValue === "") {
    if (editMode) {
    }
    alert("Please enter a task!");
    return;
  }
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  listItem.innerHTML = inputValue;
  deleteBtn.innerHTML = "❌";
  editBtn.innerHTML = "✍🏾";
  taskList.appendChild(listItem);
  taskList.appendChild(deleteBtn);
  taskList.appendChild(editBtn);
  inputEl.value = "";
}

taskList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName == "BUTTON") {
    const todoItem = target.parentNode;
    console.log(todoItem);
    if (target.innerText == "❌") {
      todoItem.remove();
    } else if (target.innerText == "✍🏾") {
      editMode = true;
      editItem = todoItem;
      addBtn.innerHTML = "Edit";
      inputEl.value = todoItem.firstChild.textContent;
      inputEl.focus();
    }
  }
});
