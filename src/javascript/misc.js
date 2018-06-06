$(document).ready(function() {
	$('#fullpage').fullpage({
		loopBottom: true,
		loopTop: true,
		autoScrolling: true
	});

	$('.arrow-down').click(function(){
		console.log('down')
		$.fn.fullpage.moveSectionDown();
	});

});




