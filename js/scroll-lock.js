$(document).ready(function() {

  $('.sidebar-toggle-open').on('click', function(event){
    event.preventDefault();
    if ($('nav').hasClass("sidebar-open"))
      $("body").css("overflow", "hidden");
    else
      $("body").css("overflow", "visible");
  });

    $('.sidebar-toggle-close').on('click', function(event){
      event.preventDefault();
      if ($('nav').hasClass("sidebar-open"))
        $("body").css("overflow", "hidden");
      else
        $("body").css("overflow", "visible");
    });
});
