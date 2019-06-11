function Person() {
  this.name = 'alex'
}
Person.prototype.sayName = function() {
  console.log(this.name);
}

var person = new Person();
person.sayName();