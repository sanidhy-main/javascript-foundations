function fetchData() {
    return new Promise((resolve, reject) => { //creates a 'promise'
        setTimeout(() => {
            resolve("Data fetched"); //if the promise is resolved.
        }, 1000);
    });
}

fetchData().then(data => console.log(data)) //when the promise succeeds
fetchData().catch(err => console.log(err)) //when the promise fails