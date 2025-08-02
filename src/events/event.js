const EventEmitter= require('events');

const eventEmitter = new EventEmitter()




eventEmitter.on('message',(message)=>{
  console.log("event emitter event occurred",message)
})



eventEmitter.emit("message",{"test":"mesage"})
