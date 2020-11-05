	$(document).ready(function () {
		
		
		
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$("#gotop").fadeIn();
			} else {
				$("#gotop").fadeOut();
			}
		});

		$("#gotop").click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, "slow");
			return false;
		});


		$('.all_dp2,.dp2_bg').hide();

		$('.all_gnb>li').mouseover(function () {
			$('.all_dp2,.dp2_bg').stop().slideDown();
		});

		$('.all_gnb>li').mouseout(function () {
			$('.all_dp2,.dp2_bg').stop().slideUp();
		});






		$('.visual').bxSlider({
			auto: true
		});


		$('.photo_list').bxSlider({
			auto: true,
			maxSlides: 5,
			moveSlides: 2,
			slideWidth: 240,
			pager: false
		});


	








	});
