// 原
function Person() {
}
// fun
function say(){
  console.log('我说话了');
}

var s = new Person();
say.call(s);
say.apply(s);