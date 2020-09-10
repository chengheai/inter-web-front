const EventEmitter = require('events')
const door = new EventEmitter()
// console.log('door: ', door);
// console.log(door.eventNames())
// console.log(door.listenerCount('aaa'))
door.on('aaa',()=> {
  console.log('open')
})
door.on('aaa',()=> {
  console.log('open')
})
door.on('aaa',()=> {
  console.log('open')
})
door.on('aaa',()=> {
  console.log('open')
})
door.on('aaa',()=> {
  console.log('open')
})
door.on('aaa',()=> {
  console.log('open')
})
door.on('aaa',()=> {
  console.log('open')
})
door.emit('aaa')