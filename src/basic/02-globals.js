// GLOBALS - no window!!!

// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about the environment where the program is being executed
//
console.log(__dirname);
console.log(__filename);
// console.log(require);    
// console.log(module);    
// console.log(process);    

setInterval(() => {
  console.log('hello world');
}, 1000);


setTimeout(()=>{
  console.log('setTimeout');
},1000);
