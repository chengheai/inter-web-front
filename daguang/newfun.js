function Foo() {
	getName = function() {
		console.log(1);
	};
	return this;
}
var getName; //只提升变量声明
function getName() {
	console.log(5);
} //提升函数声明，覆盖var的声明

Foo.getName = function() {
	console.log(2);
};
Foo.prototype.getName = function() {
	console.log(3);
};
getName = function() {
	console.log(4);
}; //最终的赋值再次覆盖function getName声明

getName(); //最终输出4
