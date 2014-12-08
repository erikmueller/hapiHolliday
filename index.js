var Hapi = require('hapi'),
	server = new Hapi.Server();

server
	.connection({port: 8000})
	.route({
		path: '/',
		method:'GET',
		handler: function (request, reply) {
			reply(200);
		}
	})

server.start(function () {
	console.log('Server running at localhost:8000');
});