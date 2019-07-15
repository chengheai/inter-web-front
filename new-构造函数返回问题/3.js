function People(name, age){
  this.name = name;
  this.age = age;
}
var obj = People('小米', 12);
console.log(obj == null) // true
console.log(obj.age) // 报错 
// 没有用new调用 不是构造函数，没有返回值
