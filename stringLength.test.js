const stringLength = require("./stringLength")

test('Hello returns 5', () => {
    expect(stringLength('Hello')).toBe(5);
});

test('An error occurs since stringLength is not between 0 and 10', () => {
    expect(() => stringLength('Hello World')).toThrow('String length should be between 1 and 10');
})

