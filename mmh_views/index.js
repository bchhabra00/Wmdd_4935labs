var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    port: 8000,
    host:'localhost'
    
    
    
}); 

server.route({
    
    method:'GET',
    path:'/',
    handler:(request,reply) =>{
        
        reply.view('index');
    }
})



server.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines:{
            html:require('handlebars')
      },
        path: __dirname + '/templates'
        
        
    })
    
});









server.start((err) =>{
    
if(err){
	throw err;
}
console.log('Server started at: ${server.info.uri}')
});

