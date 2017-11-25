var http = require('http');
var path = process.argv[2];


http.get(path, function callback (response){
    
    response.setEncoding('utf-8');
    response.on('data', function(data){
        
        console.log(data);
    }); 
});