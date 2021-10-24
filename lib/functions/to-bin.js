/* constants */
const BASE = require("../constants/bases");

module.exports = function toBin(value, base = BASE.DECIMAL) {
  let input = +value;
  let output = "";

  while (input > 0) {
    const module = input % 2;

    output = module + output;

    input = Math.floor(input / 2);
  }

  return output;
};
