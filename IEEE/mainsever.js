var http = require('http');
const fs = require("fs");
const users = require("./users");
  

http.createServer(function (req, res) {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      var obj=JSON.parse(data)
      users.push(obj);
   

fs.writeFile("users.json", JSON.stringify(users), err => {
     
 
    if (err) throw err; 
   
    console.log("Done writing"); 
});

console.log(users.length);
    })
    res.end("sucess");
    
 
  
}).listen(5500)