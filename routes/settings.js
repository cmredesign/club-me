/*
 * GET settings god damn it
*/

exports.view = function(req, res){
  res.render('settings', {
    'settings': [
    { 'name': 'Message Notifications',
      'image': 'Checked.png',
      'id': 'setting1'
    },
    { 'name': 'Bookmark Notifications',
      'image': 'Checked.png',
      'id': 'setting2'
    },
    { 'name': 'Notify Clubs I Bookmark',
      'image': 'Checked.png',
      'id': 'setting3'
    },
    { 'name': 'Allow Clubs to Find Me',
      'image': 'Checked.png',
      'id': 'setting4'
    },
    { 'name': 'Allow Clubs to Message Me First',
      'image': 'Checked.png',
      'id': 'setting5'
    },
    { 'name': 'Disable ALL Notifications',
      'image': 'Checked.png',
      'id': 'setting6'
    },
    ]
  });
}
