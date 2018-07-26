var http = reqire('http');
var emitter = require('events').EventEmitter;  // イベント駆動
var util = require('util');

function JSCafe(){
  emitter.call(this);
}

util.inherits(JSCafe, emitter);  // event emitterを継承

JSCafe.prototype.request = function(url){
  var self = this;
  http.get(url, function(res){
    res.setEncode("utf-8");
    var buffer = '';
    res.on('readable', function(){
      buffer += res.read();
    });
    res.on('end', function(){
      self.emit('end', buffer);
    });
    res.on('error', function(e){
      self.emit('error', e);
    });
  });
  return self;
};

module.esports = JSCafe;
