var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    port: 8000,
    host:'localhost'
    
    
    
}); 


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/index.html',
        handler: {
        directory: { path: './mmh_directories/index.html' }
    }
    });
});









server.start((err) =>{
    
if(err){
	throw err;
}
console.log('Server started at: ${server.info.uri}')
});

