// JavaScript Document
$(function() {


// Next Slide
	$('.next').on('click', function (e) {
		e.preventDefault();
		console.log("right arrow clicked");
		// $('.featuredPeopleSlider').prev();
		// $('.home-carousel-thumbnails').slickNext();
		// $('.featuredPeopleSlider').animate({scrollLeft: slideWindow}, 600);
	});
// Previous Slide
	$('.prev').on('click', function (e) {
		e.preventDefault();
		console.log("left arrow clicked");
		// $('.home-carousel-thumbnails').slickPrev();
		// $('.featuredPeopleSlider').animate({scrollLeft: -slideWindow}, 600);
	});

	$('.featured-people-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			asNavFor: '.home-carousel-thumbnails',
			arrows: false
		});

	$('.home-carousel-thumbnails').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoPlay: true,
		autoplaySpeed: 3000,
		asNavFor: '.featured-people-slider',
		nextArrow: '.carousel-arrow-right',
		prevArrow: '.carousel-arrow-left',
		centerMode: true,
		focusOnSelect: true,
		centerPadding: "-5%"
	});

	// $('.slider-single').on('afterChange', function(e, slick, currentSlide) {
	// 	$('.slider-nav').slick('slickGoTo', currentSlide);
	// 	var currrentNavSlideElem = '.home-carousel-thumbnails .slick-slide[data-slick-index="' + currentSlide + '"]';
	// 	$('.slider-nav .slick-slide.is-active').removeClass('is-active');
	// 	$(currrentNavSlideElem).addClass('is-active');
	// });
	//
	// $('.slider-nav').on('click', '.slick-slide', function(event) {
	// 	event.preventDefault();
	// 	var goToSingleSlide = $(this).data('slick-index');
	//
	// 	$('.slider-single').slick('slickGoTo', goToSingleSlide);
	// });
	/* Animate On Scroll
    * ------------------------------------------------------ */
        
        AOS.init( {
           offset: 200,
           duration: 600,
           easing: 'ease-in-sine',
           delay: 300,
           once: true,
           disable: 'mobile'
        });


	console.log("carousel spin");
});

