var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n");

// var coordinatesString = input.slice(0, -1).split(' ');
// var coordinatesInt = coordinatesString.map(Number);
// var roomDimension = [];
// var hooverPositionToInt = [];
// var dirtPositions = []
// console.log(coordinates.length);

// function getCoordinate(coordinates){

//   var coordinates = input.slice(0, -2);
//   console.log(coordinates.length);
//   for(let i = 0; i < coordinates.length; i++){
//     // console.log(coordinates.length);
//     if(coordinates[i].index === 0){
//       roomDimension.push(coordinates[i]);
//     }
//   }
// }
// console.log(coordinatesInt);


var roomDimension = input[0].split(' ');

var hooverPositionString = input[1].split(' ');
// console.log(hooverPositionString)
var hooverPositionToInt = hooverPositionString.map(Number);


var dirtPosition1 = input[2].split(' ');
var dirtPosition2 = input[3].split(' ');
var dirtPosition3 = input[4].split(' ');
// console.log(dirtPosition1)
var drivingInstructions = input.slice(-1)[0].split('');



class Room {
  constructor() {
    this.roomDimension = roomDimension;
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
      x: hooverPositionToInt[0],
      y: hooverPositionToInt[1],
    };
    // this.drivingInstructions = drivingInstructions;
    // console.log(this.hooverPositions)
    // console.log(this.dirtPositions);
    this.dirtCollect = 0;
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
    for (var i = 0; i < drivingInstructions.length; i++) {
      var step = drivingInstructions[i];
      // console.log("n counter")
      this.cleanDirt();

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

  cleanDirt() {

    if (this.hooverPositions.x == this.dirtPositions.dP3.x && this.hooverPositions.y == this.dirtPositions.dP3.y && this.dirtCollect == 0) {
      this.dirtCollect += 1;
    }
  };


}



module.exports = Room; 