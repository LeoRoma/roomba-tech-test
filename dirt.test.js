const Dirt = require('./dirt.js');

describe("Dirt", () => {
  let dirt;
  
  beforeEach(() => {
    dirt = new Dirt;
  });

  test('hello world', () => {
    expect(dirt.hello("hello")).toEqual("hello");
  });
});
  