module.exports = function getDigits(value) {
  if (typeof value !== "string") {
    value = `${value}`;
  }

  return value.split("");
};
