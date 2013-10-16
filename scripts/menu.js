
$(document).ready(function(){
	$('#bulle').hide();
	$('nav').mouseenter(function() {
		//on fait apparaitre la bulle
		$('#bulle').fadeIn("fast");
	});
	
	//on gere les evenements
	$('#menu1').hover(function() {
		$('#bulle').animate({left:'0px'},10);
	});
	$('#menu2').hover(function() {
		$('#bulle').animate({left:'160px'},10);
	});
	$('#menu3').hover(function() {
		$('#bulle').animate({left:'320px'},10);
	});
	$('#menu4').hover(function() {
		$('#bulle').animate({left:'480px'},10);
	});
	$('#menu5').hover(function() {
		$('#bulle').animate({left:'640px'},10);
	});
	
	$('nav').mouseleave(function() {
		$('#bulle').fadeOut("fast");
	});
});		