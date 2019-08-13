$(document).ready(function () {
	//counter();


    $('#fullpage').pagepiling({
		verticalCentered: true,
		scrollingSpeed: 300,
		css3: false,
		direction: 'vertical',
		easing: 'easeInQuart',
		loop: true,
		navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'right',
		},
		onLeave: function(index, nextIndex, direction){
			$('.section').eq(index -1).find('.section__content').removeClass('active');
			$('.section').eq(nextIndex -1).find('.section__content').addClass('active');
		}
	});
	
});






