// for(var i = 0; i< 3; i++) {
//   setTimeout(() => {
//     console.log(i) // 3 3 3
//   }, 0);
//   // console.log(i) // 0 1 2
// }

// setTimeout(() => {
//   console.log(1);
// }, 0);
// console.log(2);

// for(var i = 0; i < 3; i++) {}
// console.log(i)

for(var i = 0; i< 3; i++) {
  setTimeout(((i) => {
    return function() {
      console.log(i);
    };
  })(i), 0);
}