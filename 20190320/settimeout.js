// for(var i = 0; i< 10; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000);
// }

// for(let i = 0; i < 10; i++){
//   setTimeout(function(){
//       console.log(i);
//   },100);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//       console.log(i);
//   }, 0);
// }
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
/**
 * setTimeout是异步执行的，1000毫秒后向任
 * 务队列里添加一个任务，只有主线上的全部执行
 * 完才会执行任务队列里的任务，所以当主
 * 线程for循环执行完之后 i 的值为3，这个时
 * 候再去任务队列中执行任务，i全部为3
 */
// for(var i = 0; i < 3; i++) {
//   setTimeout(((i) => {
//     return function() {
//       console.log(i)
//     }
//   })(i), 0);
// }
