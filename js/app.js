const express=require('express');
const app=express();
const port=80;

app.get('/home',(req,res)=>{
  res.status(200).send("home page with express")
});
app.listen(port,()=>{
  console.log(`listening at ${port}`);
});




// const path = require("path");
// const http = require('http');
// const fs=require('fs');

// const order=require("./script");
// console.log(order(4));

// const hostname = '127.0.0.1';
// const port = 3000;

// const home = fs.readFileSync(path.resolve(__dirname, '../index.html')); 

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   if(req.url==='/home'){
//     res.end(home);
//   }
//   if(req.url==='/newpage'){
//     res.end("this is a new page");
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });