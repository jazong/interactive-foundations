console.log('dark mode');

$(document).ready(function(){

	$('.menu-button').click(function() {
	  $(this).toggleClass('open');
	  $('.menu').toggleClass('open');
	  $('.menu-bg').toggleClass('cover');
	});

	$("#darkmode").click(function(){
		$('body').toggleClass('darkmode');
	});

	$("#containertab1").click(function(){
		$('body').toggleClass('darkmode');
	});

});