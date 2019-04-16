obj = { a: 1, b: 2, c: 3 };
delete obj.a;
console.log(obj); //Object {b: 2, c: 3}

var obj1 = (obj = { a: 1, b: 2, c: 3 });
delete obj1.a;
console.log(obj1); //Object1 {b: 2, c: 3}

name = 'lily';
delete name;
console.log(name); //lily

varname = 'lily';
deletename;
console.log(name); //lily

function fun() {
	this.name = 'mm';
}
var obj = new fun();
fun.prototype.age = 18;
delete obj.age;
console.log(obj.age); //18

// 总结：delete用来删除js对象的属性，不能删除任何变量（全局、局部、原型链中的变量）。
