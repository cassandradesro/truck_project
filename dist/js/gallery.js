'use strict';

/////////////WAYPOINTS///////////////////


var galleryDots = document.querySelectorAll('.gallery-dot');
// for (var i = 0; i < galleryDots.length; i++) {
//     var gallerydot = galleryDots[i];
// }

var contentContainers = document.querySelectorAll('.content-container');

contentContainers.forEach(function (contentContainer, index) {

  var waypoint = new Waypoint({
    element: contentContainer,
    handler: function handler(direction) {
      if (direction === "down") {
        TweenMax.to(contentContainer, 1, { x: 0, opacity: 1 });
        if (contentContainer.classList.contains('flex-start')) {
          TweenMax.from(contentContainer.querySelector('.content-text'), 1, { x: "-=40%" });
        } else {
          TweenMax.from(contentContainer.querySelector('.content-text'), 1, { x: "+=40%" });
        }
        TweenMax.from(contentContainer.querySelectorAll('a'), 1, { delay: 0.5, opacity: 0, y: "+=30px" }, 0.2);

        this.destroy();
      }
      for (var i = 0; i < galleryDots.length; i++) {
        galleryDots[i].classList.remove("active");
      }
      galleryDots[index].classList.add("active");
    },
    offset: "50%"
  });
});

/*




var waypoint = new Waypoint({
  element: document.querySelector('#content-container1'),
  handler: function(direction) {
  	console.log(direction);
  		console.log('first content-container')
  		TweenMax.to("#content-container1", 1, {"transform":"translateX(0)", opacity:1});
  		// TweenMax.to("#content-container", 1, {"transform":"translateX(0)", opacity:1});
      
      for (var i = 0; i < galleryDots.length; i++) {
        galleryDots[i].classList.remove("active");
      }
      galleryDots[0].classList.add("active");
  	
  },
  offset: "50%"
});



console.log("wAYPOINT");
var waypoint2 = new Waypoint({
  element: document.querySelector('#content-container2'),
  handler: function(direction) {
  	console.log(direction);
  		console.log('second content-container')
  		TweenMax.to("#content-container2", 1, {"transform":"translateX(0)", opacity:1});
  		// TweenMax.to("#content-container2", 1, {"transform":"translateX(0)", opacity:1});
      for (var i = 0; i < galleryDots.length; i++) {
        galleryDots[i].classList.remove("active");
      }
      galleryDots[1].classList.add("active");
  },
  offset: "50%"
});



var waypoint3 = new Waypoint({
  element: document.querySelector('#content-container3'),
  handler: function(direction) {
  	console.log(direction);
  		console.log('third content-container')
  		TweenMax.to("#content-container3", 1, {"transform":"translateX(0)", opacity:1});
  		// TweenMax.to("#content-container3", 1, {"transform":"translateX(0)", opacity:1});
          for (var i = 0; i < galleryDots.length; i++) {
            galleryDots[i].classList.remove("active");
          }
          galleryDots[2].classList.add("active");
      
  },
  offset: "50%"
});
var waypoint4 = new Waypoint({
  element: document.querySelector('#content-container4'),
  handler: function(direction) {
  	console.log(direction);
  		console.log('fourth content-container')
  		TweenMax.to("#content-container4", 1, {"transform":"translateX(0)",opacity:1});
  		// TweenMax.to("#content-container4", 1, {"transform":"translateX(0)", opacity:1});
      for (var i = 0; i < galleryDots.length; i++) {
        galleryDots[i].classList.remove("active");
      }
      galleryDots[3].classList.add("active");
  },
  offset: "50%"
});
var waypoint5 = new Waypoint({
  element: document.querySelector('#content-container5'),
  handler: function(direction) {
  	console.log(direction);
  		console.log('fifth content-container')
  		TweenMax.to("#content-container5", 1, {"transform":"translateX(0)", opacity:1});
  		// TweenMax.to("#content-container5", 1, {"transform":"translateX(0)", opacity:1});
      for (var i = 0; i < galleryDots.length; i++) {
        galleryDots[i].classList.remove("active");
      }
      galleryDots[4].classList.add("active");
  },
  offset: "50%"
});
var waypoint6 = new Waypoint({
  element: document.querySelector('#content-container6'),
  handler: function(direction) {
  	console.log(direction);
  		console.log('sixth content-container')
  		TweenMax.to("#content-container6", 1, {"transform":"translateX(0)", opacity:1});
  		// TweenMax.to("#content-container5", 1, {"transform":"translateX(0)", opacity:1});
      for (var i = 0; i < galleryDots.length; i++) {
        galleryDots[i].classList.remove("active");
      }
      galleryDots[5].classList.add("active");
  },
  offset: "50%"
});

*/
//# sourceMappingURL=gallery.js.map
