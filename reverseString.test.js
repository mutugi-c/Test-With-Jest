const reverseString = require('./reverseString')

describe('reverseString', () => {
  it('returns the reverse of a string', () => {
 
    const str = 'Today';

    const reversedStr = reverseString(str);

    expect(reversedStr).toBe('yadoT');
  });
});
