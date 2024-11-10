import React, { useState } from "react";

function Calculator() {
  const [inputs, setInputs] = useState({
    num1: "",
    num2: "",
    operator: "+",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const calculate = () => {
    const { num1, num2, operator } = inputs;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let calcResult;

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
      return;
    }

    switch (operator) {
      case "+":
        calcResult = number1 + number2;
        break;
      case "-":
        calcResult = number1 - number2;
        break;
      case "*":
        calcResult = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          calcResult = "Cannot divide by zero";
        } else {
          calcResult = number1 / number2;
        }
        break;
      default:
        calcResult = "Invalid operator";
    }

    setResult(calcResult);
  };

  return (
    <div>
      <h2>Basic Calculator</h2>
      <div>
        <input
          type="number"
          name="num1"
          value={inputs.num1}
          onChange={handleChange}
          placeholder="Enter first number"
        />
        <select name="operator" value={inputs.operator} onChange={handleChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          name="num2"
          value={inputs.num2}
          onChange={handleChange}
          placeholder="Enter second number"
        />
        <button onClick={calculate}>Calculate</button>
      </div>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default Calculator;
