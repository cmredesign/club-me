var data = require('../public/json/signop.json');

exports.view = function(req, res){
   res.render('index', data);
}

