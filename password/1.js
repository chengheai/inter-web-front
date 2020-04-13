var obj = {

}
const { b = 0 } = obj && obj.a
console.log(b)
