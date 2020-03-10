// es5 构造函数继承
function Parent() {
  this.name = 'parent';
  this.colors = ['black', 'yellow', 'red']
}
function Child() {
  Parent.call(this);
  this.type = 'child';
}
Parent.prototype.age = 12;
Parent.prototype.say = function () {
  console.log('hello');
}
var q1 = new Child();
console.log(q1);
// 原型上的不继承
console.log(q1.age); // undefined
console.log(q1.say()); // 报错
