// 返回 {} []  Math /\d/
// 引用类型值
function fun(name, age) {
  this.name = name;
  return 　{
    a: 1,
    b: 2
  };
  this.age = age;
}
// 基本类型值，就会被忽视；
var xiaoming = new fun('小明', 12);
console.log(xiaoming) // 返回函数自己写的return里的值
