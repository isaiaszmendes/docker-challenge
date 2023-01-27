import  http  from 'http';
import { createPerson } from './db/seed.js';

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  if(req.url === "/"){
    createPerson()
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end("<h1>Full Cycle Rocks!</h1>");
  }
}).listen(PORT,() => console.log('running at 3000'));