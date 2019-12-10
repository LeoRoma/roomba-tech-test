var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n");

var roomDimension = input[0].split(' ');

var hooverPositionString = input[1].split(' ');
var hooverPositionToInt = hooverPositionString.map(Number);


var dirtPosition1 = input[2].split(' ');
var dirtPosition2 = input[3].split(' ');
var dirtPosition3 = input[4].split(' ');
var drivingInstructions = input.slice(-1)[0].split('');



class Room {
  constructor() {
    this.roomDimension = roomDimension;
    this.dirtPositions = {
      dP1: dirtPosition1,
      dP2: dirtPosition2,
      dP3: dirtPosition3
    };
    this.hooverPositions = {
      x: hooverPositionToInt[0],
      y: hooverPositionToInt[1],
    };
    // this.drivingInstructions = drivingInstructions;
    // console.log(this.hooverPositions)
    console.log(this.hooverPositions);
  };


  getRoomDimension() {
    return this.roomDimension;
  };

  getDirtPosition() {
    return this.dirtPositions;
  };

  getHooverPositions() {
    return this.hooverPositions;
  };

  // getDrivingInstructions() {
  //   return this.drivingInstructions;
  // };

  moves(drivingInstructions) {
    // console.log('ppppppp');
    // console.log(drivingInstructions.length);
    for (var i = 0; i < drivingInstructions.length; i++) {
      var step = drivingInstructions[i];
      // console.log(step);
      if (step === 'N') {
        this.hooverPositions.y++
      }
      if (step === 'S') {
        this.hooverPositions.y--
      }
      if (step === 'E') {
        this.hooverPositions.x++
      }
      if (step === 'W') {
        this.hooverPositions.x--
      }
    };
  };

}

module.exports = Room; 