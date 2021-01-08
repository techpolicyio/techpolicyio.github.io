$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
  $('.arrow-top').fadeIn();
  } else {
   $('.arrow-top').fadeOut();
  }
});