// function test(fruit) {
//   if(fruit == 'apple' || fruit == 'strawberry') {
//     console.log('red');
//   }
// };

function test(fruit) {
  const resFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  if (resFruits.includes(fruit)) {
    console.log('red');
  }
}
test('apple');// red
// test('a') //
