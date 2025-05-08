// ES6 Modules (import/export)
// Introduced in ECMAScript 2015 (ES6)
// Uses static imports/exports
// Supports tree-shaking (unused code can be removed)
// Can be asynchronous
// Syntax:
export const myVariable = 42;
export function myFunction() {
  console.log('Hello from myFunction!');
}

// import { myVariable, myFunction } from './myModule.js';


// CommonJS (require/module.exports)
// Introduced in Node.js
// Uses dynamic imports/exports
// Does not support tree-shaking
// Synchronous loading
// Syntax:
const myVariable = 42;
function myFunction() {
  console.log('Hello from myFunction!');
}
module.exports = {
  myVariable,
  myFunction,
};  


module.exports ={
  test:1,
  myfunction: function() {
    console.log('Hello from myFunction!');
  }
}


// import { myVariable, myFunction } = require('./myModule.js');