var r = new Promise(function(resolve, reject){
    console.log('a')
    resolve()
});
r.then(() => console.log('c'));
console.log('b')