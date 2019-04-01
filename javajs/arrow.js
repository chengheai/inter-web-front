let obj = {
  a: 1,
  fn: function(){
    console.log(this);
  },
  c:()=> {
    console.log(this);
  }
}
const aa = obj.fn();
const bb = obj.c();
console.log('aa: ', aa);
console.log('bb: ', bb);