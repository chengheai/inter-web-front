var a, b;
(function () {
  console.log(a);          //undefined
  console.log(b);          //undefined
  var a = b = 3;             //等价于 var a = 3 ; b = 3; b是全局的
  console.log(a);          //3
  console.log(b);          //3
})();
console.log(a);              //undefined
console.log(b);              //3