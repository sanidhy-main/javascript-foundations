const users = [{id:1, name:'A', completed:false},
    {id:2, name:'B', completed:true}
];

const names = users.map(use => {
    return use.name;
});
console.log(names);

const complete = users.filter(use => {
    return use.completed;
});
console.log(complete);

const three = users.find(n => {
    return n.id === 3;
})
console.log(three);

const incomplete = users.some(use => {
    return use.completed === false;
})
console.log(incomplete);