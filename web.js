var express = require('express');
var fs = require('fs');

var textFromFile=function(name) {
  return fs.readFileSync(name);
};

app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(textFromFile("index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
