// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
  console.log('connection successful.');

  eventEmitter.emit('data_received');
}


// Bind the connection event with the handler
eventEmitter.on("connection", connectHandler);

eventEmitter.on('data_received', function(){
	console.log("data received successfully.");
});

eventEmitter.emit('connection');

console.log('Program ended');

eventEmitter.on('click', '.selector', function(event) {
  event.preventDefault();
  /* Act on the event */
});
