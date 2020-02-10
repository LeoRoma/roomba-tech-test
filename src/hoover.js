const Room = require('./room');

this.room = new Room();

var steps = this.room.drivingInstructions;

class Hoover {
  constructor() {
    this.room = new Room();

    this.dimension = {
      x: this.room.dimension.x,
      y: this.room.dimension.y
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
      // console.log(`step ${i}`)
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
    return(`${this.positions.x} ${this.positions.y}`);
  };

  cleanDirt() {
    // console.log(dirtPositions)
    this.dirtPositions.forEach(dirtPosition => {

      if (this.positions.x === dirtPosition.x && this.positions.y === dirtPosition.y) {
        this.dirtPositions.splice(this.dirtPositions.indexOf(dirtPosition, 1));
        this.dirtCollect += 1;
      }
    })
    return `${this.dirtCollect}`;
  }
}

let hoover = new Hoover;
console.log(hoover.moves(steps));
console.log(hoover.cleanDirt());
module.exports = Hoover; 