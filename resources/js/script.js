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
    
    /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    
    
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    
    
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '70%'
    });
    

});


