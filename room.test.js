const Room = require('./room.js');

describe("Room", () => {
  let room;

  beforeEach(() => {
    room = new Room;
  });

  test('get the size of the room', () => {
    expect(room.getRoomDimension()).toEqual(['5', '5']);
  });

  test('get the position of the dirt', () => {
    expect(room.getDirtPosition()).toEqual({ dP1: ['1', '0'], dP2: ['2', '2'], dP3: ['2', '3'] });
  });

  test('get the position of the dirt', () => {
    expect(room.getHooverPositions()).toEqual({ x: '1', y: '2' });
  });

  // test('get the position of the dirt', () => {
  //   expect(room.getDrivingInstructions()).toEqual ([
  //     'N', 'N', 'E', 'S',
  //     'E', 'E', 'S', 'W',
  //     'N', 'W', 'W'
  //   ]);
  // });

  test('increase y by 1 with N', () => {
    room.moves('N');
    expect(room.hooverPositions.y).toEqual(3);
  });
  test('decrease y by 1 with S', () => {
    room.moves('S');
    expect(room.hooverPositions.y).toEqual(1);
  });
  test('increase x by 1 with E', () => {
    room.moves('E');
    expect(room.hooverPositions.x).toEqual(2);
  });
  test('decrease x by 1 with W', () => {
    room.moves('W');
    expect(room.hooverPositions.x).toEqual(0);
  });


});