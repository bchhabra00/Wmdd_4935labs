var http=require("http");
var url = require("url");
var port = process.argv[2];
var server = http.createServer(function(req,res){
    
    if(req.method == "GET"){
        // console.log("cc");
       var par = url.parse(req.url,true);
       var path = par.path;
       var d = new Date(par.query.iso);
       
       if (path.indexof("parsetime")>=0){
           
           var result ={
               hour : d.getHours(),
               minute: d.getMinutes(),
               second: d.getSeconds(),
           }
               
              res.end(JSON.stringify(result))
           }
           
           if (path.indexof("unixtime") >=0){
               var result = {
                   "unixtime" : d.getTime()
               }
                   res.end(JSON.stringify(result))
               }
           }


});

server.listen(port);