var Person = {
  name: 'alex',
  sayName: function(){
    console.log(this.name);
  }
}
var person = Object.create(Person);
person.sayName();