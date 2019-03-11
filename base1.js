fn(3); // 2
function fn(a){
  console.log(a)
}

f(); // 声明式函数 // 2
function f(){
  console.log(2);
}
f1();  /// 赋值式函数  err
var f1 = function() {
  console.log(2)
};
