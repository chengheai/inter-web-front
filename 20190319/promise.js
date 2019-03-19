// function runAsync() {
//   var p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       console.log('执行完成');
//       resolve('随便什么数据');
//     }, 1000);
//   })
//   return p
// }
// runAsync();
// runAsync()
//   .then(res => {
//     console.log('res: ', res);
//   })

// 普通函数传参数调用
// function runAsync1(callback) {
//   setTimeout(() => {
//     console.log('执行完成');
//     callback('随便什么函数');
//   }, 1000);
// }
// runAsync1(function(data){
//   console.log('data: ', data);
// })

function runAsync1() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 1000);
  });
  return p;
}
function runAsync2() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务2执行完成');
      resolve('随便什么数据2');
    }, 2000);
  });
  return p;
}
function runAsync3() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务3执行完成');
      resolve('随便什么数据3');
    }, 2000);
  });
  return p;
}

runAsync1()
  .then(function (data) {
    console.log(data);
    return runAsync2();
  })
  .then(function (data) {
    console.log(data);
    return '直接返回数据';  //这里直接返回数据
  })
  .then(function (data) {
    console.log(data);
  });

function getNumber() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
      if (num <= 5) {
        resolve(num);
      }
      else {
        reject('数字太大了');
      }
    }, 2000);
  });
  return p;
}

// getNumber()
//   .then(
//     function (data) {
//       console.log('resolved');
//       console.log(data);
//     },
//     function (reason, data) {
//       console.log('rejected');
//       console.log(reason);
//     }
//   );

// then catch 写法
// getNumber()
//   .then(function (data) {
//     console.log('resolved');
//     console.log(data);
//   })
//   .catch(function (reason) {
//     console.log('rejected');
//     console.log(reason);
//   });

// 具有try catch功能
getNumber()
  .then(function (data) {
    console.log('resolved');
    console.log(data);
    console.log(somedata); //此处的somedata未定义
  })
  .catch(function (reason) {
    console.log('rejected');
    console.log(reason);
  });