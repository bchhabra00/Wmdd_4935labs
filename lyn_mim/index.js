var mymodule = require('./mode.js');
var extension = process.argv[3];
var dirname = process.argv[2];


var callback = function(err,data){
    
    if (err) return err;
    for(var i=0;i<data.length;i++){
        console.log(data[i]);
    }
}