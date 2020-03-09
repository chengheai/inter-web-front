// for (var i = 0; i < 3; i++) {
//   console.log(i)
// }
setTimeout(() => {
  console.log(9)
}, 1000);
setTimeout(() => {
  for (var i = 0; i < 3; i++) {
    console.log(i)
  }
}, 1000);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000);
// }
