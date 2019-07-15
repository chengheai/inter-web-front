function fun(name, age) {
  this.name = name;
  return 3;
  this.age = age;
}
// 基本类型值，就会被忽视； 
// NaN undefined '' true, false
var xiaoming = new fun('小明', 12);
console.log(xiaoming) // 打断程序执行，age将不会执行
