var sorted = require('./sorted-number');
var numbers = require('./stored-number');

var input = process.argv.slice(2);

console.log(sorted.sorted(...input));