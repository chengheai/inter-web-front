// var a = 1;
// var obj ={
//   b: function(){
//     var a = 2;
//     return this.a;
//   },
//   c: ()=> {
//     var a = 3;
//     return this.a;
//   }
// }
// d : {
//   var a = 4;
//   return this.a;
// };
// console.log(obj.b());
// console.log(obj.c());
// console.log(d)

// var a = {
//   b: 1,
//   f:function(){
//     var b = 2;
//     console.log(this.b) // 1
//   }
// }
// a.f()
// var a = {
// 	b: 1,
// 	f: function() {
// 		var b = 2;
// 		console.log(b);  // 2
// 	},
// };
// a.f();

var a = {
	b: 1,
	f: function() {
		console.log(this); // 这个a对象
	},
};
a.f();