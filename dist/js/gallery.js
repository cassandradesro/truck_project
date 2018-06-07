'use strict';

/////////////WAYPOINTS///////////////////


var waypoint = new Waypoint({
  element: document.querySelector('#content-container1'),
  handler: function handler(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('first content-container');
      TweenMax.to("#content-container1", 1, { "transform": "translateX(0)", opacity: 1 });
      // TweenMax.to("#content-container", 1, {"transform":"translateX(0)", opacity:1});
    };
  },
  offset: 100
});
console.log("wAYPOINT");
var waypoint2 = new Waypoint({
  element: document.querySelector('#content-container2'),
  handler: function handler(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('second content-container');
      TweenMax.to("#content-container2", 1, { "transform": "translateX(0)", opacity: 1 });
      // TweenMax.to("#content-container2", 1, {"transform":"translateX(0)", opacity:1});
    };
  },
  offset: 100
});
var waypoint3 = new Waypoint({
  element: document.querySelector('#content-container3'),
  handler: function handler(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('third content-container');
      TweenMax.to("#content-container3", 1, { "transform": "translateX(0)", opacity: 1 });
      // TweenMax.to("#content-container3", 1, {"transform":"translateX(0)", opacity:1});
    };
  },
  offset: 100
});
var waypoint4 = new Waypoint({
  element: document.querySelector('#content-container4'),
  handler: function handler(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('fourth content-container');
      TweenMax.to("#content-container4", 1, { "transform": "translateX(0)", opacity: 1 });
      // TweenMax.to("#content-container4", 1, {"transform":"translateX(0)", opacity:1});
    };
  },
  offset: 100
});
var waypoint5 = new Waypoint({
  element: document.querySelector('#content-container5'),
  handler: function handler(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('fifth content-container');
      TweenMax.to("#content-container5", 1, { "transform": "translateX(0)", opacity: 1 });
      // TweenMax.to("#content-container5", 1, {"transform":"translateX(0)", opacity:1});
    };
  },
  offset: 100
});
var waypoint6 = new Waypoint({
  element: document.querySelector('#content-container6'),
  handler: function handler(direction) {
    console.log(direction);
    if (direction == 'down') {
      console.log('sixth content-container');
      TweenMax.to("#content-container6", 1, { "transform": "translateX(0)", opacity: 1 });
      // TweenMax.to("#content-container5", 1, {"transform":"translateX(0)", opacity:1});
    };
  },
  offset: 100
});
//# sourceMappingURL=gallery.js.map
