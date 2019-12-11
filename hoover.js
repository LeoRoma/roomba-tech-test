const Room = require('./room');

this.instanceOfRoom = new Room();

var steps = this.instanceOfRoom.drivingInstructions;


class Hoover {
  constructor() {
    this.instanceOfRoom = new Room();

    this.dimension = {
      x: this.instanceOfRoom.roomDimension.x,
      y: this.instanceOfRoom.roomDimension.y
    };
    this.positions = {
      x: this.instanceOfRoom.hooverPositions.x,
      y: this.instanceOfRoom.hooverPositions.y
    };
    this.dirtCollect = 0;

  };

  moves(steps) {
    // console.log(steps.length)
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      // this.cleanDirt();
      
      if (step === 'N') {
        this.positions.y++
        if (this.positions.y > this.dimension.y) {
          throw "Sorry can't go further";
        };
      };
      if (step === 'S') {
        this.positions.y--
        if (this.positions.y > this.dimension.y) {
          throw "Sorry can't go further";
        };
      };
      if (step === 'E') {
        this.positions.x++
        if (this.positions.y > this.dimension.y) {
          throw "Sorry can't go further";
        };
      };
      if (step === 'W') {
        this.positions.x--
        if (this.positions.y > this.dimension.y) {
          throw "Sorry can't go further";
        };
      };
    };
  };

  // cleanDirt() {

  //   if (this.positions.x == this.dirtPositions.dP3.x && this.positions.y == this.dirtPositions.dP3.y) {
  //     this.dirtCollect += 1;
  //   }
  // };


}

module.exports = Hoover; 