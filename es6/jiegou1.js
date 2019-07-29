const fun = (firstName, {lastName}) => {
  console.log(firstName + lastName)
}
let obj = {
  lastName: 'alex'
};
let firstName = 'cheng';
fun(firstName, obj)