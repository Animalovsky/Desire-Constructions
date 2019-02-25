$(document).on('ready', function () {
	$(".slider").slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		mobileFirst: false,
		cssEase: 'linear'
	});
});