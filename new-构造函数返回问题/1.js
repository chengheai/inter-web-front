// return this?
// 一个类
function Fun(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// 实例
var obj = new Fun('alex', 12, 'male');
console.log(obj);