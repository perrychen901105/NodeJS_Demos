// const { Readable } = require('stream'); 
// const inStream = new Readable({
//   read(size) {
//     this.push(String.fromCharCode(this.currentCharCode++));
//     if (this.currentCharCode > 90) {
//       this.push(null);
//     }
//   }
// });
// // inStream.currentCharCode = 1;
// inStream.pipe(process.stdout);
// inStream.currentCharCode = 65;
// inStream.pipe(process.stdout);
// 
const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
outStream.callback = function (){
  console.log("aaa");
};
process.stdin.pipe(outStream);