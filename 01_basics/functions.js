function square(n) {
    return n * n;
}
const isEven =  (n) => n % 2 === 0;

console.log(square(8));
console.log(isEven(6));
console.log(isEven(7));

console.log(5 == "5"); // '==' converts type (loose equality)
console.log(5 === "5"); // '===' does not convert types (strict equality)