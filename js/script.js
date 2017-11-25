$("h1").css("color","#fff");

$(document).ready(function(){
	$('#open-nav').on('click', function(){
		$('.list-navigation').toggleClass('active');
	});


	$('#slider-our-team').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: false,
	    dotsClass: 'slider-controls',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        750:{
	        	items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	$('#slider-reviews').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: false,
	    dotsClass: 'slider-controls',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('#slider-clients').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: false,
	    dotsClass: 'slider-controls',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});


});

/*
ЕСЛИ (НОМЕР-СЛАЙДА = 0 или больше нуля){
	$('.slide:eq('+nextActiveSlide+')').addClass('active');
} TO {
	$('.slide').last().addClass('active');
}
*/

/*function имя(параметры, через, запятую) {
 код функции
}*/