// getters and setters
// what if we want defaultLocation as a getter which is just a read only property
// as let is just a hack for a private property we cant do this
/*function Circle(radius) {
  let defaultLocation = { x: 0, y: 2 };
  let computerOptimumLocation = function(factor) {};
  this.radius = radius;

  this.draw = function() {
    computerOptimumLocation(0.1);
    console.log("draw");
  };
} */

function Circle(radius) {
  let defaultLocation = { x: 0, y: 2 };
  let computerOptimumLocation = function(factor) {};
  this.radius = radius;

  this.draw = function() {
    computerOptimumLocation(0.1);
    console.log("draw");
  };

  // another hack to create a getter
  /*this.getDefaultLocation = function() {
    return defaultLocation;
  };*/

  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    }
  });
}
