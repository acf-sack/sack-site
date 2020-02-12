			
			
			
	//prevent # links from moving to top
	
	$('a[href="#"][data-top!=true]').click(function(e){
		e.preventDefault();
	});
		
	
		
	
	
	
	//	SMOOTH SCROLL
	smoothScroll.init({
		offset: 70
	});
	
	
	//	ONEPAGE ACTIVE LINK
	
	jQuery(document).ready(function() {
	
		var sections = $('section')
		  , nav = $('nav')
		  , nav_height = nav.outerHeight();
		 
		$(window).on('scroll', function () {
		  var cur_pos = $(this).scrollTop();
		 
		  sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();
		 
			if (cur_pos >= top && cur_pos <= bottom) {
			  nav.find('a').removeClass('active');
			  sections.removeClass('active');
		 
			  $(this).addClass('active');
			  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		  });
		});
	});
	
	
	
	
	//	SCROLL

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 180) {
			$(".navbar-transparent").addClass("navbar-scroll");
		} else {
			$(".navbar-transparent").removeClass("navbar-scroll");
		}
				
	});
	
	//	SCROLL

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 180) {
			$(".stay-top").addClass("navbar-scroll2");
		} else {
			$(".stay-top").removeClass("navbar-scroll2");
		}
				
	});

	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			$(".navbar-fixed-top").addClass("has-bg");
		} else {
			$(".navbar-fixed-top").removeClass("has-bg");
		}
				
	});
	
	
	//	RESIZE
	
	$(window).on('resize', function(){
		  var win = $(this);
		  if (win.width() < 1200) { 
			$('.navbar-transparent').removeClass('navbar-fixed-top');	 

		  }
		else
		{
			 $('.navbar-transparent').addClass('navbar-fixed-top');
		}

	});


	
		
	//	BANNER
	
	jQuery(document).ready(function() {
													
		jQuery('#banner-fullwidth').show().revolution(
			{
			delay:6000,
			startwidth:1170,
			startheight:500,
			hideThumbs:300,
			navigationStyle:"preview4",
			spinner:"spinner4",				

		});
		
		jQuery('#banner-boxed').show().revolution(
			{
			delay:6000,
			startwidth:1170,
			startheight:500,
			hideThumbs:300,
			navigationStyle:"preview4",
			spinner:"spinner4",				

		});
		
		jQuery('#banner-fullscreen').show().revolution(
			{	
			delay:6000,
			startwidth:1170,
			startheight:500,
			hideThumbs:300,
			navigationStyle:"preview4",
			fullScreen:"on",
			fullScreenOffsetContainer: "header",
			spinner:"spinner4",
		});
																	
	});	
	
	
	
	
	
	//	SCROLL TO TOP
	
	$(document).ready(function(){

		//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
		
		//Click event to scroll to top
		$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
		
	});	
	
	
	
	
	//	PRELOADER
	
	//<![CDATA[
		$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		})
	//]]>
		
		
		
		
		
			
			
			
			
	// PROGRESS ANIMATED
				
	jQuery(document).ready(function () {

		jQuery('.progress-animated').each(function () {
			jQuery(this).appear(function() {
			  jQuery(this).animate({opacity:1,left:"0px"},800);
			  var b = jQuery(this).find(".progress-bar").attr("data-width");
			  jQuery(this).find(".progress-bar").animate({
				width: b + "%"
			  }, 1300, "linear");
			}); 
		});   

	});
			
			
			
			
	//GALLERY
		
	$('.popup-link').magnificPopup({ 
	  type: 'image',
	  gallery:{
		enabled:true
	  }
		// other options
	});
		
		
	
		

	// CLIENTS  CAROUSEL	
		
	$(document).ready(function() {

		var owl = $("#clients-3col");
	 
		owl.owlCarousel({			 
			//items : 3,
			itemsCustom : [
				[450,3],
				[600, 3],
				[768, 3],
				[980, 3],
				[1199, 3],
				[1400, 3],
				[1600, 3]
			  ],
			autoPlay : true,
			pagination : false		
		});
	  
		// Custom Navigation Events
		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})

	});
	
	$(document).ready(function() {

		var owl = $("#clients-full");
	 
		owl.owlCarousel({			 
			itemsCustom : [
				[450,3],
				[600, 3],
				[768, 4],
				[980, 5],
				[1199, 5],
				[1400, 5],
				[1600, 5]
			  ],
			autoPlay : true,
			pagination : false		
		});
	  
		// Custom Navigation Events
		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})

	});
		
		
	// TESTIMONIALS  CAROUSEL	
		
	$(document).ready(function() {

		var owl = $("#testimonial-full");
	 
		owl.owlCarousel({			 
			//items : 1,
			itemsCustom : [
				[450,1],
				[600, 1],
				[768, 1],
				[980, 1],
				[1199, 1],
				[1400, 1],
				[1600, 1]
			  ],
			autoPlay : true,
			pagination : false		
		});
	  
		// Custom Navigation Events
		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})

	});	
	
	$(document).ready(function() {

		var owl = $("#testimonial-full2");
	 
		owl.owlCarousel({			 
			//items : 1,
			itemsCustom : [
				[450,1],
				[600, 1],
				[768, 1],
				[980, 1],
				[1199, 1],
				[1400, 1],
				[1600, 1]
			  ],
			autoPlay : true,
			pagination : true		
		});
	});	
	
	// SHOP CAROUSEL
	
	$(document).ready(function() {

		  var owl = $("#carousel-shop, #carousel-shop2");		 
			
		  owl.owlCarousel({
				items : 4,
				autoPlay : true,
				pagination : false
		  });
			
		  // Custom Navigation Events
		  $(".next").click(function(){
				owl.trigger('owl.next');
		  })
		  $(".prev").click(function(){
				owl.trigger('owl.prev');
		  })
				 
	});
		
			
	// SPECIFIC CAROUSEL
	
	$(document).ready(function() {

		  var owl = $("#carousel-block, #carousel-blog");		 
			
		  owl.owlCarousel({
				items : 3,
				autoPlay : true,
				pagination : false
		  });
			
		  // Custom Navigation Events
		  $(".next").click(function(){
				owl.trigger('owl.next');
		  })
		  $(".prev").click(function(){
				owl.trigger('owl.prev');
		  })
				 
	});
		
		
		
		
	//	WOW
	
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       100,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
		  // the callback is fired every time an animation is started
		  // the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();
		
		
		
		
	//	CODE-BOX
	
	$('.code-box pre').hide();

	$('.code-box a').click(function(e){
		
		e.preventDefault();
		// hide all span
		var $this = $(this).parent().find('pre');
		$(".code-box pre").not($this).hide();
		
		// here is what I want to do
		$this.toggle('slow');
		
	});
	
	
	//	COUNTER
	
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});
		
			
			
			
			
	 //	COUNTDOWN	
		
	 $('#countdown').countdown('2016/10/10', function(event) {
	   var $this = $(this).html(event.strftime(''
		 + '<div class="box"><span>%w</span><br> Weeks </div> '
		 + '<div class="box"><span>%d</span> <br> days </div>  '
		 + '<div class="box"><span>%H</span> <br> hr </div>  '
		 + '<div class="box"><span>%M</span> <br> min </div> '
		 + '<div class="box"><span>%S</span> <br> sec </div> '));			
	 });
	 
	 
		 
		 
		 
	 //	COUPON
	 
	 $('#coupon').countdown('2016/1/1', function(event) {
	   $(this).html(event.strftime('%D days %H:%M:%S'));
	 });
	 
	
	// LINE CHART

	if($('#line-chart').length > 0){
		new Morris.Line({
		  // ID of the element in which to draw the chart.
		  element: 'line-chart',
		  // Chart data records -- each entry in this array corresponds to a point on
		  // the chart.
		  data: [
			{ year: '2008', value: 20 },
			{ year: '2009', value: 10 },
			{ year: '2010', value: 5 },
			{ year: '2011', value: 5 },
			{ year: '2012', value: 20 }
		  ],
		  // The name of the data record attribute that contains x-values.
		  xkey: 'year',
		  // A list of names of data record attributes that contain y-values.
		  ykeys: ['value'],
		  // Labels for the ykeys -- will be displayed when you hover over the
		  // chart.
		  labels: ['Value']
		});
	}
		
		
		
	// AREA CHART
	
	if($('#area-chart').length > 0){
		Morris.Area({
		  element: 'area-chart',
		  data: [
			{ y: '2006', a: 100, b: 90 },
			{ y: '2007', a: 75,  b: 65 },
			{ y: '2008', a: 50,  b: 40 },
			{ y: '2009', a: 75,  b: 65 },
			{ y: '2010', a: 50,  b: 40 },
			{ y: '2011', a: 75,  b: 65 },
			{ y: '2012', a: 100, b: 90 }
		  ],
		  xkey: 'y',
		  ykeys: ['a', 'b'],
		  labels: ['Series A', 'Series B']
		});
	}
	
	
	
	
	// BAR CHART
	
	if($('#bar-chart').length > 0){
		Morris.Bar({
		  element: 'bar-chart',
		  data: [
			{ y: '2006', a: 100, b: 90 },
			{ y: '2007', a: 75,  b: 65 },
			{ y: '2008', a: 50,  b: 40 },
			{ y: '2009', a: 75,  b: 65 },
			{ y: '2010', a: 50,  b: 40 },
			{ y: '2011', a: 75,  b: 65 },
			{ y: '2012', a: 100, b: 90 }
		  ],
		  xkey: 'y',
		  ykeys: ['a', 'b'],
		  labels: ['Series A', 'Series B']
		});
	}
	
	
	
	
	// DONUT CHART
	
	if($('#donut-chart').length > 0){
		Morris.Donut({
		  element: 'donut-chart',
		  data: [
			{label: "Download Sales", value: 12},
			{label: "In-Store Sales", value: 30},
			{label: "Mail-Order Sales", value: 20}
		  ]
		});
	}

		
			
	// PORTFOLIO FILTER
		
	$(document).ready(function() {
	  $('ul#filter a').click(function() {
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
		

		
		if(filterVal == 'all') {
		  $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
		  $('ul#portfolio li').each(function() {
							
			if(!$(this).hasClass(filterVal)) {
			  $(this).fadeOut('normal').addClass('hidden');

				
			} else {
			$(this).fadeIn('slow').removeClass('hidden');

			}
		  });
		}
		
		return false;
	  });
	});

	

	//  ANIMATION HOVER

	animationHover('','');

	function animationHover(element, animation){
	  element = $(element);
	  element.hover(
		function() {
		  element.addClass('animated ' + animation);
		},
		function(){
		  //wait for animation to finish before removing classes
		  window.setTimeout( function(){
			element.removeClass('animated ' + animation);
		  }, 2000);
		}
	  );
	};

	function animationClick(element, animation){
	  element = $(element);
	  element.click(
		function() {
		  element.addClass('animated ' + animation);
		  //wait for animation to finish before removing classes
		  window.setTimeout( function(){
			  element.removeClass('animated ' + animation);
		  }, 2000);
		}
	  );
	};



