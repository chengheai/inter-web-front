function Person() {

};
Person.prototype.name = 'alex';
Person.prototype.age = 22;
Person.prototype.action = function() {
  console.log(this.name);
};
var person1 = new Person();
person1.__proto__.name = 'ben';
person1.action();
var person2 = new Person();
var person3 = {};
console.log('person2: ', person2.name);
// 检测是否属于原型上
console.log(Person.prototype.isPrototypeOf(person1));   // true
console.log(Person.prototype.isPrototypeOf(person3));  // false