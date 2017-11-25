var fs = require("fs");
var path = require("path");
var extension = process.argv[3];
var dirname = process.argv[2];

fs.readdir(dirname, function(error, data){
    
    if(error) return error;
    
    var lenghth = data.length;
    
    for(var i =0; i< lenghth;i++){
        
        var y = data[i];
        var z= path.extname(y);
        
        if(z == "." + extension);
        
        console.log(y);
            
        
        
    }
    
    
});