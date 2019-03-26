setTimeout(() => {
  console.log(1);
}, 0);
console.log(2)
/**
 * 
 * 正确的理解setTimeout的方式(注册事件)： 有两个参数，第一个参数是函数，第二参数是时间值。 调用setTimeout时，把函数参数，放到事件队列中。等主程序运行完，再调用。
 */