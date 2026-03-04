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
        text: text, //adds task to list
        completed: false //adds completion status to each task
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

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", () => {
            toggleTask(task.id);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation(); //To avoid triggering the 'li' click
            deleteTask(task.id);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }

    function toggleTask(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        });

        renderTasks();
    }
});
