$(document).ready(function() {
 
  $(".sidebar-toggle-open").on('click', function() {
    
    var tempScrollTop = $(window).scrollTop();
    
      $("nav").addClass("sidebar-open");
    
    $(window).scrollTop(tempScrollTop);
    return false;
  });
  
  $(".sidebar-toggle-close").on('click', function() {
    
    var tempScrollTop = $(window).scrollTop();
    
      $("nav").removeClass("sidebar-open");
    
    $(window).scrollTop(tempScrollTop);
    return false;
  });
});
