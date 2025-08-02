const http = require('http');
// ## simple app 
const httpServer = http.createServer((req,res)=>{

  console.log(req.url)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if(req.url =="/"){
    res.write("welcome home page");
  res.end();

  }else if(req.url=="/about"){
    res.write("welcome about page");
  res.end();

  }
})

httpServer.listen(9999,()=>{
  console.log('http server is running on 9999')
})


/*


// http post 
const data = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
});

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => console.log('Response:', body));
});

req.on('error', (err) => {
  console.error(err);
});

// ⬇ Send data directly
req.write(data);
req.end();
*/




// http get 
/*http.get('http://jsonplaceholder.typicode.com/todos/1',(res)=>{
  let data ='';

  res.on('data',(chunk)=>{
    data += chunk
  })

  res.on('end',()=>{
    console.log(JSON.parse(data))
  })

}).on('error',(err)=>{
  console.log(err)
});
*/






