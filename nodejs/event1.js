const EventEmitter = require('events')
const door = new EventEmitter()
const doSomething = () =>{console.log(111)}
door.emit('open', doSomething)
door.on('open', function(){
  console.log(21212)
})