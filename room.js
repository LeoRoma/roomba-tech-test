var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n");

var roomDimension = input[0].split(' ');


var hooverPositionString = input[1].toString().split(' ');
var hooverPositions = {
  x: Number(hooverPositionString[0]),
  y: Number(hooverPositionString[1])
};



var dirtPosition1 = input[2].split(' ');
var dirtPosition2 = input[3].split(' ');
var dirtPosition3 = input[4].split(' ');
// console.log(dirtPosition1)
var drivingInstructions = input.slice(-1)[0].split('');



class Room {
  constructor() {
    this.roomDimension = {
      x: roomDimension[0],
      y: roomDimension[1]
    };
    this.dirtPositions = {
      dP1: {
        x: dirtPosition1[0],
        y: dirtPosition1[1]
      },
      dP2: {
        x: dirtPosition2[0],
        y: dirtPosition2[1]
      },
      dP3: {
        x: dirtPosition3[0],
        y: dirtPosition3[1],
      }
    };
    this.hooverPositions = {
      x: Number(hooverPositionString[0]),
      y: Number(hooverPositionString[1])
    };

    this.drivingInstructions = drivingInstructions;

    this.dirtCollect = 0;
    // console.log(this.hooverPositions)
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



  cleanDirt() {

    if (this.hooverPositions.x == this.dirtPositions.dP3.x && this.hooverPositions.y == this.dirtPositions.dP3.y) {
      this.dirtCollect += 1;
    }
  };


}



module.exports = Room; 