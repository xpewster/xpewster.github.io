$(document).ready(function(){
  $('.portfoliocar').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	variableWidth: true,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		   slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });
  
  $('#sc0').show();
  
  $('.portfoliocar').on('afterChange', function(event, slick, currentSlide){
	  $('.sc').hide();
	  $('#sc'+currentSlide).fadeIn();
	});
});