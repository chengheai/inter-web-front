function P1(x){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000);
  })
}


var add = async function(x){
  let a = await P1(10);
  let b = await P1(20);
  return x + b + a;
}
add(10).then(res => {
  console.log('res:', res)
})