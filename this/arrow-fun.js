var C = function() {
	this.name = 'test';
	this.greet = () => {
		console.log('Hello,I am ' + this.name + '!');
	};
	this.oldGreet = function() {
		console.log('Hello,I am ' + this.name + '!');
	};
};
var obj = new C();
obj.greet(); //=>Hello,I am test!
setTimeout(obj.greet, 1000); //=>输出 Hello,I am test!
