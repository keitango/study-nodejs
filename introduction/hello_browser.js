// httpモジュールを読み込む
var http = require("http");

// httpモジュールのcreateServerメソッドを呼び出し，サーバーを作成する
var server = http.createServer(function(req, res){
  // サーバーリクエスト時の動作を定義する
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('hello nodejs');
  res.end();
});

// リッスンポートを指定し，サーバーを起動する
server.listen(30000);
// 起動メッセージ
//   サーバーの起動成功・失敗にかかわらず出力される
//   listen処理が終わる前に出力される
console.log("Server started, listening on : 30000");
