// var arr = [];
// for(var i = 0; i<5; i++) {
//   arr.push(function(){
//     console.log(i)
//   })
// }
// arr[2]()

function fn(a, b =1) {
  console.log(a+ b)
}
fn(2,4)