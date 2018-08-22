"use strict";

document.querySelector(".hamburger").addEventListener("click", function () {
	console.log("hamburger clicked");
	document.querySelector("nav").classList.toggle("active");

	document.querySelector(".hamburger").classList.toggle("active");
	document.querySelector(".hamburger-section p").classList.toggle("active");
	TweenMax.staggerFrom("nav ul li", 1, { y: -30, opacity: 0 }, .10);
});
//# sourceMappingURL=hamburger.js.map
