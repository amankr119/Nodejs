const fs=require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  //console.log(req.url);
const data=fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");

  if (req.url == "/") res.end("hello from the home side!");
  else if (req.url == "/about") res.end("hello from the about side!");
  else if (req.url == "/contactUs") res.end("hello from the contact side!");
  else if(req.url=="/userapi"){
    fs.writeFile(`${__dirname}/userData/userdata.json`, data, (err)=>{
      console.log("data saved");
      res.end("data saved in userdata successfully !");
    })
    
  }
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error, page doesnot exist. </h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port number 8000");
});
