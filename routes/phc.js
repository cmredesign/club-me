// Get all of our friend data
var data = require('../phc.json');

exports.view = function(req, res){
  console.log(data);
  res.render('phc', data);
};