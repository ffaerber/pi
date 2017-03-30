var faye    = require('faye');
var client  = new faye.Client('http://localhost:8000/faye');


client.subscribe('/p1', function(message) {
  var methodName  = Object.keys(message)[0]
  var methodValue = message[methodName]

  switch(methodName) {

    case 'read':
      client.publish('/controller', {
        read: 'read ' + methodValue
      });
      break;

    case 'write':
      client.publish('/controller', {
        read: 'write ' + methodValue
      });
      break;

  }

});
