console.log("events.js loaded", button, list);

let num = 1;
button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Item #" +  num;
    list.appendChild(li);
    num++;
});

console.log("events.js loaded");
