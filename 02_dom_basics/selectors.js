const users = [{id: 1, name: "A", completed: false},
    {id: 2, name: "B", completed: true}];

const list = document.getElementById("list");
const li = document.createElement("li");

list.innerHTML = "";

const incompleteUsers = users.filter(user => !user.completed);
incompleteUsers.forEach(user => {
    const li = document.createElement("li");
    li.textContent = "Name: " + user.name + " - Incomplete!";
    list.appendChild(li);
});

//Syntax
    //const element = document.getElementsById(id);
    //id.textContent = "";

    //const name = document.createElement("name");
    //name.textContent = "";

    //id.style.color/fontSize/fontWeight

    //id.appendChild(name);
