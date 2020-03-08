function StopWatch() {
  let startTime = 0;
  let stopTime = 0;
  let duration = 0;
  let isWatchOn = false;

  this.start = function() {
    if (isWatchOn) {
      return new Error("Stopwatch has already started");
    }
    startTime = new Date().getTime() / 1000;
    isWatchOn = true;
  };

  this.stop = function() {
    if (!isWatchOn) {
      return new Error("Stopwatch has already stopped or wasnt even started");
    }
    isWatchOn = false;

    stopTime = new Date().getTime() / 1000;
    duration = duration + (stopTime - startTime);
  };
  this.reset = function() {
    startTime = 0;
    stopTime = 0;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
