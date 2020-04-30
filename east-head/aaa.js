function fn1(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 > 4) {
        resolve('success');
        console.log('fn1');
        cb && cb();
      } else {
        reject('fail');
      }
    }, 1000);
  });
}
function fn2() {
  console.log('fn2');
}
fn1(() => {
  fn2();
});
