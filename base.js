var obj ={
  name: 'alex',
  get: function(){
    console.log(this.name);
  }
}
obj.get();
var fn = obj.get;
var fn1 = new obj();
console.log(fn)
var aa = fn1.get;
aa();
