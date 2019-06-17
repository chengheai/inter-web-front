// // 对象方法
// var obj = {
//   name: 'hello world'
// };
// function fn() {
//   console.log(this); // { name: 'hello world', newFn: [Function: fn] }
// }
// obj.newFn = fn;
// obj.newFn();

// 构造方法
function fn1() {
  this.name = 'test';
  this.age = 18;
  console.log(this);
}
var h = new fn1(); //=>hello {name: "test", age: 18}
console.log(h); //=> hello {name: "test", age: 18}
var w = fn1(); //=> 输出window对象