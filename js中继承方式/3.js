// es5 原型链继承
function Parent() {
  this.name = 'parent';
  this.colors = ['black', 'yellow', 'red']
}
function Child() {
  this.type = 'child';
}
Parent.prototype.age = 12;
Parent.prototype.say = function () {
  console.log('hello');
}
Child.prototype = new Parent();
var q1 = new Child();
console.log(q1);
console.log(q1.age); // 12
console.log(q1.say()); // hello

/**
 *
 * Child {type: "child"}
    type: "child"
    __proto__: Parent
    colors: (3) ["black", "yellow", "red"]
    name: "parent"
    __proto__:
    age: 12
    say: ƒ ()
    constructor: ƒ Parent()
    __proto__: Object
 */
