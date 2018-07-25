var jscafe = require('./jscafe_http');

// コールバック呼び出し部
jscafe.request('http://atnd.org/events/3704', function(e, res){
  if(e){ console.log(e); }
  console.log(res);
});
