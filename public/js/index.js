$(document).ready(function() {
  
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");
      $clubapp = $(".clubapp");
      $sign = $(".sign");
  
  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };
  
  $(document).on("click", ".login__submit", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });

   $(document).on("click", ".create", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $sign.hide();
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });

  $(document).on("click", ".createclub", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $clubapp.show();
        $clubapp.css("top");
        $clubapp.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $sign.hide();
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });
  
  
   $(document).on("click", ".signup", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $sign.show();
        $sign.css("top");
        $sign.addClass("active");
      }, submitPhase2 - 10);
      setTimeout(function() {
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });

  $(document).on("click", ".app__logout", function(e) {
    if (animating) return;
    $(".ripple").remove();
    animating = true;
    var that = this;
    $(that).addClass("clicked");
    setTimeout(function() {
      $app.removeClass("active");
      $login.show();
      $login.css("top");
      $login.removeClass("inactive");
    }, logoutPhase1 - 120);
    setTimeout(function() {
      $app.hide();
      $clubapp.hide();
      animating = false;
      $(that).removeClass("clicked");
    }, logoutPhase1);
  });

  document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});


});