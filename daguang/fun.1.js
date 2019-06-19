function foo(a, b) {
	var sum = 0;
	console.log(arguments);//伪数组或者类数组对象
	//arguments[0]取到第一个实参值，arguments[arguments.length-1]取到最后一个实参值
	//console.log(arguments[0],arguments[1])
	//var sum = arguments[0]+arguments[1]+arguments[2]+arguments[3];

	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	// document.write(sum);
	console.log(sum);
	console.log('arguments:', arguments) // 实参
	console.log('foo.length:', foo.length); // 形参
}

foo(1, 2, 3, 4, 5, 55);