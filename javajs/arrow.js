let obj = {
  a: 1,
  fn: function () {
    console.log('fun:', this);
  },
  c: () => {
    console.log('arrow:', this); // window
  }
}
const aa = obj.fn();
const bb = obj.c();
console.log('aa: ', aa);
console.log('bb: ', bb);
