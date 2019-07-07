function fun(){
  var a = 1; // 全局变量
  this.a = 2; // 全局添加属性
  function fn(){
    return this.a;
  }
  fn.a = 3;
  return fn;
}
var result = fun()(); // 函数直接调用，this window对象
console.log(result)