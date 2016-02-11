/*
 * GET settings
*/

exports.view = function(req, res){
  res.render('settings', {
    'settings': [
    { 'name': 'Message Notifications',
      'image1': 'Checked.png',
      'image2' : 'Unchecked.jpg',
      'id': 'setting1'
    },
    { 'name': 'Bookmark Notifications',
      'image1': 'Checked.png',
      'image2' : 'Unchecked.jpg',
      'id': 'setting2'
    },
    { 'name': 'Notify Clubs I Bookmark',
      'image1': 'Checked.png',
      'image2' : 'Unchecked.jpg',
      'id': 'setting3'
    },
    { 'name': 'Allow Clubs to Find Me',
      'image1': 'Checked.png',
      'image2' : 'Unchecked.jpg',
      'id': 'setting4'
    },
    { 'name': 'Allow Clubs to Message Me First',
      'image1': 'Checked.png',
      'image2' : 'Unchecked.jpg',
      'id': 'setting5'
    },
    { 'name': 'Disable ALL Notifications',
      'image1': 'Checked.png',
      'image2' : 'Unchecked.jpg',
      'id': 'setting6'
    },
    ]
  });
}

function toggleCheck(id) 
{
    var theImg = document.getElementById(id),
             x = theImg.src.split("/"),
             t = x.length-1,
             y = x[t];

    if(y == 'Checked.png')
    {
        theImg.src='./images/Unchecked.jpg'
    }

    if(y == 'Unchecked.jpg')
    {
        theImg.src='./images/Checked.png'
    }
}