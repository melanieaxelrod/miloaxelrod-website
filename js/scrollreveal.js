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
