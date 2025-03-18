import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('please turn off');

  setTimeout(()=>{
    console.log('please turn off the motor.Gentle remainder');
  },3000)

});
myEmitter.emit('event');