const capitalize = (string) => {
  const capFirstLetter = string.charAt(0).toUpperCase();
  const otherLetters = string.slice(1);
  return capFirstLetter + otherLetters;
}

module.exports = capitalize;
