var swiper = new Swiper('.main-wrapper .swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.main-wrapper .swiper-button-next',
		prevEl: '.main-wrapper .swiper-button-prev',
	},
	pagination: {
		el: '.main-wrapper .swiper-pagination',
		clickable: true
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 20,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	}
})

var swiper = new Swiper('.best-wrapper .swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.best-wrapper .swiper-button-next',
		prevEl: '.best-wrapper .swiper-button-prev',
	},
	pagination: {
		el: '.best-wrapper .swiper-pagination',
		clickable: true
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 20,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	}
})