const Dirt = require('./dirt')

// this.instanceOfDirt = new Dirt;

var fs = require('fs');


var input = fs.readFileSync('input.txt').toString().split("\n");

var roomDimension = input[0].split(' ');
var hooverPositionString = input[1].toString().split(' ');

var dirtPositionsString = input.slice(2, -1).toString().split(',');
var dirtPositions = [];
// console.log(dirtPositions);


// console.log(this.dirtPositions)
var drivingInstructions = input.slice(-1)[0].split('');



class Room {
  constructor() {
    this.roomDimension = {
      x: Number(roomDimension[0]),
      y: Number(roomDimension[1])
    };
    this.hooverPositions = {
      x: Number(hooverPositionString[0]),
      y: Number(hooverPositionString[1])
    };

    this.drivingInstructions = drivingInstructions;

    // this.dirtPositions = dirtPositions;
    // console.log(this.dirtPositions);
    this.dirtCollect = 0;
    // console.log(this.hooverPositions)

  };



  getRoomDimension() {
    return this.roomDimension;
  };

  getDirtPosition() {
    var dirtPositions = []
    dirtPositionsString.map(patchesOfDirt => {
      let eachPatchOfDirt = patchesOfDirt.split(' ')
      let patchOfDirtX = Number(eachPatchOfDirt[0])
      let patchOfDirtY = Number(eachPatchOfDirt[1])
      let patchOfDirt = new Dirt(patchOfDirtX, patchOfDirtY)
      dirtPositions.push(patchOfDirt)
      return patchOfDirt
    })
    return dirtPositions;
  };

  getHooverPositions() {
    return this.hooverPositions;
  };

  // getDrivingInstructions() {
  //   console.log(this.getDirtPosition());
  // };



  cleanDirt() {

    if (this.hooverPositions.x == this.dirtPositions.dP3.x && this.hooverPositions.y == this.dirtPositions.dP3.y) {
      this.dirtCollect += 1;
    }
  };


}


module.exports = Room; 