// console.log(document)

/**
 * 
 * 如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的
 * 事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 event.stopImmediatePropagation() 方法，则当
 * 前元素剩下的监听函数将不会被执行。（译者注：注意区别 event.stopPropagation ）
*/