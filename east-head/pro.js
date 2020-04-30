// class Person {
//   constructor(props) {
//     super(props);
//     this.name = props;
//     this.sum = function () {
//       console.log(this.name);
//     };
//   }
// }
function Person(name) {
  this.name = name;
  this.sum = function () {
    console.log(this.name);
  };
}
Person.prototype.age = 10;
function me() {
  this.name = 'alex';
}
me.prototype = new Person();
var y = new me();
console.log(y.name);
console.log(y.age);
console.log(y instanceof me);

// 修改
y.age = 20;
var z = new Person();
console.log(z.age);
