var json = {
  'a': [{ 'b': 'c' }, 'd'],
  'x': 1
}

console.log(fn(json, 'a[0].b') == 'c')
console.log(fn(json, 'a[1]') == 'd')
console.log(fn(json, 'a[1]') == 'd')

function fn(obj, path, idx = 0) {
  while (path[idx] == '[' || path[idx] == ']' || path[idx] == '.') {
    idx++;
  }
  let o = obj[path[idx]];
  if (idx >= path.length - 1) {
    if (path[idx - 1] === ']') {
      return obj
    }
    return o
  };
  return fn(o, path, ++idx)
}
