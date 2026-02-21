const user = {
    name: "Sanidhy",
    age: 18,
    isStudent: true
};

const jsonString = JSON.stringify(user); //converts object to string (json)
console.log(jsonString);

const userObject = JSON.parse(jsonString); //converts json string to object
console.log(userObject);
