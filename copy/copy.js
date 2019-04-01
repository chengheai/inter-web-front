 // 深拷贝
 function deepCopy(obj) {
  if(typeof obj != 'object'){
    return obj;
  }
  let newObj = {};
  for(let attr in obj){
    newObj[attr] = deepCopy(obj[attr])
  }
  return newObj
 }

 let obj2 = deepCopy(obj);
  obj2.a.b = 20;
 console.log(obj.a.b);  // 10 未改