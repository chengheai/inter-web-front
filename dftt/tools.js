// 1.随机ID生成
const a = Math.random().toString(36).substring(2);
// console.log(a)
// ----------------------------
// 72pklaoe38u

// 2.生成范围内的随机数
max = 20
min = 10
var a = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(a)
// -------------------------
// 1

// 3.随机排列数组(洗牌)
var arr = ["A", "B", "C","D","E"];
console.log(arr.slice().sort(() =>Math.random() - 0.5))
// ------------------------------
[ 'C', 'B', 'A', 'D', 'E' ]

// 4.获取随机布尔值
const randomBoolean = () =>Math.random() >= 0.5;
console.log(randomBoolean());
// ---------------------------------------
false
// 6.反转字符串
const reverse = str => str.split('').reverse().join('');
console.log(reverse('javascript'));
// ---------------
// -------------------------
tpircsavaj

// 14.将字符串转换为数字
toNumber = str => +str;
toNumber = str =>Number(str);
result = toNumber("2");
console.log(result)
console.log(typeof(result))
// ----------------------------------
2
number
// 克隆数组
oldArray = [1,4,2,3]
var newArray = oldArray.slice(0);
console.log(newArray)
// ------------------------------------
[1,4,2,3]