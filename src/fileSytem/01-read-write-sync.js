const {readFileSync,writeFileSync} = require('fs');



console.log('start');
const first =readFileSync('./first.txt','utf-8');
const second =readFileSync('./second.txt','utf-8');
console.log(first,second);


writeFileSync('./result.txt',`Here is the result: ${first}, ${second}`,{flag:'a'},);


console.log('end');