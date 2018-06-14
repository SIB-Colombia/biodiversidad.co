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
		scrollingSpeed: 300,
		css3: false,
		direction: 'vertical',
		easing: 'easeInQuart',
		loop: true,
		/*navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'right',
		},*/
		navigation: false,
		onLeave: function(index, nextIndex, direction){
			$('.section').eq(index -1).find('.section__content').removeClass('active');
			$('.section').eq(nextIndex -1).find('.section__content').addClass('active');

			

			if(nextIndex == 5){
				$('#pp-nav').fadeOut();
				
			}

			if(index == 5){
				$('#pp-nav').fadeIn();
				
			}
		}
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




