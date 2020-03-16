/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$(".green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/green.min.css" );
			return false;
		});
		
		$(".blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/blue.min.css" );
			return false;
		});
		
		$(".sky-blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/sky-blue.min.css" );
			return false;
		});
		
		$(".orange" ).click(function(){
			$("#colors" ).attr("href", "css/colors/orange.min.css" );
			return false;
		});
		
		$(".red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/red.min.css" );
			return false;
		});
		
		$(".light" ).click(function(){
			$("#colors" ).attr("href", "css/colors/light.min.css" );
			return false;
		});
		
		$(".purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/purple.min.css" );
			return false;
		});
		
		$(".aqua" ).click(function(){
			$("#colors" ).attr("href", "css/colors/aqua.min.css" );
			return false;
		});
		
		$(".brown" ).click(function(){
			$("#colors" ).attr("href", "css/colors/brown.min.css" );
			return false;
		});
		
		$(".dark-blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark-blue.min.css" );
			return false;
		});
		
		$(".light-green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/light-green.min.css" );
			return false;
		});
		
		$(".dark-red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark-red.min.css" );
			return false;
		});
		
		$(".teal" ).click(function(){
			$("#colors" ).attr("href", "css/colors/teal.min.css" );
			return false;
		});
		
		$(".dark-purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark-purple.min.css" );
			return false;
		});
				
		
		// Layout Switcher
		

		$('#layout-switcher').change(function() {
			$('body').attr('class', $(this).val());
		});


		
		// Style Switcher	
		$('#style-switcher').animate({
			left: '-195px'
		});
		
		$('#style-switcher h2 a').click(function(e){
			e.preventDefault();
			var div = $('#style-switcher');
			console.log(div.css('left'));
			if (div.css('left') === '-195px') {
				$('#style-switcher').animate({
					left: '0px'
				}); 
			} else {
				$('#style-switcher').animate({
					left: '-195px'
				});
			}
		})
		
		$('.colors li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
		})
		
		$('.bg li a').click(function(e){
		
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundImage');
			$('body').css('backgroundImage',bg)

		})
		
		$('.bgsolid li a').click(function(e){
			e.preventDefault();
			$(this).parent().parent().find('a').removeClass('active');
			$(this).addClass('active');
			var bg = $(this).css('backgroundColor');
			$('body').css('backgroundColor',bg).css('backgroundImage','none')
		})
		
		$('#reset a').click(function(e){
			var bg = $(this).css('backgroundImage');
			/*$('body').css('backgroundImage','url(./images/bg/noise.png)')*/
			$('body').attr('class', 'wide');
		})
			

	});