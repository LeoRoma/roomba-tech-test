const Room = require('./room');

this.room = new Room();

var steps = this.room.drivingInstructions;
var dirtPositions = this.room.getDirtPosition();


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
    // console.log(this.room.dirtPositions)
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
  };

  cleanDirt() {
    // console.log(dirtPositions)
    dirtPositions.forEach(patch => {
      // console.log("dirt")
      // console.log(patch.x)
      // console.log(patch.y)
      // console.log("hoover")
      // console.log(this.positions.x)
      // console.log(this.positions.y)
      if (this.positions.x === patch.x && this.positions.y === patch.y) {
        this.dirtCollect += 1;
        // dirtPositions.splice(dirtPositions.indexOf(patch, 1)
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