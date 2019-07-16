let a = ['1','2','3'].map(parseInt);
console.log(a)
//  1, NaN, NaN ]

// 解析
var arr = ["1", "2", "3"].map(function(item){
　　 // 这个地方只传入一个参数
    return item;
});

console.log(arr);
// ["1", "2", "3"]

var arr = ["1", "2", "3"].map(function(item, index){
　　 // 这个地方传入两个参数
    return "value:" + item + ", index:" + index;
});
console.log(arr);
// ["value:1, index:0", "value:2, index:1", "value:3, index:2"]

 // 标准
arr.map(function(item, index, arr){
      .....     
});

// 转化
var arr = ["1","2","3"];
arr.map((value,index,array) => parseInt(value,index));
//parseInt(string,radix)