var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    port: 8000,
    host:'localhost'
    
    
    
}); 

server.route({
	method: 'GET', 
	path:'/user/{name}',
	handler:(request,reply) => { 
		reply('Hello' + request.params.name);
	}
});

server.start((err) =>{
    
if(err){
	throw err;
}
console.log('Server started at:',server.info.uri);
});

