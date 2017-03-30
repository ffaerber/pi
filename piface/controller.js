var restify = require('restify');
var faye    = require('faye');
var client  = new faye.Client('http://localhost:8000/faye');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());



// curl -is http://localhost:8080/pifaces/p1/read/3
server.get('/pifaces/:piface/read/:pin_id', function (req, res, next) {
  client.publish('/'+req.params.piface, { read: req.params.pin_id });
  res.send(req.params);
  return next();
});

// curl -is http://localhost:8080/pifaces/p1/write/4/2
server.get('/pifaces/:piface/write/:pin_id/:pin_value', function (req, res, next) {
  client.publish('/'+req.params.piface, { write: [req.params.pin_id, req.params.pin_value] });
  res.send(req.params);
  return next();
});




client.subscribe('/controller', function(message) {
  var methodName  = Object.keys(message)[0]
  var methodValue = message[methodName]
  console.log(message);
});







