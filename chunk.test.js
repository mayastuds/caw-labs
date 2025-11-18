
const chunk = require('./chunk');

test('divides an array into sub-arrays of predefined size', () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
});
