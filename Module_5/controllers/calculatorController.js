const Calculator = require("../libraries/Calculator");
let myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2);
  res.status(200).json({ result: sum });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = myCalc.subtract(number1, number2);
  res.status(200).json({ result: difference });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  try {
    let result = myCalc.divide(number1, number2);
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = myCalc.multiply(number1, number2);
  res.status(200).json({ result: product });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
};
