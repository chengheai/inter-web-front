/**
 * 宏任务与微任务:
异步任务分为 宏任务（macrotask） 与 微任务 (microtask)，不同的API注册的任务会依次进入自身对应的队列中，然后等待 Event Loop 将它们依次压入执行栈中执行。

宏任务(macrotask)：：

script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)

微任务(microtask)：

Promise、 MutaionObserver、process.nextTick(Node.js环境）
 * 
 * 
 * */
