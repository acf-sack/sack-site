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
			$("#colors" ).attr("href", "css/colors/green.css" );
			return false;
		});
		
		$(".blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/blue.css" );
			return false;
		});
		
		$(".sky-blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/sky-blue.css" );
			return false;
		});
		
		$(".orange" ).click(function(){
			$("#colors" ).attr("href", "css/colors/orange.css" );
			return false;
		});
		
		$(".red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/red.css" );
			return false;
		});
		
		$(".light" ).click(function(){
			$("#colors" ).attr("href", "css/colors/light.css" );
			return false;
		});
		
		$(".purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/purple.css" );
			return false;
		});
		
		$(".aqua" ).click(function(){
			$("#colors" ).attr("href", "css/colors/aqua.css" );
			return false;
		});
		
		$(".brown" ).click(function(){
			$("#colors" ).attr("href", "css/colors/brown.css" );
			return false;
		});
		
		$(".dark-blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark-blue.css" );
			return false;
		});
		
		$(".light-green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/light-green.css" );
			return false;
		});
		
		$(".dark-red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark-red.css" );
			return false;
		});
		
		$(".teal" ).click(function(){
			$("#colors" ).attr("href", "css/colors/teal.css" );
			return false;
		});
		
		$(".dark-purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark-purple.css" );
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