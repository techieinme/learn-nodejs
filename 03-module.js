// CommonJS - every file is a module ( by default)
// Modules - encasulated code ( only share what you want to share)


const { number,myName}  = require('./04-names.js'); // destructuring assignment

const {sayHi,sayHello} = require('./05-utils.js'); // destructuring assignment
// const sayHi  =(message)=>{
//   console.log(message);
// }



sayHi('hello world');
sayHi(myName);
sayHi(number);
sayHello(number);


// export default sayHi