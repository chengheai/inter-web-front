var color1 = ['red', 'yellow'];
var color2 = color1;
for(var i = 0; i <color1.length; i++){
  color2[i] = color1[i];
};
console.log(color2);  // [ 'red', 'yellow' ]
color1.push('black');
console.log(color2);  // [ 'red', 'yellow' ]