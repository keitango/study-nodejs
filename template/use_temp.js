var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  // htmlファイルを読み込む
  // 第一引数 : 対象ファイル
  // 第二引数 : エンコード
  // 第三引数 : 読込終了後のコールバック
  fs.readFile('./template.html', 'utf-8', function(err, data){　 // err : エラーオブジェクト
                                                                 // data : 読み込んだデータ
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(3000, function(){
  console.log("Server started. listen port : 3000");
});
