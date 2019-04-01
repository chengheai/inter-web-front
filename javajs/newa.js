function sayThis() {
  console.log(this);
}
var foo = {
  name: 'alex',
  age: 10
}
sayThis(); // window
foo.sayThis = sayThis; // 将foo.sayThis指向 sayThis函数
foo.sayThis(); // foo