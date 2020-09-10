function axios(params) {
  return new Promise((resolve, reject) => {
    let count = 0;
    setTimeout(() => {
      resolve(`参数${params}回调成功`);
      count++;
      // if (params < 8) {
      // } else {
      //   reject('大于9了');
      // }
      console.log(`执行次数${count}`);
    }, Math.random() * 1000);
  });
}
let arr = Array.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(arr);
function asyncMain() {
  Promise.all(arr.map((p) => axios(p)))
    .then((results) => {
      console.log('results: ', results);
    })
    .catch((err) => {
      console.log('err:', err);
    });
}
asyncMain();
