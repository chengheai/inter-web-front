// let a = [1,2,3,4];
// b = a;
// console.log(b === a);
// a[0] = 2;
// console.log(a, b);


// let a = [1,2,3,4];
// b = a.slice();
// a[0] = 2;
// console.log(a, b);

//  拷贝不彻底
let a = [1,2,[3,4],5];
b = a.slice();
a[0] = 0;
a[2][0] = 1;
console.log(a, b);