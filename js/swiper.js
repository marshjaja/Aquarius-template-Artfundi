document.addEventListener("DOMContentLoaded", function () {
	//?  ========== Initialize Hero Swiper ===========
	//?  ========== Initialize Hero Swiper ===========
	var heroSwiper = new Swiper(".hero-swiper", {
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// NOTE
	//?  ========== Initialize Latest Swiper ===========
	//?  ========== Initialize Latest Swiper ===========
	var swiper = new Swiper(".latest-swiper", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 15,
			stretch: 130,
			depth: 390,
			modifier: -1,
			slideShadows: false,
		},
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		// preloadImages: false,
		lazyLoading: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1920: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
		draggable: true,
		watchOverflow: true,
	});
	AOS.init({
		once: true,
	});
});
