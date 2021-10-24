/* constants */
const BASE = require("../constants/bases");

/* utils */
const { getDigits } = require("../utils");

const algorithms = {
  [BASE.BINARY]: (digit, exponent) => digit * BASE.BINARY ** exponent,

  run: (base, ...args) => {
    const runtime = algorithms[base];

    if (runtime) {
      return runtime(...args);
    }

    throw new Error(`Unrecognized or unsupported numeric base "${base}"`);
  },
};

module.exports = function toDec(value, base = BASE.DECIMAL) {
  const digits = getDigits(value);
  const max = digits.length - 1;

  let output = 0;

  for (let i = max; i >= 0; i--) {
    const digit = +digits[i];
    const exponent = max - i;

    output += algorithms.run(base, digit, exponent);
  }

  return output;
};
