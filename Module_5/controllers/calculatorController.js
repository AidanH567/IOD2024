const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = number1 - number2;

  console.log(difference);
  res.status(200).json({ result: difference });
};
const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (number2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero." });
  }
  let result = number1 / number2;

  console.log(result);
  res.status(200).json({ result: result });
};
const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = number1 * number2;

  console.log(product);
  res.status(200).json({ result: product });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
};
