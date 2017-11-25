
var fs = require("fs");
var path = require("path");

module.exports = function(dirname,extension,cb){
    
    let array = [];
    fs.readdir(dirname, function(error, data){
    
    if(error) return error;
    
    var lenghth = data.length;
    
    for(var i =0; i< lenghth;i++){
        
        var y = data[i];
        var z= path.extname(y);
        
        if(z == "." + extension);
        
        array.push(y);
            
        
        
    }
    return cb(null,array);
    
});
}