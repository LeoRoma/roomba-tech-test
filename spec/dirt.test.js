const Dirt = require('../src/dirt.js');

describe("Dirt", () => {
  let dirt;
  
  beforeEach(() => {
    dirt = new Dirt;
  });

  test('testing test', () => {
    expect(dirt.hello('hello world')).toEqual('hello world');
  })
});
  