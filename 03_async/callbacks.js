function fetchData(callback) { //'callback' is a function
    setTimeout(() => { //setTimeout(func, timeout)
        console.log("Data Fetched");
        callback();
    },
        10000); //sets timeout BEFORE executing 'func'
}

fetchData(() => {
    console.log("Callback executed"); //callback function definition
});