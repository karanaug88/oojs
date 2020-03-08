// Abstraction
// we can declare private properties by using let inside the function
// default location is now not part of the object but is a internal property
// of Circle which is scoped only inside Circle
function Circle(radius) {
  let defaultLocation = { x: 0, y: 2 };
  let computerOptimumLocation = function(factor) {};
  this.radius = radius;

  this.draw = function() {
    computerOptimumLocation(0.1);
    console.log("draw");
  };
}
