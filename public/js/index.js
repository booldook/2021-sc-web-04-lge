$(window).scroll(function() {
	var sct = $(this).scrollTop()
	if(sct > 200) $("aside.bt-top").addClass('active')
	else $("aside.bt-top").removeClass('active')
})

function topAni() {
	$('html, body').stop().animate({"scrollTop": 0}, 300)
}

$(".main-wrapper .pager-wrapper a.pager").click(function(e){
	e.preventDefault();
	$(".main-wrapper .pager-wrapper a.pager").removeClass('active')
	$(this).addClass('active')
})

$(".main-wrapper .pager-wrapper .bt-play").click(function(e){
	e.preventDefault();
	$(".main-wrapper .pager-wrapper .bt-play").addClass('active')
	$(".main-wrapper .pager-wrapper .bt-pause").removeClass('active')
})

$(".main-wrapper .pager-wrapper .bt-pause").click(function(e){
	e.preventDefault();
	$(".main-wrapper .pager-wrapper .bt-play").removeClass('active')
	$(".main-wrapper .pager-wrapper .bt-pause").addClass('active')
})

/*
$(".best-wrapper .pager-wrapper a.pager").click(function(e){
	e.preventDefault();
	$(".best-wrapper .pager-wrapper a.pager").removeClass('active')
	$(this).addClass('active')
})
*/

var swiperMain = new Swiper('.main-wrapper .swiper-container', {
	navigation: {
		nextEl: '.main-wrapper .bt-next',
		prevEl: '.main-wrapper .bt-prev',
	},
	pagination: {
		el: '.main-wrapper .swiper-pagination',
		clickable: true
	}
})

var swiperBest = new Swiper('.best-wrapper .swiper-container', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.best-wrapper .bt-next',
		prevEl: '.best-wrapper .bt-prev',
	},
	pagination: {
		el: '.best-wrapper .swiper-pagination',
		clickable: true
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
	}
})