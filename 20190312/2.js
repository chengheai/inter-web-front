function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.say = function() {
	console.log(this.name + '说话了');
};
var per = new Person('小明', 20);
per.say();
//再定义一个student类,欲意继承Person
function Student(grade) {
	this.grade = grade;
}
//将student的prototype设为Person对象
Student.prototype = new Person('小红', 22);
//为Student添加方法
Student.prototype.intro = function() {
	console.log(this.name + '是' + this.grade + '年级学生');
};
var stu = new Student(3);
stu.name = '小刚';
console.log(stu instanceof Person && stu instanceof Student); //true
stu.say(); //小刚说话了
stu.intro(); //小刚是3年级学生
