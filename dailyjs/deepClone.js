function deepClone(obj) {
  if(typeof obj != 'object') {
    return obj;
  }
  let newObj = {};
  for(let attr in obj) {
    newObj[attr] = deepClone(obj[attr]);
  }
  return newObj;
}
let obj = {a: {b: 10}};
let obj2 = deepClone(obj);
obj2.a.b = 20;
console.log('OBJ', obj)
console.log('OBJ2', obj2)
