async function f1() {
  console.log(1)
  return '1212' // 下一个then去拿
}
f1()
  .then(res => {
    console.log(res)
    return '下一个回调接收';
  })
  .then(res => {
    console.log('res: ', res);
  })
  .catch(err => {
    console.log('err: ', err);
  })
