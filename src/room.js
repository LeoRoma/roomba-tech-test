const Dirt = require('./dirt')

var fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split("\n");

let roomDimension = input[0].split(' ');
let hooverPositionString = input[1].toString().split(' ');
let dirtPositionsString = input.slice(2, -1).toString().split(',');
let drivingInstructions = input.slice(-1)[0].split('');

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
    this.dirtPositions = [];
    dirtPositionsString.map(patchesOfDirt => {
      let eachPatchOfDirt = patchesOfDirt.split(' ')
      let patchOfDirtX = Number(eachPatchOfDirt[0])
      let patchOfDirtY = Number(eachPatchOfDirt[1])
      let patchOfDirt = new Dirt(patchOfDirtX, patchOfDirtY)
      this.dirtPositions.push(patchOfDirt)
      return patchOfDirt
    })
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
    return (this.drivingInstructions);
  };
}

module.exports = Room; 