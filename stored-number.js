var list = [];

var addToList = function(...nums) {
  nums.forEach(function(num){
    list.push(num);
  })
  return list;
};

exports.addToList = addToList;
