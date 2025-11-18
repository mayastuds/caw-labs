
const myColor = ["Red", "Green", "White", "Black"];

test('joins array of strings into a single string', () => {
  expect(myColor.toString()).toBe("Red,Green,White,Black");
  expect(myColor.join()).toBe("Red,Green,White,Black");
  expect(myColor.join(' ')).toBe("Red Green White Black");
});
