//jQuery
	$(document).ready(function(){
	
		$('#fb').fadeTo('fast', 0.8);
		$('#vk').fadeTo('fast', 0.8);
	
	//ramener le logo vers la droite en fct de la resolution
		if (screen.width <= '1024') {
			$('#logo').animate({
				marginLeft:'600px',
			}, 500);
			$('#head').animate({
				marginLeft:'-20px',
			}, 0);
		}else{
			$('#logo').animate({
				marginLeft:'750px',
			}, 500);
		}
		$('#head').delay(400);
		
	//faire sautier l'img de droite
		//down
		$('#head').animate({marginTop:'125px'}, 350);
		//up
		$('#head').animate({marginTop:'95px'}, 200);
		//down
		$('#head').animate({marginTop:'125px'}, 300);
		//up
		$('#head').animate({marginTop:'120px'}, 200);
		//down
		$('#head').animate({marginTop:'125px'},150);
		
				
		$('#fb').mouseenter(function(){
			//$('#fb').animate({height:'37px'},1);
			$('#fb').fadeTo('fast', 1);
			
		});
		$('#fb').mouseleave(function(){
			//$('#fb').animate({height:'35px'},1);
			$('#fb').fadeTo('fast', 0.8);
		});
		$('#vk').mouseenter(function(){
			//$('#vk').animate({height:'37px'},1);
			$('#vk').fadeTo('fast', 1);
			
		});
		$('#vk').mouseleave(function(){
			//$('#vk').animate({height:'35px'},1);
			$('#vk').fadeTo('fast', 0.8);
		});
	});