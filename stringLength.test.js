const stringLength = require("./stringLength")

describe('stringLength', () => {
  test('returns the correct length of a string', () => {
    // Arrange
    const str = 'Hello';

    // Act
    const result = stringLength(str);

    // Assert
    expect(result).toBe(5);
  });

  test('throws an error when string length is not between 1 and 10', () => {
    // Arrange
    const str = 'Hello World';

    // Act and Assert
    expect(() => stringLength(str)).toThrow('String length should be between 1 and 10');
  });
});


