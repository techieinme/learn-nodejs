const {readFile,writeFile} = require('fs');

readFile('./first.txt','utf-8',function(err,firstFileResult){

  if(err){
    console.log(err);
    return;
  }
  const first=firstFileResult;

  readFile('./second.txt','utf-8',function(err,secondFileResult){
    if(err){
      console.log(err);
      return;
    }
    const second  =secondFileResult;

    console.log(first,second)




    writeFile('./result-sync.txt',`first and second file content ${first},${second } \n \n\n \n\n \n`,{flag:'a'},function(err,result){

      if(err){
        console.log(err);
        return;
      }
    })
  })
})


// readFile('./first.txt','utf8',function(err,data){
//   if(err){
//     console.log(err);
//     return;
//   }
//   const first=data;

//   //  read second file 

//   readFile('./second.txt','uft8',function(err,data){
//     if(err){
//       console.log(err)
//       return;
//     }
//     const second = data;



//     console.log("first and second file ", first,second)

//   })
  
// });



