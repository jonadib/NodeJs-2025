import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterful', () => {
  console.log('please turn off the tap, water is overflowing!');
});
myEmitter.emit('waterful');
console.log('Event module example completed.');