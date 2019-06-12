// for(var i=0; i<5; i++) {
//   setTimeout(() => {
//     console.log(i) //// 55555
//   }, i* 10000);
// }

// for(let i=0; i<5; i++) {
//   setTimeout(() => {
//     console.log(i) //// 0 1 2 3 4
//   }, i* 10000);
// }

for (var i = 0; i < 5; i++) {
	setTimeout(((i) => {
    return function() {
      console.log(i); // 0 1 2 3 4
    }
	})(i), i * 10000);
}