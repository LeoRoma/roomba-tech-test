const Room = require('./room.js');

describe("Room", ()=>{
  let room;
  
  beforeEach(() => {
    room = new Room;
  });

  test('first test', () => {
    expect(room.string("hello")).toEqual ("hello");
  })
})