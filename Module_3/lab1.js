//Question 1
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);

// questions 2
let three = "3";
let four = "4";
let thirty = "30";

let addition = three + four; // should be six however the syntax is concatenating string instead of addition
console.log(addition);
let multiplication = three * four; // =12
console.log(multiplication);
let division = three / four; // 0.75
console.log(division);
let subtraction = three - four; // -1
console.log(subtraction);
let lessThan1 = three < four; // true
console.log(lessThan1);
let lessThan2 = thirty < four; // false
console.log(lessThan2);

// question 3
if (0) console.log("#1 zero is true"); // wont print as argument is false
if ("0") console.log("#2 zero is true"); // will print because argument is positive due to being a string
if (null) console.log("null is true"); // won't print as null is falsy
if (-1) console.log("negative is true"); // will print as a -1 is a positive valuse
if (1) console.log("positive is true"); // will print because 1 is positivve valuse

//question 4
let a = 2,
  b = 15;
let result = a + b;
message =
  result < 10
    ? `${a} + ${b} is less than 10`
    : `${a} + ${b} is greater than 10`;
console.log(message);

// question 5
// variable expression

const Greating = function expression(name) {
  return "Hello " + name + "!";
};
console.log(Greating("james"));

// arrow function

const arrow = (name) => "Hello " + name + "!";
console.log(arrow("Kent"));

//question 6

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}
     ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers >= 6) {
      return "You killed my father. Prepare to die.";
    } else {
      return "nice to meet you";
    }
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

//question 7
const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
];

console.log(products[2].category);