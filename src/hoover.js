const Room = require('./room');

this.room = new Room();

let steps = this.room.drivingInstructions;

class Hoover {
  constructor() {
    this.room = new Room();

    this.dimension = {
      x: this.room.roomDimension.x,
      y: this.room.roomDimension.y
    };
    this.positions = {
      x: this.room.hooverPositions.x,
      y: this.room.hooverPositions.y
    };
    this.dirtPositions = this.room.dirtPositions;
    this.dirtCollect = 0;
  };

  moves(steps) {
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];

      this.cleanDirt();
      
      if (step === 'N') {
        this.positions.y++
        if (this.positions.y > this.dimension.y) {
          return "Sorry can't go further";
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

  cleanDirt() {
    // console.log(dirtPositions)
    this.dirtPositions.forEach(patch => {

      if (this.positions.x === patch.x && this.positions.y === patch.y) {
        this.dirtPositions.splice(this.dirtPositions.indexOf(patch, 1));
        this.dirtCollect += 1;
      }
    })
    return `${this.dirtCollect}`;
  }
}

module.exports = Hoover; 