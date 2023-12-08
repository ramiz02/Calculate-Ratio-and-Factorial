const ratioFunction = require("../ratio/index");
const factorialFunction = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  const ratio = ratioFunction(num1, num2);
  const factorial = factorialFunction(num3);

  return { ratio, factorial };
}

module.exports = calculateRatioAndFactorial;
