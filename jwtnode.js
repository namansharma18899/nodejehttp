const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json")

    if(req.url === '/user'){
        res.end("{'name':'rahul','userId':'123'}")
    }
    else if(req.url === '/order'){
        res.end("{'id':'1','item':'2'}")
    }
    res.end("ok");
})
7 
server.listen(5000);