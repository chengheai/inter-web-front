var json = { a: 1, b: 2 }
var arr = [1, 2, 3, 4]
console.log(typeof JSON.stringify(json))
console.log(typeof JSON.parse(JSON.stringify(json)))
