jQuery(document).ready(function () {
	
    //======================= Set Elements ===================================//
    var element_menu = jQuery('.navbar .nav > li > a');
    iniciarBinds(element_menu); //init adding event
	});

 
	function iniciarBinds(element_menu) {



    //======================= Tiny Nav Responsive Menu ===================================//
    jQuery('.navbar .nav').tinyNav({
        header: 'Navigation'
    });


	//=================================== Tooltips =====================================//
	$(document).ready(function() {
            $('.tooltip_hover').tooltipster();
        });
	
	
    //======================= Control Menu ===================================//
    element_menu.click(function () {
        jQuery('.navbar .nav > li').removeClass('active');
        jQuery(this).addClass('active');
    });
	
	
	
	//======================= Undeline Menu Effect ===================================//
    element_menu.hover(function () {
        jQuery(this).siblings('span.underline').animate({'width': '100%', 'margin-left': '0'}, {easing: 'easeOutExpo'}, {queue: false});
    }, function () {
        jQuery(this).siblings('span.underline').stop().animate({'opacity': '0'}, function () {
            jQuery(this).css({'width': '0', 'margin-left': '50%', 'opacity': '1'});
        });
    });

	}





  

 $(document).ready(function() {
      // sticky header
$('.sticky').waypoint('sticky');

});


	
// Scroll to Id


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Scroll

 $(document).ready(function(){
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollup').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});


