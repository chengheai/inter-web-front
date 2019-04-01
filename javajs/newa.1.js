const sayThis = ()=> {
  console.log(this);
}
var foo = {
  name: 'alex',
  age: 10
}
sayThis(); // window
foo.sayThis = sayThis; // 将foo.sayThis指向 sayThis函数
foo.sayThis(); // window
/**
 * 
 * 
 * sayThis函数是在全局作用域下定义,内部this不确定.
 * 当在全局作用域下调用了sayThis函数,这时,this就指向了全局对象window.
 * 当对象foo的sayThis属性引用sayThis并调用它,这时,this就指向了foo了.在实际开发中
 * 我们经常会遇到这样的场景,以JQuery的$ajax()为例,在ajax请求成功回调函数里获取后端http响
 * 应,根据响应数据改变某个变量或者属性,通常的做法是在ajax方法外面将this赋值给一个变量,然后在ajax回调
 * 函数里将响应赋给这个变量,之所以这么做是因为$ajax成功回调函数里的this关键字并不是调用$ajax()所在的环境对
 * 象.然而,在es6箭头函数中的this和普通函数中的this是不一样的.学习es6语法,推荐阅读阮一峰的《ECMAScript 6 入门》
 * ,在这本书中,作者是这样解读箭头函数中的this:函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。在普通函数中
 * this指向不是固定的,而在箭头函数中,this指向是固定不变的.我们将上图的例子稍作修改:

 */