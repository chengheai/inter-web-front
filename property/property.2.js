function Action() {}
Action.prototype.canDo = function() {
	console.log('吃饭，睡觉');
};
// 继承
function Ben() {
	this.canDo = function() {
		console.log('2222');
	}
}
Ben.prototype = new Action();
var aa = new Ben();
// aa.canDo = function() {
// 	console.log('11111');  // 先从实例取值，然后在去原型取值 就近原型取值
// }
// 假设本函数没有的情况下

aa.canDo();  // 222

/**
 * 设置原型的话那就用 __proto__
 *  */