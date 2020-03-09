function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    }
  }
}

var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); c.fun(2); c.fun(3);

/**
 * 转换成
 */
// function _fun_(n, o) {
//   console.log(o);
//   return {
//     fun: function (m) {
//       return _fun_(m, n);
//     }
//   }
// }
// var a=_fun_(0);//undefined
// a.fun(1);//0
// a.fun(2);//0
// a.fun(3);//0

// var b=_fun_(0).fun(1).fun(2).fun(3);
// //undefined,0,1,2

// var c=_fun_(0).fun(1);//undefined,0,
// c.fun(2);//1
// c.fun(3); //1
