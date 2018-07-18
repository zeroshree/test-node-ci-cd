var express = require('express');
var app = express();
var os = require('os');
app.get('/health/api',(req,res)=>
       {
       	  var os_health = {};
          os_health.cpus=os.cpus();
          os_health.totalmem=os.totalmem();
          os_health.freemem=os.freemem();
          os_health.deployment="blue";
          res.send(JSON.stringify(os_health));

       }
  );
app.listen(3001);
console.log("your application is running on 3001");
