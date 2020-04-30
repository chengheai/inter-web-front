function fn1() {
  console.log('fn1');
}
function fn2() {
  console.log('fn2');
}
function init() {
  fn1(() => {
    try {
      fn2();
    } catch (error) {
      console.log(error);
    }
  });
}
init();
