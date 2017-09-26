var fs = require("fs");



var x =process.argv[2];

fs.readFile(x,function(error,data){
    
   if(error) return error;
    
    var y = data.toString().split('\n').length;
    console.log(y-1);

});

