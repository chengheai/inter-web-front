'use strict';

// 闭包：
function checkScope() {
  var scope = 'son';
  return function sonScope() {
    var scope = 'son1';
    return scope;
  }
};
checkScope(); // 返回的是函数体
checkScope()();  // 返回的是 son1