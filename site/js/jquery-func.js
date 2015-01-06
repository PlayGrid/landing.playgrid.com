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
	
	//=================================== Newsletter form ===================================//
	$("#newsletter").submit(function() {
		$.ajax({
			type : "POST",
			url : "newsletter.php",
			dataType : "html",
			data : $(this).serialize(),
			beforeSend : function() {
				$("#loadingNews").show();
			},
			success : function(response) {
				$("#responseNews").html(response);
				$("#loadingNews").hide();
			}
		})
		return false;
	});


	//=================================== Tooltips =====================================//
	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}
	
	
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




	//=========================== Home Responsive Slider ===================================//
    jQuery("#slider4").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 500,            // Integer: Speed of the transition, in milliseconds
	  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	  pager: false,           // Boolean: Show pager, true or false
	  nav: true,             // Boolean: Show navigation, true or false
	  random: false,          // Boolean: Randomize the order of the slides, true or false
	  pause: false,           // Boolean: Pause on hover, true or false
	  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	  prevText: "",   // String: Text for the "previous" button
	  nextText: "",       // String: Text for the "next" button
	  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	  namespace: "rslides",   // String: Change the default namespace used
	  before: function(){},   // Function: Before callback
	  after: function(){}     // Function: After callback
    });


    //==================================== Parallax ===================================//
    var deck = new jQuery.scrolldeck({
        buttons: '#nav li a',
        easing: 'easeInOutExpo'
    });
    var deck2 = new jQuery.scrolldeck({
        buttons: '.top_scroll',
        easing: 'easeInOutExpo'
    });
	}


	//============================== Responsive Video ===================================//
    jQuery(".container_vid").fitVids();
    jQuery(".container_vid").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});


	//============================== Zoom ===================================//
	var timer;
	$(window).resize(function(){
		clearTimeout(timer);
		var slider = $('#slider').data('movingBoxes');
		slider.options.width = $(window).width() * 0.5; // make 50% browser width
		slider.options.panelWidth = 0.7; // make 70% of wrapper width
		// prevent updating continuously, aka throttle resize
		timer = setTimeout(function(){
			slider.update(false);
		}, 100);
	});
	
	
	//============================== Slider ===================================//
	$('#slider').movingBoxes({

		// **** Appearance ****
		// start with this panel
		startPanel: 3,
		// non-current panel size: 80% of panel size
		reducedSize: 0.8,
		// if true, slider height set to max panel height; if false, height will auto adjust.
		fixedHeight: true,
		// **** Behaviour ****
		// animation time in milliseconds
		speed: 500,
		// if true, hash tags are enabled
		hashTags: true,
		// if true, the panel will "wrap" (it really rewinds/fast forwards) at the ends
		wrap: false,
		// if true, navigation links will be added
		buildNav: false,
		// function which returns the navigation text for each panel
		navFormatter: function(index, panel){ return "&#9679;" },
		// anything other than "linear" or "swing" requires the easing plugin
		easing: 'swing',
		// **** Selectors & classes ****
		// current panel class
		currentPanel: 'current',
		// added to the navigation, but the title attribute is blank unless the link text-indent is negative
		tooltipClass: 'tooltip',
	
		// **** Callbacks ****
		// e = event, slider = MovingBoxes Object, tar = current panel #
		// callback when MovingBoxes has completed initialization
		initialized: function(e, slider, tar){},
		// callback upon change panel initialization
		initChange: function(e, slider, tar){
			// alert( 'Changing panels to #' + tar );
		},
		// callback before any animation occurs
		beforeAnimation: function(e, slider, tar){},
		// callback after animation completes
		completed: function(e, slider, tar){
			// get name from title
			// var name = slider.$panels.eq(tar-1).find('h2').text().split(' ')[0];
			// alert( "Now on " + name + "'s panel" );
		}
	
	});


	//============================== BXSlider ===================================//
	// $('.bxslider').bxSlider({
	// 	minSlides: 2,
	// 	maxSlides: 2,
	// 	slideWidth: 571,
	// 	slideMargin: 29,
	// 	controls:false
	// });
	// $('.slider_quote').bxSlider({
	// 	controls:false,
	// 	auto:true,
	// 	pager:false
	// });
	// slider1 = $('.info_slider1').bxSlider({
	// 	slideMargin: 29,
	// 	controls:false,
	// 	pager:false
	// });
	// jQuery(".info_slider1 .control_info .down_control").click(function(){
	// 	slider1.goToNextSlide();
	// });
	// jQuery(".info_slider1 .control_info .up_control").click(function(){
	// 	slider1.goToPrevSlide();
	// });
	// ////************2***********/
	// slider2 = $('.info_slider2').bxSlider({
	// 	slideMargin: 29,
	// 	controls:false,
	// 	pager:false
	// });
	// jQuery(".info_slider2 .control_info .down_control").click(function(){
	// 	slider2.goToNextSlide();
	// });
	// jQuery(".info_slider2 .control_info .up_control").click(function(){
	// 	slider2.goToPrevSlide();
	// });
	// /****************3***********************/
	// slider3 = $('.info_slider3').bxSlider({
	// 	slideMargin: 29,
	// 	controls:false,
	// 	pager:false
	// });
	// jQuery(".info_slider3 .control_info .down_control").click(function(){
	// 	slider3.goToNextSlide();
	// });
	// jQuery(".info_slider3 .control_info .up_control").click(function(){
	// 	slider3.goToPrevSlide();
	// });
	/******************end bxslider******************************/


	//============================== Fancybox Lightbox ===================================//
	$("a.openimage").fancybox();


	//============================== Go to top ===================================//
	$(document).scroll(function(e){
		y = $(window).scrollTop();
		x = $(window).scrollLeft();
	
		page = $('.testimonials').offset().top;
	
		//console.log("y: "+y);
		//console.log("page :"+ page);
	
		if( y > page){
	
			$('.top_scroll').show();
		}else{
	
			$('.top_scroll').hide();
		}
	
	
	});


