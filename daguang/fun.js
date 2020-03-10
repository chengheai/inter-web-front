function sum() {
	var num = arguments[0];
	if (arguments.length == 1) {
		return function (sec) {
			console.log(num + sec);
		}
	} else {
		for (var i = 1; i < arguments.length; i++) {
			num += arguments[i];
		}
		console.log(num);
	}
}
sum(2, 3);            //5
sum(2)(3);           //5
