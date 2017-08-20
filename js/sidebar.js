$(document).ready(function() {
    console.log('boop');
  $(".sidebar-toggle-open").on('click', function() {
    console.log('boop');
      $("nav").addClass("sidebar-open");
  });
  $(".sidebar-toggle-close").on('click', function() {
      $("nav").removeClass("sidebar-open");
  });
});
