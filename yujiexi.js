var a = 1;
function f() {
  console.log(a); // undefined
  var a = 3;
  console.log(a); // 3
}
f();