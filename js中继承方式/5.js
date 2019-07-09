// es5 组合继承
// 所谓的组合是指组合借用构造函数和原型链继承两种方式
// 缺点： 父类的构造函数被执行了两次，第一次是Child2.prototype = new Parent2()，第二次是在实例化的时候
function Parent() {
  this.name = 'parent';
  this.colors = ['black', 'yellow', 'red']
}
function Child() {
  Parent.call(this);
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
console.log(q2.colors) // [ 'black', 'yellow', 'red', ]
