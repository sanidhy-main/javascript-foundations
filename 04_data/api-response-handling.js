async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response failed");
        }

        const data = await response.json();
        console.log("Users: ", data);

    } catch (error) {
        console.log("Error: ", error.message);
    }
}

loadUsers();