var test2 =function () {
  console.log(this);
  return function () {
      console.log(this)
  }
};
var bb={
  a:'1',
  cc:test2 //赋值类型还未执行
};
bb.cc()(); // 1.obj  2.window