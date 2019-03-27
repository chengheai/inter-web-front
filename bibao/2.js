'use strict'; // 严格模式
function aa() {
  var x = 's1';
  function son() {
    var x= 's2';
    return x;
  };
  return son;
};
aa();  // 返回的是函数