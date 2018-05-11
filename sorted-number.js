var storedNumbers = require('./stored-number');

var sorted = function(...nums) {
  var array = storedNumbers.addToList(...nums);
  return array.sort();
}

exports.sorted = sorted;