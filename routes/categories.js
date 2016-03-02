// Get all of our friend data
var data = require('../public/json/clubs.json');

exports.view = function(req, res){
  //console.log(data);
  res.render('categories', data);
};

