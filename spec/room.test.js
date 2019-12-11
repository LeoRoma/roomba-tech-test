const Room = require('../src/room.js');

describe("Room", () => {
  let room;

  beforeEach(() => {
    room = new Room;
  });

  test('get the size of the room', () => {
    expect(room.getRoomDimension()).toEqual({ "x": 5, "y": 5 });
  });

  test('get the position of the dirt', () => {
    expect(room.getDirtPosition()).toEqual([{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }]);
  });

  test('get the start position', () => {
    expect(room.getHooverPositions()).toEqual({ x: 1, y: 2 });
  });

  test('get the steps', () => {
    expect(room.getDrivingInstructions()).toEqual ([
      'N', 'N', 'E', 'S',
      'E', 'E', 'S', 'W',
      'N', 'W', 'W'
    ]);
  });



});