var data = require('../public/json/clubs.json');

exports.view = function(req, res){
  var id = req.params.id;
  var category = req.params.category
  //console.log("id:" + data.clubs[category][id].desc);
  var jsonKey = data.clubs[category][id];
  var baseUrl = req.protocol + '://' + req.get('host');
  console.log(baseUrl);
   res.render('club', {"jsonKey":jsonKey, "baseUrl": baseUrl});
}
