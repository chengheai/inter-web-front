// es5 原型链继承
// 缺点 被new出来的实例不能隔离

function Parent() {
  this.name = 'parent';
  this.colors = ['black', 'yellow', 'red']
}
function Child() {
  this.type = 'child';
}
Parent.prototype.age = 12;
Parent.prototype.say = function(){
  console.log('hello');
}
Child.prototype = new Parent();
var q1 = new Child();
var q2 = new Child();
q1.colors.push('pink');
console.log(q1.colors) // [ 'black', 'yellow', 'red', 'pink' ]
console.log(q2.colors) // [ 'black', 'yellow', 'red', 'pink' ]
