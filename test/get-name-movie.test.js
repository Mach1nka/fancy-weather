const getName = require('../modules/get-name-movie');

test('must return Iron Man', () => {
  expect(getName({value: 'Iron Man'})).toBe("Iron Man");
});
