//Question 1
console.log("Question 1");
console.log("" + 1 + 0); //The result will be ten as the + will be concatenating 1 and 0
console.log("" - 1 + 0); // results in -1 as the - operator only works for numeric operations so the string get converted to 0
console.log(true + false); //result = 1 as numerically true = 1 and false = 0
console.log(!true); // false as ! operator makes the true statement to "not true" which is false
console.log(6 / "3"); // the / operator only works with numeric operations so it converts the string to 3. 6/3 = 2
console.log("2" * "3"); // * operator only works with numeric operations so strings convert to numbers. 2 * 3 = 6
console.log(4 + 5 + "px"); //the plus + operator works left to right so it adds 4 and 5 togeather then concatenate's 9 to "px". answer will be 9px
console.log("$" + 4 + 5); //As the string is on the left it will concatenate the whole line. answer will be $45
console.log("4" - 2); // - operator only works with numeric values so it converts string to number. answer is 4 - 2 = 2
console.log("4px" - 2); // this equals nan because it tries to convert 4px to a number which is can't
console.log(" -9 " + 5); // the plus operator concatenates the string and number resulting in -9 5
console.log(" -9 " - 5); // answer = -14 as - operator converts string to number
console.log(null + 1); // = 1 because null gets coverted to 0
console.log(undefined + 1); // undefined  converts to nan and nan + 1 = nan
console.log(undefined == null); // as == is a type coercion and null and undefined have no value it comes back to true
console.log(undefined === null); // returns false as the type of value is different
console.log(" \t \n" - 2); // it = -2 as - operator turns string to number and in the string there is a tab and a line break which does not add value to the string. So equation is 0-2 = 2

// questions 2
console.log("Question 2");
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
console.log("Question 3");
if (0) console.log("#1 zero is true"); // wont print as argument is false
if ("0") console.log("#2 zero is true"); // will print because argument is positive due to being a string
if (null) console.log("null is true"); // won't print as null is falsy
if (-1) console.log("negative is true"); // will print as a -1 is a positive valuse
if (1) console.log("positive is true"); // will print because 1 is positivve valuse

//question 4
console.log("Question 4");
let a = 2,
  b = 15;
console.log("a=", a);
console.log("b=", b);
let result = a + b;
//let result = a += b; if you use += it will make variable a = to the total value of a + b. so in this case a will = 17
message =
  result < 10
    ? `${a} + ${b} is less than 10`
    : `${a} + ${b} is greater than 10`;
console.log(message);

// question 5
console.log("Question 5");
// variable expression

const Greating = function expression(name) {
  return "Hello " + name + "!";
};
console.log(Greating("james"));

// arrow function

const arrow = (name) => "Hello " + name + "!";
console.log(arrow("Kent"));

//question 6
console.log("question 6");

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
      //if person has more than or equal to 6 fingers this code wwill run
      return "You killed my father. Prepare to die.";
    } else {
      return "nice to meet you";
    }
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);

//question 7
console.log("Question 7");

const basketballGame = {
  score: 0,
  foul: 0,

  freeThrow() {
    this.score++;
    return this; //return this to allow chaining
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  fouls() {
    this.foul++;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " + this.score + " Foul Count is " + this.foul
    );
    return this;
  },
  fullTime() {
    console.log(
      "The Fulltime score is " + this.score + " Foul Count is " + this.foul
    );
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .fouls()
  .freeThrow()
  .freeThrow()
  .fouls()
  .halfTime()
  .basket()
  .fouls()
  .threePointer()
  .fullTime();

//Question 8
console.log("Question 8");

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const berlin = {
  name: "Berlin",
  population: 1_121_000,
  state: "Easter Germany",
  founded: "1237",
  timezone: "Central European Summer Time",
  lanuage: "German",
  national_beer: "pilsner",
};

function Forin(object) {
  for (let key in object) {
    console.log(`${key}: ${object[key]}`);
  }
}
Forin(sydney);
Forin(berlin);

//Question 9
console.log("Question 9");
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

//Question a
moreSports = [...teamSports]; //moresports has the values of teamSports
moreSports.push("Basketball");
moreSports.unshift("Swimming");

//Question b
let dog2 = dog1;
dog2 = "Harry";

//Question c
let cat2 = { ...cat1 };
cat2.name = "Tom";

//Question D
console.log(teamSports); //did not make change as i made a shallow copy
console.log(dog1); //dog did not change as primitives are indipendant
console.log(cat1); //initally it did change as it is an array and it is assigned by refernce but i changed it to the spread syntax which made shallow copy

// // //Question 10
// console.log("Question 10");
// //Constrctor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.human = true;

//   this.CanDrive = function () {
//     return this.age >= 16;
//   };
// }

//rewriting using class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  CanDrive() {
    return this.age >= 16;
  }
}

const person1 = new Person("Elliot", 23);
const person2 = new Person("Flynn", 15);
const person3 = new Person("Matthew", 27);
console.log(person1);
console.log("Can Person 1 Drive?", person1.CanDrive() ? "yes" : "no");
console.log(person2);
console.log("Can Person 2 Drive?", person2.CanDrive() ? "yes" : "no");
console.log(person3);
console.log("Can Person 3 Drive?", person3.CanDrive() ? "yes" : "no");
