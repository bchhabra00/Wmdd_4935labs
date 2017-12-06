var Hapi = require('hapi');
var Joi = require('joi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8080
});

server.route({
    method: 'GET',
    path: '/chickens/{breed}',
config: {
        handler: (request, reply) => {
  reply('Have you asked for the chicken ' + request.params.breed);
        },
validate: {
   params: {
    breed: Joi.string().required()
            }
        }
    }
});

server.start((err) => {
    if (err) throw err;
});