function* gen() {
	yield 10;
	y = yield 'foo';
	yield y;
}

var gen_obj = gen();
console.log(gen_obj.next()); // 执行 yield 10，返回 10
console.log(gen_obj.next()); // 执行 yield 'foo'，返回 'foo'
console.log(gen_obj.next(10)); // 将 10 赋给上一条 yield 'foo' 的左值，即执行 y=10，返回 10
console.log(gen_obj.next()); // 执行完毕，value 为 undefined，done 为 true
