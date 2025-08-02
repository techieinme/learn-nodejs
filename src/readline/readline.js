const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});


const num1 = Math.floor(Math.floor(Math.random()*10+10));
const num2= Math.floor(Math.floor(Math.random()*10+10));

const answer = num1+ num2;


rl.question(`what the value of ${num1}+ ${num2} ? \n`,(userInput)=>{
  if(userInput.trim() == answer){
    rl.close();
  }else{
    rl.setPrompt("Your Answer is incorrect !! please try again!\n");
    rl.prompt();
    // 
    rl.on('line',(userInput)=>{
      if(userInput.trim() == answer){
        rl.close();
       }else{
         rl.setPrompt("Your Answer is incorrect !! please try again!\n");
        rl.prompt();
       }
    })
  }
  
});

rl.on('close',()=>{
  console.log("answer is correct!!!")
})