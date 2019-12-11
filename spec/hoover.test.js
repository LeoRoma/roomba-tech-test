const Hoover = require('../src/hoover.js'); 7

describe("Hoover", () => {
  let hoover;

  beforeEach(() => {
    hoover = new Hoover;
  });

  describe('moves', () => {
    test('increase y by 1 step with N', () => {
      hoover.moves('N');
      expect(hoover.positions.x).toEqual(1);
      expect(hoover.positions.y).toEqual(3);
    });

    test('decrease y by 1 step with S', () => {
      hoover.moves('S');
      expect(hoover.positions.x).toEqual(1);
      expect(hoover.positions.y).toEqual(1);
    });

    test('increase x by 1 step with E', () => {
      hoover.moves('E');
      expect(hoover.positions.x).toEqual(2);
      expect(hoover.positions.y).toEqual(2);
    });

    test('decrease x by 1 step with W', () => {
      hoover.moves('W');
      expect(hoover.positions.x).toEqual(0);
      expect(hoover.positions.y).toEqual(2);
    });

    test('all steps from the input', () => {
      hoover.moves('NNESEESWNWW');
      expect(hoover.positions.x).toEqual(1);
      expect(hoover.positions.y).toEqual(3);
    });

    test('position of the hoover exceed the perimeter', () => {
      for (let i = 0; i < 4; i++) {
        hoover.moves('N');
      };
      expect(hoover.positions.y).toEqual(6);
      expect(hoover.moves('N')).toEqual("Sorry can't go further");
      // expect(hoover.moves).toThrowError("Sorry can't go further");

    });
  });

  test('dirt patch collected', () => {
    hoover.moves('NNESEESWNWW');
    hoover.cleanDirt();
    expect(hoover.dirtCollect).toEqual(1);
  });
});


