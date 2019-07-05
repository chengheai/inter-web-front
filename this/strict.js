function f2() {
	'use strict'; // 这里是严格模式
	return this;
}

f2() === undefined; // true
