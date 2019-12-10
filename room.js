var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n");
// console.log(input);

var roomDimension = input[0].split(' ');
var hooverPosition = input[1].split(' ');
var dirtPosition1 = input[2].split(' ');
var dirtPosition2 = input[3].split(' ');
var dirtPosition3 = input[4].split(' ');
var drivingInstructions = input.slice(-1)[0].split('');

// console.log(roomDimension);
// for (i in input) {
//   if(input[i].indexOf(' ') >= 0){
//     coordinates.push(input[i]);
//   } else {
//     drivingInstructions.push(input[i]);
//   };
//   console.log(input[i]);
// }

class Room {
  constructor() {
    this.roomDimension = roomDimension;
    this.dirtPositions = {
      dP1: dirtPosition1,
      dP2: dirtPosition2,
      dP3: dirtPosition3
    };
    this.hooverPositions = {
      x: hooverPosition[0],
      y: hooverPosition[1],
    };
    this.drivingInstructions = drivingInstructions;
    console.log(this.drivingInstructions)
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

  getDrivingInstructions() {
    return this.drivingInstructions;
  };

}

module.exports = Room; 