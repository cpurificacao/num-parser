module.exports = function getNibbles(value) {
  if (typeof value !== "string") {
    value = `${value}`;
  }

  return value.match(/\d{4}/g);
};
