/* constants */
const Base = require("../constants/bases");

/* utils */
const { getDigits } = require("../utils");

const algorithms = {
  [Base.BINARY]: (digit, exponent) => digit * Base.BINARY ** exponent,
};

module.exports = function toDec(value, base = Base.DECIMAL) {
  const digits = getDigits(value);
  const max = digits.length - 1;

  let output = 0;

  for (let i = max; i >= 0; i--) {
    const digit = +digits[i];
    const exponent = max - i;

    output += algorithms[base](digit, exponent);
  }

  return output;
};
