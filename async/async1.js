(async function(x) {
	// async function expression used as an IIFE
	var p_a = resolveAfter2Seconds(20);
	var p_b = resolveAfter2Seconds(30);
	return x + (await p_a) + (await p_b);
})(10).then(v => {
	console.log(v); // 2 秒后打印 60
});
