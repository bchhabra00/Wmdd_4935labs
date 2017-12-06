var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    port: 8000,
    host:'localhost'
    
    
    
}); 

server.route({
	method: 'GET', 
	path:'/',
	handler:(request,reply) => { 
		reply('Hello_Hapi');
	}
});

server.start((err) =>{
    
if(err){
	console.log(err);
}
console.log('Server started at:',server.info.uri)
});

