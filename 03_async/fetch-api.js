console.log("Script loaded");

const butt = document.getElementById("loadBtn");
const lis = document.getElementById("BtaskList");

butt.addEventListener("click", async () => {
    lis.innerHTML = "";

    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await response.json();

    data.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.title + (todo.completed ? " ✅" : " ❌");
        list.appendChild(li);
    });
});


