const fs = require('fs');

var txt = fs.readFileSync('./input.txt', 'utf8');
console.log(txt);


class Room {
  constructor() {
    this.coordinates = {};
    this.hooverPosition = {};
    this.dirtPosition = {};
  }



  string(hello) {
    return hello = "hello";
  }
}

module.exports = Room; 