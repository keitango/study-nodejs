var JSCafe = require('./jscafe_http_event_emitter');  // モジュール読み込み
var jscafe = new JSCafe();  // インスタンスを生成

jscafe.request('http://atnd.org/events/37045');

jscafe.on('end', function(page){
  console.log(page);
});

jscafe.on('error', function(e){
  console.log(e);
});
