const add = (state, {payload}) => {
  return state.concat(payload);
}
// 转成es5
// 'use strict';
// var add = function add(state, _ref) {
//   var payload = _ref.payload;

//   return state.concat(payload);
// };
arr1 = [1,2];
arr2 = { payload: [3, 4] };
let a = add(arr1, arr2);
console.log('a: ', a);