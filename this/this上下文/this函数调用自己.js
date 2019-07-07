// function f(){
//   console.log(this.a)
// };
// f.a = 100;
// f.call(f);

function f(){
  console.log(arguments.callee.a)
}
f.a = 100;
f();