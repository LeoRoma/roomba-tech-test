const Room = require('./room.js');

describe("Room", () => {
  let room;

  beforeEach(() => {
    room = new Room;
  });

  test('get the size of the room', () => {
    expect(room.getRoomDimension()).toEqual({"x": "5", "y": "5"});
  });

  test('get the position of the dirt', () => {
    expect(room.getDirtPosition()).toEqual({
      dP1: { x: '1', y: '0' },
      dP2: { x: '2', y: '2' },
      dP3: { x: '2', y: '3' }
    });
  });

  test('get the start position', () => {
    expect(room.getHooverPositions()).toEqual({ x: 1, y: 2 });
  });

  // test('get the steps', () => {
  //   expect(room.getDrivingInstructions()).toEqual ([
  //     'N', 'N', 'E', 'S',
  //     'E', 'E', 'S', 'W',
  //     'N', 'W', 'W'
  //   ]);
  // });

  xtest('dirt patch collected', () => {
    room.moves('NNESEESWNWW');
    room.cleanDirt();
    expect(room.dirtCollect).toEqual(1);
  });


});