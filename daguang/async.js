console.log(1);
setTimeout(() => {
	console.log(2);
});

var p = new Promise(function(resolve, reject) {
	//做一些异步操作
	console.log(3);
	resolve('4');
});
p.then(res =>{
  console.log(res);
});
console.log('5');
var q = new Promise(function(resolve, reject) {
  console.log('6');
  resolve('7');
});
q.then(res => {
  console.log(res);
})
