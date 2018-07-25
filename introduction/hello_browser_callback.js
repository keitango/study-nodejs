const port = 3000;
var http = require("http");

var server = http.createServer(function(req, res){
  res.end("hello nodejs");
});

// callback関数によってlisten終了後にメッセージを表示
server.listen(port, function(){
  console.log("Server started, listening on : " + port);
});
