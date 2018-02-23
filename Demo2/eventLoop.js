// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
  console.log('connection successful.');

  eventEmitter.emit('data_received');
}

eventEmitter.on('click', '.selector', function(event) {
  event.preventDefault();
  /* Act on the event */
});