var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  port: 8080,
  host: 'localhost'
});

server.route({
  method: 'POST',
  path: '/upload',
  config: {
    handler: (request, reply) => {
      var body = '';

    request.payload.file.on('data', (data) => {
        body += data;
      });

      request.payload.file.on('end', () => {
        var result = {
description: request.payload.description,
file: {
data: body,
filename: request.payload.file.hapi.filename,
headers: request.payload.file.hapi.headers
          }
        };

     reply(JSON.stringify(result));
      });
    },
payload: {
output: 'stream',
      parse: true,
    }
  }
});

server.start((err) => {
    if (err) throw err;
});