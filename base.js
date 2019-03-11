var obj ={
  name: 'alex',
  get: function(){
    console.log(this.name);
  }
}
obj.get();
var fn = obj.get();
// fn();