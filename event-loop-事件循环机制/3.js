setTimeout(() => {
  console.log(1);
}, 0);
new Promise(function(resolve, reject){
  console.log(2);
  // for (var i = 0; i < 10000; i++) {
	// 	i == 9999 && resolve();
  // }
  setTimeout(() => {
    resolve();
  }, 1);
  console.log(3)
}).then(function(){
  console.log(4)
})
console.log(5)

// 2 3 5 1 4