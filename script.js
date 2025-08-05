const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("div");
  taskItem.className = "task";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "task-actions";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    taskItem.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    taskItem.remove();
  });

  actionsDiv.appendChild(checkbox);
  actionsDiv.appendChild(deleteBtn);

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(actionsDiv);

  taskList.prepend(taskItem);
  taskInput.value = "";
});
