// object literal syntax
// functions are like behaviour
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 10
  },
  draw: function() {
    console.log("draw");
  }
};

circle.draw();

// creating objects with object literal syntax is a problem only if the object has behaviour (functions)
// for objects with behaviour we should use factory functions or constructors

// factory function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 10
    },
    draw: function() {
      console.log("draw via fn");
    }
  };
}

const circle2 = createCircle(1);

// constructor function
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function() {
      console.log("draw via constructor");
    });
}

const another = new Circle(1);
const another1 = Circle(1);
