function Action() {}
Action.prototype.canDo = function() {
	console.log('吃饭，睡觉');
};
// 继承
function Ben() {}
Ben.prototype = new Action();
var aa = new Ben();
aa.canDo();
