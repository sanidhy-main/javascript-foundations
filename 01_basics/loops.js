//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//for of loop
const arr = ['a', 'b', 'c'];

for (const i of arr) {
    console.log(i);
}

//for in loop
const obj = {a : 1, b : 2};

for (const key in obj) {
    console.log(key, obj[key]);
}

//break and continue
for (let i = 1; i <= 10; i++) {
    if (i === 8) {
        break;
    }

    if (i % 2 !== 0) {
        continue;
    }

        console.log(i);
}