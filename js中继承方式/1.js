// es5 构造函数继承
// 缺点：Child无法继承Parent的原型对象，并没有真正的实现继承（部分继承）
function Parent() {
  this.name = 'parent';
  this.colors = ['black', 'yellow', 'red']
}
function Child() {
  Parent.call(this);
  this.type = 'child';
}
var q1 = new Child();
console.log(q1.name); // parent
console.log(q1.colors); // [ 'black', 'yellow', 'red' ]
// console.log(Parent)
