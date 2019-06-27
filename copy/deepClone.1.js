// Deep Clone
obj1 = { a: 0, b: { c: 0 } };
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.a = 4;
obj1.b.c = 4;
console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
