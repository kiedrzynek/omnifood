$(document).ready(function() {
    
    /*For the sticky navigation*/
   $('.js--section-features').waypoint(function(direction){
       if (direction == "down") {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
   }, {
       offset: '60px'
   });
   
    /*Scroll on buttons*/
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /*Navigation scroll*/
    $('#features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);
    });
    
    $('#steps').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 500);
    });
    
    $('#cities').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 500);
    });
    
    $('#plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 500);
    });
    
});


