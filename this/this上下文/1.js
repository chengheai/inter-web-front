var o = {
  fn: function(){
    var a = 1;
    console.log(this.a);
  }
}
o.a = 2; // 赋值
o.fn.a = 3; // fn添加属性
o.fn(); // 对象打点调用，this是函数对象o里面
// console.log(o);

