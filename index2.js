// functions are objects
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function() {
      console.log("draw via constructor");
    });
}

// if we see on chrome developer tools we can check by callig Circle.apply or Circle.arguments and so on,
// which means Circle is an object

// now every object needs a constructor with which it was initially called
// so Circle1 is an object create internally with a new Function call
const Circle1 = new Function(
  "radius",
  `
function Circle(radius) {
    (this.radius = radius),
      (this.draw = function() {
        console.log("draw via constructor");
      });
  }`
);

const another2 = new Circle(1);

// how is this keyword handled
// when we create any object with new operator, then an object is create like {} and it is passed to the function name

Circle1.call({}, 1);

// technically we could also pass windows object

Circle.call(window, 1);
