var socket = io();

socket.on('connect', function () {
	console.log('Connect to socket.io server!');
});

socket.on('message', function (message){
	console.log(`New message:  ${message.text}`);
});

// Handles submiting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event){
	event.preventDefault(); // without refreshing the whole page
	var $message = $form.find('input[name=message]');
	socket.emit('message', {
		text: $message.val()
	});
	$message.val('');
});