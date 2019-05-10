function Person(name) {
  if(typeof new.target !== 'undefined') {
    this.name = name;
  } else {
    throw new Error('必须通过new关键字来调用')
  }
}
var person = new Person('alex');
var notAPerson = Person.call(person, "Lily");