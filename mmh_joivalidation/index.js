var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'POST',
    path: '/login',
    config: {
        handler: (request, reply) => {
            reply('login successful');
      },
       validate: {
            payload: Joi.object({
                username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum(),
                birthyear: Joi.number().integer().min(1900).max(2013),
                email: Joi.string().email()
}).options({ allowUnknown: true }).without('password', 'accessToken')
}
    }
});

server.start((err) => {
    if (err) throw err;
});