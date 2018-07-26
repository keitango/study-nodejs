// イベント駆動
var http = require('http');

var server = http.createServer(function(req, res){
  res.end("hello nodejs");
});

// listeningイベントを受け取り表示する
server.on('listening', function(){
  console.log("Server started, listening on : 30000");
});

server.listen(30000);
