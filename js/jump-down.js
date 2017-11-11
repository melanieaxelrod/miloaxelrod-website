$(document).ready(function() {
  $('.arrow .image img').on('click', function(){
    $('html, body').animate({
    scrollTop: $("#goto").offset().top
  }, 2000);
  });
