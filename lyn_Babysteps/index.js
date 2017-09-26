


var Sum=0;

for(var i=2;i<process.argv.length;i++)
{
    Sum+= Number(process.argv[i]);
}

console.log(Sum);