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

$(".best-wrapper .pager-wrapper a.pager").click(function(e){
	e.preventDefault();
	$(".best-wrapper .pager-wrapper a.pager").removeClass('active')
	$(this).addClass('active')
})

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.slide-wrapper .bt-next',
		prevEl: '.slide-wrapper .bt-prev',
	},
	pagination: {
		el: '.slide-wrapper .swiper-pagination',
		clickable: true
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	}
})