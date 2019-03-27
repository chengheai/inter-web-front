'use strict'; // 严格模式
var x = 's';
function aa(){
  var x = 's1';
  console.log(x);
}
aa() //s1
console.log(x); // s
console.log(aa())  // undefined ??