// adding and removing properties from objects

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function() {
      console.log("draw via constructor");
    });
}

const circle = new Circle(1);

circle.location = { x: 1 };

// next topic : enumerating over keys

for (let key in circle) {
  console.log(key, circle[key]);
}

// while enumerating we can check if the key is function or not

for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

// quickly get all keys in circle
const keys = Object.keys(circle);
console.log(keys);

// check if a particular key (property name or method) exists in an object
if ("radius" in circle) {
  console.log("circle has a radius");
}
