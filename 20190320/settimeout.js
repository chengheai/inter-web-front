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

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
      console.log(i);
  }, 0);
}
for(var i = 0; i < 3; i++) {
  setTimeout(((i) => {
    return function() {
      console.log(i)
    }
  })(i), 0);
}