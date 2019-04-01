var a = 1; //           函数f()内变量a的执行顺序
function f() {
	console.log(a);
	a = 2; //                    #2
	console.log(a);
	var a = 3; //等价于 var a ;       #1
	//      a = 3 ;       #3
	console.log(a);
}

f(); //undefined 2 和 3
console.log(a); //1
