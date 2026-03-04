document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("taskInput");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("taskList");

    let tasks = [];

function addTask() {
    const text = input.value.trim(); //reads input, and removes spaces
    if (text === "") { //prevents empty tasks
        return;
    }

    tasks.push({
        id: Date.now(), //adds an ID to each of the tasks
        text: text //adds task to list
    });

    input.value = ""; //cleans space

    renderTasks();
}

button.addEventListener("click", addTask);

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }
}
});
