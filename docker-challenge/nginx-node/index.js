import  http  from 'http'
const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
  if(req.url === "/"){
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end("<h1>Hello Isaias!</h1>");
  }
}).listen(PORT, () => console.log('running at 3000'));