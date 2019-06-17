var a;
var obj = {
	a: 10,
	b: () => console.log(this.a, this),
	c: function() {
		console.log(this.a, this);
	},
};
function d() {
  console.log(a);
}
obj.b();
obj.c();
d();
