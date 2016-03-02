$('a[href*=#]').click(function(){
  return false;
});
  

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
  wrap: $('#people'),
  people: [
    {
      name: 'Salsa Dancing',
      img: "http://www.dancesf.com/dancing/albany-salsa-dance.jpg"
    },
    {
      name: 'Fashion',
      img: "http://cdn.fashionmagazine.com/wp-content/uploads/2015/05/Fashion-Magazine-Summer-2015-Ashley-Benson-733x1000.jpg"
    },
    {
      name: 'Figure Skating',
      img: "http://wethepeopleofct.org/wp-content/uploads/2016/01/18.jpg"
    },
    {
      name: 'Comic Books',
      img: "http://www.getcashforcomics.com/media/images/common/comics.png"
    },
    {
      name: 'Gaming',
      img: "http://hfwireless.com/wp-content/uploads/2012/01/game-console-repair-anchorage-300x297.jpg"
    },
    {
      name: 'Archery',
      img: "http://www.getactivelondon.com/image-cache/image-441-orig.jpg"
    },
    {
      name: 'Student Government',
      img: "http://stanforddaily.wpengine.netdna-cdn.com/wp-content/uploads/2016/01/SLIDER.011315.Senate-272x272.jpg"
    },
    {
      name: 'Volunteering',
      img: "http://www.projects-abroad.org/_photos/projects/medicine-and-healthcare/medicine/kenya/female-intern-practicing-medicine.jpg"
    },
    {
      name: 'Cycling',
      img: "http://www.hickorywellcrafted.com/live/wp-content/uploads/2010/12/1047mountain_biking.jpg"
    }
  ],   
  add: function(){
    var random =     this.people[Math.floor(Math.random() * this.people.length)];
    this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong></span></div>");
  }
}

var App = {
  yesButton: $('.button.yes .trigger'),
  noButton: $('.button.no .trigger'),
  blocked: false,
  like: function(liked){
    var animate = liked ? 'animateYes' : 'animateNo';
    var self = this;
    if (!this.blocked) {
      this.blocked = true;           
      $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
        $(this).remove();
        Person.add();
        self.blocked = false;
      });
    }
  }
};

var Phone = {
  wrap: $('#phone'),
  clock: $('.clock'),
  updateClock: function() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    hours = (hours < 10 ? "0" : "") + hours;
    min = (min < 10 ? "0" : "") + min;
    var str = hours + ":" + min;
    this.clock.text(str);
  }
}

App.yesButton.on('mousedown', function() {
  App.like(true);
});

App.noButton.on('mousedown', function() {
  App.like(false);
});

$(document).ready(function() {
  Phone.updateClock();
  setInterval('Phone.updateClock()', 1000);
  
  Person.add();
  Person.add();
  Person.add();
  Person.add();
});