//	#widget-map


$(document).ready(function() {	
if($('#widget-map').length > 0){
	  var map;
	  map = new GMaps({
		el: '#widget-map',
		lat: -12.043333,
		lng: -77.028333
	  });
	  map.addMarker({
		lat: -12.042,
		lng: -77.028333,
		title: 'Marker with InfoWindow',
		infoWindow: {
		  content: '<p>#000 Silicon Valley, CA, USA <br> Tel No: 03 456 258 47</p>'
		}
	  });
}
});
	
//	#contact-map

$(document).ready(function() {		
if($('#contact-map').length > 0){
	  var map2;
	  map2 = new GMaps({
		el: '#contact-map',
		lat: -12.043333,
		lng: -77.028333
	  });
	  map2.addMarker({
		lat: -12.042,
		lng: -77.028333,
		title: 'Marker with InfoWindow',
		infoWindow: {
		  content: '<p>#000 Silicon Valley, CA, USA <br> Tel No: 03 456 258 47</p>'
		}
	  });
 }
		
 });



$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	controlNav: false
  });
     
});


( function( $ ) {
	$( document ).ready(function() {
	$('.side-menu > ul > li > a').click(function() {
	  $('.side-menu li').removeClass('active');
	  $(this).closest('li').addClass('active');	
	  var checkElement = $(this).next();
	  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('active');
		checkElement.slideUp('normal');
	  }
	  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('.side-menu ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
	  }
	  if($(this).closest('li').find('ul').children().length == 0) {
		return true;
	  } else {
		return false;	
	  }		
	});
	});
} )( jQuery );



function valueChanged()
{
    if($('.ship_question').is(":checked"))   
        $(".shipping").hide();
    else
        $(".shipping").show();
}







// ****************************************************************
// Form Validation  -  Contact Form
// ****************************************************************			
		
/*
	Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
 
 
  
$(document).ready(function() {	
	if($('#contactForm').length > 0){
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "contact-process.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("Your message has been sent.");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("Sorry " + firstName + " it seems that my mail server is not responding... Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
	
	 }
	
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});





		
			