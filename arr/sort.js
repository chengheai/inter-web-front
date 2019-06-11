var arr = [1,2,'3',4];
var arr = ['one','two','three','d'];  // [ 'a', 'b', 'c', 'd' ]
var arr = ['one','two','three','d'];  // [ 'd', 'one', 'three', 'two' ]

var b = arr.sort();
console.log(b)

// 排序是按照字符串UniCode码的顺序

// sort()  方法用于对数组的元素进行排序，并返回数组。默认排序顺序是根据字符串UniCode码。因为排序是按照字符串UniCode码的顺序进行排序的，所以首先应该把数组元素都转化成字符串（如有必要），以便进行比较。

// 语法：arrayObject.sort(sortby);

// 参数sortby  可选，用来规定排序的顺序，但必须是函数。