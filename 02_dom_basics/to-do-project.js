//Declaring the list, input, title and submit button
const list = document.getElementById("taskList");
const input = document.getElementById("taskInput");
const button = document.getElementById("Btn");
const title = document.getElementById("title");

title.style.color = "blue";

//Giving functionality to the button
button.addEventListener("click", () => {
    //Setting task = inputted text
    const text = input.value.trim();
    if (text === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = text;
    task.style.cursor = "pointer";

    //Adding an event on clicking a task
    task.addEventListener("click", () => {
        if (task.classList.contains("completed")) {
            list.removeChild(task);
        } else {
            task.classList.add("completed");
            task.style.textDecoration = "line-through";
        }
    }
    );

    list.appendChild(task);
    input.value = "";
}
);