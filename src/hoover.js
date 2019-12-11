const Room = require('./room');



this.room = new Room();

var steps = this.room.drivingInstructions;


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
    this.patchesfOfDirt = this.room.dirtPositions;
    // console.log(this.patchesfOfDirt)
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

  cleanDirt() {

    this.room.dirtPositions.forEach(patch => {
      if (this.positions.x === patch.x && this.positions.y === patch.y && this.amountOfDirt === 0) {

        this.room.dirtPositions.splice(this.room.dirtPositions.indexOf(patch, 1))
        this.amountOfDirt += 1

      }
    })

    return `${this.amountOfDirt}`
  }
  // cleanDirt() {

  //   if (this.positions.x == this.dirtPositions.dP3.x && this.positions.y == this.dirtPositions.dP3.y) {
  //     this.dirtCollect += 1;
  //   }
  // };


}

module.exports = Hoover; 