var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n");
// console.log(input);

var roomDimension = input[0].split(' ');
var hooverPosition = input[1].split(' ');
var dirtPosition = input.slice(2, 5);
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
    this.dirtPosition = dirtPosition;
    this.hooverPositions = {
      x: hooverPosition[0],
      y: hooverPosition[1],
    };
    this.drivingInstructions = drivingInstructions;
  }
  getRoomDimension() {
    return this.roomDimension;
  }
  

}

module.exports = Room; 