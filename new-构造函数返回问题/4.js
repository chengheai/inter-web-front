function fun(name, age) {
  this.name = name;
  this.age = age;
  return 3;
}
var xiaoming = new fun('小明', 12);
console.log(xiaoming) // 忽略return 3；
