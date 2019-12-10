const Models = require('./models');
const Room = require('./room');

this.instanceOfRoom = new Room();
this.instanceOfModels = new Models();
var steps = this.instanceOfModels.drivingInstructions;


class Hoover {
  constructor() {
    this.instanceOfRoom = new Room();
    this.instanceOfModels = new Models();
    this.dimension = this.instanceOfRoom.roomDimension;
    this.positions = {
      x: this.instanceOfModels.hooverPositions.x,
      y: this.instanceOfModels.hooverPositions.y
    };
    // this.steps = this.instanceOfModels.drivingInstructions;
    // console.log(this.steps);
  };

  moves(steps) {
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      // console.log("n counter")
      // this.cleanDirt();

      if (step === 'N') {
        this.positions.y++
        // console.log(this.positions.y)
      }
      if (step === 'S') {
        this.positions.y--
      }
      if (step === 'E') {
        this.positions.x++
      }
      if (step === 'W') {
        this.positions.x--
      }
    };
  };

  // cleanDirt() {

  //   if (this.positions.x == this.dirtPositions.dP3.x && this.positions.y == this.dirtPositions.dP3.y) {
  //     this.dirtCollect += 1;
  //   }
  // };

  
}

module.exports = Hoover; 