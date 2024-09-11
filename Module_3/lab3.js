function makeCounter(startFrom, incrementBy) {
  let currentCount = 0;
  if (startFrom > 0) {
    //using an if state to make the current count = Startfrom if startfrom is bigger than 0
    currentCount = startFrom;
  }
  return function () {
    if (incrementBy > 0) {
      currentCount = currentCount + incrementBy;
      console.log(currentCount);
      return currentCount;
    } else {
      currentCount++;
      console.log(currentCount);
      return currentCount;
    }
  };
}
let counter1 = makeCounter();
4;
counter1(); // 1
counter1(); // 2
let counter2 = makeCounter();
counter2();
let counter3 = makeCounter(5); //this counter will start at 5
counter3(); // 6
let counter4 = makeCounter(1, 3); // This code starts at 1 and increments by 3
counter4();
counter4();
counter4();

//question 2

// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
let delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); //4th because 100ms delay
setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); //3rd 20ms delay
setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); //2nd because 0ms delay
delayMsg("#4: Not delayed at all"); //1st because no delay
let longTimeout = setTimeout(delayMsg, 11 * 1000, "#3: Delayed by 11 seconds"); // large delay
setTimeout(() => {
  //Sets timer to clear at 5 seconds
  clearTimeout(longTimeout);
  console.log("Timer cleared at 5 seconds");
}, 5000);

//Question 3

function printMe() {
  console.log("printing debounced message");
}

function debounce(func, ms) {
  let timeoutID; // To keep track of the timeout

  return function (...args) {
    // Clear the previous timeout if the function is called again
    clearTimeout(timeoutID);

    // Set a new timeout to call the original function after 1000ms of inactivity
    timeoutID = setTimeout(() => {
      func.apply(this, args); // Execute the original function with the correct context and arguments
    }, ms); // user can enter the delay
  };
}

printMe = debounce(printMe, 2000);

//create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

//question 4

let fibo = [1, 1, 2, 3, 5, 8, 13, 21, 34]; // setting an array for each number in fibonacci sequence
const delay = 1000; // setting a delay
function printFibonacci(array) {
  array.forEach((number, index) => {
    //using a for each array to go over each item of the fibonacci sequence
    setTimeout(() => {
      console.log(number);
    }, delay * index);
  });
}

printFibonacci(fibo);

function logDecorator(fn) {
  return function (...args) {
    console.log("calling function");
    const result = fn(...args);
    console.log("function called");
    return result;
  };
}
function sum(a, b) {
  return a + b;
}
const decoratedSum = logDecorator(sum);
console.log(decoratedSum(2, 3));
