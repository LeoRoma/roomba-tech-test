var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split("\n");

var roomDimension = input[0].split(' ');

var hooverPositionString = input[1].toString().split(' ');
var hooverPositions = {
  x: Number(hooverPositionString[0]),
  y: Number(hooverPositionString[1])
};

module.exports.hooverPositions = hooverPositions;
// module.exports = {hi: 'hello world'};

var dirtPosition1 = input[2].split(' ');
var dirtPosition2 = input[3].split(' ');
var dirtPosition3 = input[4].split(' ');

var drivingInstructions = input.slice(-1)[0].split('');


module.exports = [];
class Models{
  constructor(){
    this.hooverPositions = hooverPositions
  }
  getHooverPositions(){
    return this.hooverPositions;
  }

  hello(string){
    return "hello";
  }
}


module.exports = Models; 