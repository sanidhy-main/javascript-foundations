console.log("events.js loaded", button, list);
button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New Item";
    list.appendChild(li);
});

console.log("events.js loaded");
