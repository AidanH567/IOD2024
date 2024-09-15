// //Question 1
// function makeCounter(startFrom = 0, incrementBy = 1) {
//   let currentCount = startFrom;

//   return function () {
//     currentCount += incrementBy > 0 ? incrementBy : 1;
//     console.log(currentCount);
//     return currentCount;
//   };
// }
// let counter1 = makeCounter();
// 4;
// counter1(); // 1
// counter1(); // 2
// let counter2 = makeCounter();
// counter2();
// let counter3 = makeCounter(5); //this counter will start at 5
// counter3(); // 6
// let counter4 = makeCounter(1, 3); // This code starts at 1 and increments by 3
// counter4();
// counter4();
// counter4();

// //question 2
// console.log("Question 2");
// let delayMsg = (msg) => {
//   console.log(`This message will be printed after a delay: ${msg}`);
// };
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); //4th because 100ms delay
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); //3rd 20ms delay
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); //2nd because 0ms delay
// delayMsg("#4: Not delayed at all"); //1st because no delay
// let longTimeout = setTimeout(delayMsg, 11 * 1000, "#3: Delayed by 11 seconds"); // large delay
// setTimeout(() => {
//   //Sets timer to clear at 5 seconds
//   clearTimeout(longTimeout);
//   console.log("Timer cleared at 5 seconds");
// }, 5000);

// //Question 3
// console.log("Question 3");
// function printMe(msg) {
//   console.log("printing debounced message: " + msg);
// }

// function debounce(func, ms) {
//   let timeoutID; // To keep track of the timeout

//   return function (...args) {
//     // Clear the previous timeout if the function is called again
//     clearTimeout(timeoutID);

//     // Set a new timeout to call the original function after 1000ms of inactivity
//     timeoutID = setTimeout(() => {
//       func.apply(this, args); // Execute the original function with the correct context and arguments
//     }, ms); // user can enter the delay
//   };
// }

// printMe = debounce(printMe, 2000);

// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// //1000ms of no calls
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(() => printMe("Hi There"), 300);

//question 4

// let fibo = [1, 1, 2, 3, 5, 8, 13, 21, 34]; // setting an array for each number in fibonacci sequence
// const delay = 1000; // setting a delay

// function printFibonacci(array, limit) {
//   let index = 0; //Initialize index

//   let interval = setInterval(() => {
//     console.log(array[index]); //prints the current index of the Fibonacci number

//     index++;

//     if (index === array.length || index === limit) {
//       clearInterval(interval);
//     }
//   }, delay);
// }

// //Question 4 b) using for each and setTimeout
// function printFibonacci(array) {
//   array.forEach((number, index) => {
//     setTimeout(() => {
//       console.log(number);
//     }, delay * index);
//   });
// }

// printFibonacci(fibo, 3); // now has a limit

//Question 5

// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };

// car.description(); //works
// setTimeout(car.description, 1000); //This does not work as "this" is no longer bound to the car object
// setTimeout(() => car.description(), 2000); // as this is now an arrow function "this" is bound to the car object again

// //question b
// let car2 = { ...car };
// car2.year = 1999;
// console.log(car2);
// //question c - It uses the original values as car2 is a shallow copy and does not affect the vaalues of car 1
// //question 5d)
// setTimeout(car.description.bind(car), 3000);

// //5e Making clone does not afffect the "this" in setTimeout

// let car3 = { ...car };
// car3.model = "512";

// //question 6
// function multiply(a, b, c, d) {
//   console.log(a * b * c * d);
// }

// multiply.delay = function (ms) {
//   return function (...args) {
//     //accepts any number of arguments
//     setTimeout(() => {
//       multiply.apply(null, args);
//     }, ms);
//   };
// };

// multiply.delay(500)(5, 5, 4, 3); // prints 300 after 500 milliseconds

//question 7

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `Name: ${this.name} age: ${this.age} gender: ${this.gender}`;
};

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]
console.log(person1.toString());

//7b
const person2 = new Person("Tim James", 22, "Male");
console.log(person2.toString());

//7c
function Student() {}
