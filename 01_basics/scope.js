//Global Scope
let a = 1;

//Function Scope
function outer() {
    let b = 2;

    //Inside scope
    if (true) {
        let c = 3;
        console.log(a, b, c); //Works
    }

    console.log(a, b); //Works
    //console.log(c); does not work here (outside the 'if' statement)
}

console.log(a); //Works, as 'a' is a global variable

outer(); //Works, as all variables are in scope inside the function when being logged

// console.log(b); does not work here (outside the function)
// console.log(c); does not work here (outside the function)

//Note: The inner scope always overshadows any outer scope



