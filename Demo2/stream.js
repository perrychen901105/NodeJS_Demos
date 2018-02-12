var fs = require("fs");
var zlib = require("zlib");

// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   console.log(stats.size);
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});

/*
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   console.log(chunk);
}).on('end', function() {
  console.log(data);
});

// readerStream.addListener('end', function() {
  
// });

// readerStream.on('end',function(){
   
// });

readerStream.on('error', function(err){
   console.log(err.stack);
});
*/

console.log("Program Ended");
