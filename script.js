function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    input.value = "";
}