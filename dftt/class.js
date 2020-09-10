class Animal{
  constructor(){
    this.name = 'alex'
  }
  init(){
    this.fn1()
    this.fn2()
  }
  fn1(ball){
    ball = 1;
    console.log(this.name + ball)
  }
  fn2(){
    let name = 'fn2 alex'
    console.log(this.name)
    console.log(name)

  }
}
const instance = new Animal();
instance.init()