// es6的继承
class Parent {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log('parent has say method. ' + this.name);
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log('chid can fly...');
  }
}
var p = new Child('tom');
p.say();
p.fly();
