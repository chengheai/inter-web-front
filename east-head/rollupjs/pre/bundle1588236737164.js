(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : ((global = global || self), factory((global.prefaceCfg = {})));
})(this, function (exports) {
  'use strict';

  const square = (x) => x * x;
  const mi = (x) => x * x * x;

  exports.mi = mi;
  exports.square = square;

  Object.defineProperty(exports, '__esModule', { value: true });
});
