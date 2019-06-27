function ELoop() {
	// 当前任务
	let p = new Promise((resolve, reject) => {
		console.log('current Task');
		resolve();
	});
	let nextP;

	setTimeout(() => {
		console.log('MacroTask_1');
		nextP.then(() => {
			// 第一次执行时，这段代码并没有执行到。
			console.log('MicroTask_promise_1'); //第一个MicroTask
		});
		console.log('MacroTask_1 end');
	}, 0); // 第一个 MacroTask

	setTimeout(() => {
		console.log('MacroTask_2');
		console.log('MacroTask_2 end');
	}, 0); // 第二个MacroTask

	nextP = p
		.then(() => {
			console.log('MicroTask_promise_2'); //第一个MicroTask
			console.log(1);
		})
		.then(() => {
			console.log('MicroTask_promise_3'); // 第二个MicroTask
			console.log(1);
		});

	console.log('current Task end');
}

ELoop();



/**输出结果：
current Task
MicroTask_promise_2
MicroTask_promise_3
MacroTask_1
MicroTask_promise_1
MacroTask_2
**/