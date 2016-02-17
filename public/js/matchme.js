'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

}


var $status = $('.pagingInfo');
var $slickElement = $('.spin');
var first = true;

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + i;
    //console.log("i: " + i);
    //$status.text(i + '/' + slick.slideCount);
});

$('.spin').slick({
  //dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});


$('#remove-slide').on('click', function() {
    if(first) {
    var i = $("div.slick-active").attr("data-slick-index");
    //console.log("clicked 'No' on: " + i);
    $slickElement.slick('slickRemove', i);
    var j = 0;
    $("div.slick-slide").each(function(){
       $(this).attr("data-slick-index",j);
       j++;
    });
    first = false;
  }
    else {
    var i = $("div.slick-active").attr("data-slick-index");
    //console.log("clicked 'No' on: " + i);
    if( i == 0) {
      i = 1;
    }
    $slickElement.slick('slickRemove', i-1);
    var j = 0;
    $("div.slick-slide").each(function(){
       $(this).attr("data-slick-index",j);
       j++;
    });

  }
});