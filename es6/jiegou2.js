
const fun = (firstName, {todo: todo2}) => {
  console.log(obj1)
  console.log(firstName + todo2)
}
let obj1 = {
  todo: '123',
  test: '456',
  todo1: {test: '789'}
};
const {todo1: {test}}  = obj1
console.log('test:', test)  
fun(firstName, obj1)