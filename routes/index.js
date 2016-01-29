
/*
 * GET home page.
 */

exports.view = function(req, res){
   res.render('index', {
    'projects': [
      { 'name': 'Match Me',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'Search',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'My Clubs',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Update Profile',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
    ]
  });
}
