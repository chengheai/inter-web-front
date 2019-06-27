// MacroTask（Task）
// setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering

// MicroTask（在ES2015规范中称为Job）
// process.nextTick, Promise, Object.observe, MutationObserver

// 规范：

// 1.每个浏览器环境，至多有一个event loop。
// 2.一个event loop可以有1个或多个task queue，而仅有一个 MicroTask Queue。
// 3.一个task queue是一列有序的task, 每个task定义时都有一个task source，从同一个task source来的task必须放到同一个task queue，从不同源来的则被添加到不同队列。
// 4.tasks are scheduled，所以浏览器可以从内部到JS/DOM，保证动作按序发生。
// 5.Microtasks are scheduled，Microtask queue 在当前 task queue 的结尾执行。microtask中添加的microtask也被添加到Microtask queue的末尾并处理。
// 注： event loop的每个turn，是由浏览器决定先执行哪个task queue。这允许浏览器为不同的task source设置不同的优先级，比如为用户交互设置更高优先级来使用户感觉流畅。