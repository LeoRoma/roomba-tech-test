const Room = require('./room');
// this.instanceOfRoom = new Room();

// var dirtPositions = this.instanceOfRoom.dirtPositionsString;
// console.log(dirtPositions)

class Dirt {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  hello(string) {
    return "hello";
  }
}

module.exports = Dirt; 