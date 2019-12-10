const Models = require('./models.js');

describe("Models", () => {
  let models;

  beforeEach(() => {
    models = new Models;
  });

  test('hello world', () => {
    expect(models.hello("hello")).toEqual("hello");
  });

  test('get the start position', () => {
    expect(models.getHooverPositions()).toEqual({ x: 1, y: 2 });
  });
});