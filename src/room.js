const Dirt = require('./dirt')

var fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split("\n");

var dimension = input[0].split(' ');
var hooverPositionString = input[1].toString().split(' ');
var dirtPositionsString = input.slice(2, -1).toString().split(',');
var drivingInstructions = input.slice(-1)[0].split('');

class Room {
  constructor() {
    this.dimension = {
      x: Number(dimension[0]),
      y: Number(dimension[1])
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
    return this.dimension;
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