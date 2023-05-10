const stringLength = (string) => {
    const length = string.length;
    if (length < 1 || length > 10) {
        throw new Error('String length should be between 1 and 10');
      }
      else return length;
}

module.exports = stringLength;
