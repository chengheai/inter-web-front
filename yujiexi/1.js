var a = 1;
function f() {
  console.log(a);
  var a = 3;
  console.log(a);
}

f();        //undefined 和 3