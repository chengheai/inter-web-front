// return this?
function Fun(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// 不用new调用，函数直接调用，this window
Fun('alex', 12, 'male');
console.log(age) // 12  window