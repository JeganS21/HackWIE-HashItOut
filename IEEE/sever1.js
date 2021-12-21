var http = require('http');
const axios = require('axios');
http.createServer(function (req, res) {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      res.end("sucess");
      str=String(data);
      console.log(data)
      s=str.slice("password=",str.indexOf("&key="))
      d=s.replace("password=","");
      s=str.slice(str.indexOf("&key="));
      key=s.replace("&key=","");
      console.log(key);
      axios.post("http://localhost:5500/", {data1:d,key1:key});
   
    })
  
}).listen(8080)