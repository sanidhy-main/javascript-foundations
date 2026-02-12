function fetchData() {
    return new Promise((resolve) => { //creates a promise
        setTimeout(() => {
            resolve("Data fetched"); //resolve output
        }, 2000);
    });
}

async function main() {  //async function
    try {
    const data = await fetchData(); //pauses until the promise is resolved
    console.log(data);
} catch (error) {
    console.log(error);
    }
}

main();
