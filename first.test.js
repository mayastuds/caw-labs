// first.test.js
const first = require('./first');  

test('returns the first n elements of an array', () => {
  expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
  expect(first([1, 2, 3, 4], 2)).toEqual([1, 3]);
  


});
