// Get all of our friend data
var data = require('../public/json/clubs.json');

exports.view = function(req, res){
  
  var category = req.params.category;
  //console.log(data.clubs[category]);
  res.render('category', {"data":data.clubs[category], "category": category});
};

