var http = require('http');
var urlone = process.argv[2];
var urltwo = process.argv[3];
var urlthree = process.argv[4];
var one = '';
var two = '';
var three = '';

http.get(urlone, function callback (response){
    
    response.setEncoding('utf-8');
    response.on('data', function(data){
        one = one + data;
    }); 
    response.on('end', function(){
        
        
        console.log(one);
    
    
    http.get(urltwo, function callback (response){
    
    response.setEncoding('utf-8');
    response.on('data', function(data){
        two = two + data;
        
    }); 
    response.on('end', function(){
        
        
        console.log(two);
    
    http.get(urlthree, function callback (response){
    
    response.setEncoding('utf-8');
    response.on('data', function(data){
        three = three + data;
        
    }); 
    response.on('end', function(){
        
       
        console.log(three);
    })
    });
    })
});
    

    })
});

