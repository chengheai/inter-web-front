function f1() {
  const n = 9;
  function f2() {
    console.log(n);
  }
  return f2;
}
f1();
var result = f1(); //f2函数
result(); // 执行

// 在f1外部读取它的内部变量