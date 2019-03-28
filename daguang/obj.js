var a = 1;
var obj ={
  b: function(){
    var a = 2;
    return this.a;
  },
  c: ()=> {
    var a = 3;
    return this.a;
  }
}
d : {
  var a = 4;
  return this.a;
};
console.log(obj.b());
console.log(obj.c());
console.log(d)