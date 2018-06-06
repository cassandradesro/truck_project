"use strict";

console.log("Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");

var SlideshowModule = function SlideshowModule(parentSelector) {

	var parent = document.querySelector(parentSelector);

	var slideIndex = 1;
	// showSlides(slideIndex);

	function changeSlideBy(n) {
		// change slide by n amount
		showSlides(slideIndex += n);
	}

	function changeSlideTo(n) {
		showSlides(slideIndex = n);
	}

	var i;

	var slides = parent.querySelectorAll(".slider-container .slide");
	console.log("slides", slides);

	var dots = parent.querySelectorAll(".slider-dots .dot");
	console.log("dots", dots);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].classList.remove("active");
		}
		slides[slideIndex - 1].classList.add("active");
		dots[slideIndex - 1].classList.add("active");
	}

	dots.forEach(function (dot, i) {

		dot.addEventListener("click", function () {
			clearInterval(slideshowInterval);
			console.log("click slider dot", i);
			changeSlideTo(i + 1);
		});
	});

	var slideshowInterval = setInterval(function () {
		changeSlideBy(1);
	}, 7000);
};

SlideshowModule('.recent-section');
SlideshowModule('.featured-items');
SlideshowModule('.latest-collection');
//# sourceMappingURL=main.js.map
