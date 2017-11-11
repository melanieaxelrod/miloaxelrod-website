/*//////// Carousel ////////*/

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    adaptiveHeight: true,
    nextArrow: "<img class='a-right control-c next slick-next' src='img/icons/grey/arrow-r.svg'>",
    prevArrow: "<img class='a-left control-c prev slick-prev' src='img/icons/grey/arrow-l.svg'>",
  });
});


/*//////// Fade In ////////*/

$(document).ready(function () {
    $('div.fadein').fadeIn(0).removeClass('fadein');
});



/*//////// Scroll Reveal ////////*/

$(document).ready(function(){
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  }

  else {
    window.sr = ScrollReveal();
    sr.reveal('.reveal', {
      duration: 500,
      delay: 0,
      scale: 1,
      viewOffset: { top: 50, right: 0, bottom: 20, left: 0 },
    });
  }
});


/*//////// Scroll Speed ////////*/

function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

if (isTouchDevice()) {

} else {

  $.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];

    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });

    window.onscroll = function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }
  }

  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };

  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / (this.speed * 0.6)) + 'px)');
  };

  // Initialization
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });
};


/*//////// Sidebar ////////*/

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


/*//////// Scroll Lock ////////*/

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


/*//////// Scroll Down Arrow ////////*/

$(document).ready(function() {
  $('.arrow .image img').on('click', function(){
    $('html, body').animate({
    scrollTop: $("#goto").offset().top
  }, 2000);
  });

  console.log("what UP! welcome to Milo's Console! this is my cool hangout place in CYBER SPACE");  console.log("we got margaritas, guacamole, every flavor of seven-up, and at least two bunches of bananas. usually more.");
  console.log("looking for an invite? you just found it B)");
});
