function copy(obj) {
  let newObj = {};
  for(let attr in obj) {
    newObj[attr] = obj[attr]
  }
  return newObj;
}

let obj = {a:{b:10}};
let obj2 = copy(obj);
obj2.a.b = 20;
console.log('obj: ', obj); // 20
console.log('obj2: ', obj2);  // 20