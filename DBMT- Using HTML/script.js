$(document).ready(function(){
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $(".navbar").addClass("scrolled");
      } else {
        $(".navbar").removeClass("scrolled");
      }
    });
  });

 $(document).ready(function() {
    $('#slider-container').carousel({
      interval: 3000, // milliseconds
      pause: 'hover', // pause on mouse hover
      wrap: true // loop back to the first item
    });
  });
  