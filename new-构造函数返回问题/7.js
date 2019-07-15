function createPeople(name, age, sex) {
  var obj = {};
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  return obj;
}
// 不写new也可以的，名称为工厂模式

var xiaoming = createPeople('小明', 12, '男');
console.log(xiaoming) // { name: '小明', age: 12, sex: '男' }
console.log(xiaoming instanceof createPeople) // false