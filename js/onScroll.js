$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.sub-menu').slideUp();
  } else {
    $('.sub-menu').slideDown();
  }
});
