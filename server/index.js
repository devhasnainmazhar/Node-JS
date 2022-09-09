const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
    res.end("Hello from the other side by hasnain");
}
    else if (req.url == "/about"){
        res.end("Hello from the about side by hasnain");
    }
    else if (req.url == "/contact"){
        res.end("Hello from the contact side by hasnain");
    }
    else{
        res.end("Error Page 404");
    }
}) ;

server.listen(9000 , "127.0.0.1", ()=>{
    console.log("Listening to the port no 9000");
});