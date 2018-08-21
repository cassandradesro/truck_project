"use strict";

console.log("Truck Furniture developed by Cassandra Desrosiers designed by Ezell Brown 2");

document.querySelector(".hamburger").addEventListener("click", function () {
	console.log("hamburger clicked");
	document.querySelector("nav").classList.toggle("active");

	document.querySelector(".hamburger").classList.toggle("active");
	document.querySelector(".hamburger-section p").classList.toggle("active");
});

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

///hamburger


document.querySelectorAll(".hamburger").addEventListener("click", function () {
	document.querySelectorAll(".hamburger").classList.toggle('active');
	document.querySelector("#overlay").classList.toggle('open');
});
//# sourceMappingURL=main.js.map
