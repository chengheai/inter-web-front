function Person(name){
  if(this instanceof Person) {
    this.name = name;
  } else {
    throw new Error('必须通过new 关键字来调用Person')
  }
}

var person = new Person('alex');
console.log('person: ', person);
var notAPerson = Person.call(person, 'Lily'); // 有效
// console.log('notAPerson: ', notAPerson);
console.log(notAPerson.name)