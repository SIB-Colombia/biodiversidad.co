$(document).ready(function() {
	
	/*
	$('#fullpage').fullpage({
		loopBottom: true,
		loopTop: true,
		autoScrolling: true
	});
*/
$(document).ready(function () {
    $('#fullpage').pagepiling({
        verticalCentered: true,
		css3: false
    });
});

/*
	$('.arrow-down').click(function(){
		console.log('down')
		$.fn.fullpage.moveSectionDown();
	});
*/

$('.arrow-down').click(function () {
    $.fn.pagepiling.moveSectionDown();
});
});




