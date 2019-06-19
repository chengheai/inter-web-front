function deepCopy(obj) {
  if(typeof obj != 'object') {
    return obj;
  }
  let newObj = {};
  for(let attr in obj) {
    newObj[attr] = deepCopy(obj[attr])
  }
  return newObj;
}

let obj = {a: {b: 10}};
let obj2 = deepCopy(obj);
obj2.a.b = 20;
console.log('obj: ', obj); // 10
console.log('obj2: ', obj2); // 20
