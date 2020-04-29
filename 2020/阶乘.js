function mul(n) {
  // n的阶乘
  var num = 1;
  for (var i = 1; i <= n; i++) {
    num *= i;
  }
  return n * mul(n - 1);
}
var a = mul(5);
console.log('a: ', a);
