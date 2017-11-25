var http = require('http');
var path = process.argv[2];
var alldata = '';

http.get(path, function callback (response){
    
    response.setEncoding('utf-8');
    response.on('data', function(data){
        alldata = alldata + data;
        
    }); 
    response.on('end', function(){
        
        console.log(alldata.length);
        console.log(alldata);
    })
});