// (function() {
//   console.log(b);
// 	let b = 2;
// })();

// var name = 'world';
// console.log(name);
// (function() {
//   console.log(name);
// 	if (typeof name == 'undefined') {
// 		var name = 'yang';
// 		console.log('Hello ' + name);
// 	} else {
// 		console.log('Hello ' + name);
// 	}
// })();

// var name = 'world';
// console.log(name);
// (function() {
// 	console.log(name);
// 	if (typeof name == 'undefined') {
// 		let name = 'yang';
// 		console.log('Hello ' + name);
// 	} else {
// 		console.log('Hello ' + name);
// 	}
// })();

var a = 1;
function b() {
  // var a = 2;
  console.log(a)
  a = function() {}
}
console.log(a)
b();
console.log(a);