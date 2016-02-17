
/*
 * GET home page.
 */

exports.view = function(req, res){
   res.render('index', {
    'projects': [
      { 'name': 'Match Me',
        'image': 'match.png',
        'id': 'project1'
      },
      { 'name': 'Search',
        'image': 'search.png',
        'id': 'project2'
      },
      { 'name': 'My Clubs',
        'image': 'mine.png',
        'id': 'project3'
      },
      { 'name': 'Update Profile',
        'image': 'prof.png',
        'id': 'project4'
      },
    ]
  });
}

