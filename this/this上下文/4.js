var a = 1;
var obj = {
  a: 2,
  fn: (function(){
    this.a = 3; // 全局变量
    return function(){
      return this.a;
    }
  })()
}
 //  自运行函数是先执行的；比如
//  var o ={
//    a: 1+1  // 先执行 1 + 1；
//  }
//  console.log(a.a)// 
var fn = obj.fn;
var result1 = obj.fn();
var result2 = fn();
console.log('result1: ', result1);
console.log('result2: ', result2);
