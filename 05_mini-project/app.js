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

    tasks.push(text); //adds task to list

    input.value = ""; //cleans space

    renderTasks();
}

button.addEventListener("click", addTask);

function renderTasks() {
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}
});
