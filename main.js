console.log('hello!');

$(document).ready(function(){

	$('.menu-button').click(function() {
	  $(this).toggleClass('open');
	  $('.menu').toggleClass('open');
	  $('.menu-bg').toggleClass('cover');
	});

	$('#darkmode').click(function(){
		$('body').toggleClass('darkmode');
	});

});