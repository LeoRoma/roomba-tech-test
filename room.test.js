const Room = require('./room.js');

describe("Room", ()=>{
  let room;
  
  beforeEach(() => {
    room = new Room;
  });

  test('get the size of the room', () => {
    expect(room.getRoomDimension()).toEqual (['5', '5']);
  })
})