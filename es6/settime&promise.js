setTimeout(() => {
  console.log(1);
}, 0);
console.log(2);
new Promise(function(resolve, reject){
  console.log(3);
  resolve();
}).then(function(){
  console.log(4);
})

// 2 3 4 1