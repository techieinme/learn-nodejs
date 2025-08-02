const http = require('http');

const httpServer = http.createServer((req,res)=>{

  if(req.url =="/"){
    res.write("welcome home page")
  }else if(req.url=="about"){
    res.write("welcome about page")
  }
  res.end();
})


httpServer.listen(9999,()=>{
  console.log('http server is running on 9999')
})



