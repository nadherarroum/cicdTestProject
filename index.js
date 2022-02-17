var express = require('express');
var app = express();
let portApp = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1><h2>CI/CD Test</h2><h3>Link Local to github</h3>\
  <a href="http://localhost:3000/api/v1/courses">Get API courses</a>');
});

app.get('/api/v1/courses',function(req,res){
  res.json([{
            title : 'NodeJs',
            author : 'R. Hmida', 
            tags : ['back','express','nodejs',],
            isPublished : 'false'
          },
          {
            title:"Angular",
            author:"S. Saoudi",
            tags:['front','angular'],
            isPublished:'false'
          },
          {
            title:"Android",
            author:"J. Nidhal",
            tags:['android','mobile','android'],
            isPublished:'false'
          },
          {
            title:"Asp.NET",
            author:"T. Hajeer",
            tags:['c#','asp','net'],
            isPublished:'false'
          }
        ]);
});

var server = app.listen(portApp, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
