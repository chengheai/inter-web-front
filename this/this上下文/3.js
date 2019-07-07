var arr = [fn1,fn2];
function fn1(){
  // 枚举
  return this.length; // this是数组
}
function fn2(){
  return this[0];
}
var a = arr[0]();
var b = arr[1]()(); // window调用
console.log('a: ', a);
console.log('b: ', b);

 // 在浏览器中与在弄的环境中运行结果都不一样
//  node: 
//  a: 2;
//  b: undefined;
