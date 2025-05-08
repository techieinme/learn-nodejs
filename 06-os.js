// os module 

const os = require('os');
// info about current user
const user = os.userInfo();
console.log(user);
// method returns the system uptime in seconds
console.log(`System uptime is ${os.uptime()} seconds`);   
const arch = os.arch(); // returns the architecture of the operating system
console.log(`System architecture is ${arch}`);
const platform = os.platform(); // returns the platform of the operating system
console.log(`System platform is ${platform}`);
const freeMemory = os.freemem(); // returns the free memory of the operating system  
console.log(`System free memory is ${freeMemory}`);
const totalMemory = os.totalmem(); // returns the total memory of the operating system
console.log(`System total memory is ${totalMemory}`);
const type = os.type(); // returns the type of the operating system      
console.log(`System type is ${type}`); 
const hostName = os.hostname(); // returns the hostname of the operating system 
console.log(`System hostname is ${hostName}`);
// console.log(os.cpus());

console.log(os.networkInterfaces());
// console.log(os.constants);   
// os.cpus().forEach((cpu, index) => {
//   console.log(`Core ${index + 1}: ${cpu.model} - ${cpu.speed} MHz`);
// });

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('OS Type:', os.type());
console.log('Hostname:', os.hostname());
console.log('Uptime (seconds):', os.uptime());
console.log('Home Directory:', os.homedir());
console.log('User Info:', os.userInfo());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('OS Release:', os.release());
console.log('OS Version:', os.version());   

const toMB = bytes => (bytes / 1024 / 1024).toFixed(2);
console.log(`Total Memory: ${toMB(os.totalmem())} MB`);
console.log(`Free Memory: ${toMB(os.freemem())} MB`);

os.cpus().forEach((cpu, i) => {
  console.log(`CPU ${i + 1}: ${cpu.model} (${cpu.speed} MHz)`);
});