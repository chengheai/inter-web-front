// 将一个对象作为call和apply的第一个参数，this会被绑定到这个对象。
var obj = { a: 'Custom' };

// 这个属性是在global对象定义的。
var a = 'Global';

function whatsThis(arg) {
	return this.a; // this的值取决于函数的调用方式
}

whatsThis(); // 'Global'
whatsThis.call(obj); // 'Custom'
whatsThis.apply(obj); // 'Custom'


function f(){
  return this.a;
}
// TODO: bind只生效一次！
var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind只生效一次！
console.log(h()); // azerty

var o = {a:37, f:f, g:g, h:h};
console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty