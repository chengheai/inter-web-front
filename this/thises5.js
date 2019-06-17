var color = 'red';
//let 声明的全局变量不具有全局属性，即不能用window.访问
const obj = {
  color: 'blue',
  getColors: function() {
    console.log(this.color);
  },
	getColor: () => {
    console.log(this.color);
	},
};
const sayColor = () => {
  console.log(this.color);
};
function sayColors() {
  console.log(this.color);
}
obj.getColors();
obj.getColor();
sayColor();
sayColors();
