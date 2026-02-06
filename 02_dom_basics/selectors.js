const users = [{id: 1, name: "A", completed: false},
    {id: 2, name: "B", completed: true}];

const button = document.getElementById("btn");
const list = document.getElementById("list");

const incompleteUsers = users.filter(user => !user.completed);
const completeUsers = users.filter(us => us.completed);
incompleteUsers.forEach(user => {
    const li = document.createElement("li");
    li.textContent = "Name: " + user.name + " - Incomplete!";
    list.appendChild(li);
});

completeUsers.forEach(us => {
    const li = document.createElement("li");
    li.textContent = "Name: " + us.name + " - Complete!";
    list.appendChild(li);
});

console.log("selectors.js loaded", button, list);

//Syntax
    //const element = document.getElementsById(id);
    //id.textContent = "";

    //const name = document.createElement("name");
    //name.textContent = "";

    //id.style.color/fontSize/fontWeight

    //id.appendChild(name);
