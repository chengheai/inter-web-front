const deepClone = obj => {
  let _obj = JSON.stringify(obj);
  objClone = JSON.parse(_obj);
  return objClone;
}

let a = [0, 1, [2, 3], 4],
  b = deepClone(a);
a[0] = 1; // 修改原数值
a[2][0] = 1; // 修改原数值
console.log(a, b);