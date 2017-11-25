var net = require("net");
var port = process.argv[2];

var date = new Date();
var year = date.getFullYear();
var month= date.getMonth() + 1;
if(month<10){
    month = "0" + month;
}
var day = date.getDay();
if (day<10){
    day="0"+day;
}
var hour = date.getHours();
if(hour<10){
    hour = "0" + hour;
}
var minute= date.getMinutes();
if(minute<10)
{
  minute = "0" + minute; 
}

var date = year + "-" + month +  "-" + day + " " + hour + ":" + minute +"\n";
var server = net.createServer(function(socket){
    
    
    socket.end(date);
});


server.listen(port);