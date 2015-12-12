var Hapi = require('hapi'),
    server = new Hapi.Server(),
    port = 8080,
    routes = require('./src/routes');

server.connection({port: port});

for (const route in routes) {
    server.route(routes[route]);
}

server.start(function () {
    console.log(`Server running at localhost:${port}`); //eslint-disable-line no-console
});
