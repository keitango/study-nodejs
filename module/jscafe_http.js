var http = require('http');

var JSCafe = {
  request : function(url, callback){
    http.get(url, function(res){
      res.setEncoding('utf-8');
      var buffer = '';
      res.on('readable', function(){
        buffer += res.read();
      });
      res.on('end', function(){
        // コールバック呼び出し部
        // レスポンスがすべて帰ってきた場合にコールバックを呼び出し，内容を第二引数に入れる
        callback(null, buffer);
      });
      res.on('error', function(){
        // エラーが発生した場合エラーメッセージを受け取り，コールバックの第一引数にエラーを入れる
        // 慣例的にエラーを返すメソッドの場合，第一引数をエラーにすることが多い
        console.log('Got error : ' + e.message);
        callback(e, buffer);
      });
    });
  }
};

module.exports = JSCafe;  // 指定されたURLページをコールバックで取得する
