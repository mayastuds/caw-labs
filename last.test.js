
const last = require('./last');

test('returns last n elements of an array', () => {
  expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
  expect(last([1, 2, 3, 4])).toBe(4);
  expect(last([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  expect(last(null, 2)).toEqual([]);
});
