// Question 1
console.log("Question 1");
// my first inital attempt at Question 1
function Capital(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}
console.log(Capital("hello There"));
// my second attempt at Question 1
function ucFirstLetters(str) {
  return str
    .split(" ") // Split the string into an array of words
    .map(
      (
        word // Map over each word in the array
      ) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter and concatenate with the rest of the word
    )
    .join(" "); // Join the array of words back into a single string with spaces
}
console.log(ucFirstLetters("capitalize each word please"));

//Question 2
console.log("Question 2");

//Attempt 1 With out Conditional Operator not clean
// function truncate(str, max) {
//   let stringLength = str.length;

//   if (stringLength >= max) {
//     stringLength = max;
//     let newString = str.substring(0, max);
//     let display = newString + " .....";
//     console.log(display);
//   } else {
//     console.log(str);
//   }
// }
//attempt 2 Without Conditional Operator. Much Cleaner
function truncate(str, max) {
  if (str.length > max) {
    console.log(str.substring(0, max) + " ....."); // Truncate and add ellipsis
  } else {
    console.log(str); // Output the original string if it's within the limit
  }
}

// with conditional operator
function truncate2(str, max) {
  let stringLength = str.length;
  let newString = str.substring(0, max);
  stringLength >= max ? console.log(newString + ".....") : console.log(str);
}
truncate("asdadaasdasd", 5);
truncate2("adsadasa", 2);

//question 3
console.log("Question 3");

const animals = ["Tiger", "Giraffe"];
console.log(animals);
//3a
animals.push("Dog", "Cow");
console.log(animals);
//3b
animals.unshift("Cat", "Mouse");
console.log(animals);

console.log("3c");
console.log(animals.sort());

// Question 3 D middle function
function replaceMiddleAnimal(newValue) {
  let middle = animals[Math.round((animals.length - 1) / 2)];
  indexMiddle = animals.indexOf(middle);
  console.log(indexMiddle);

  console.log(middle);
  let addValue = animals.splice(indexMiddle, 0, newValue);
}
replaceMiddleAnimal("Horse");
console.log(animals);

// Beings with function
function findMatchingAnimals(beginsWith) {
  const lowercase = beginsWith.toLowerCase();
  return animals.filter((animal) => animal.toLowerCase().startsWith(lowercase));
}
console.log(findMatchingAnimals("c"));
console.log(findMatchingAnimals("t"));

// Question 4
console.log("Question 4");
// attempt 1 of Question 4 - help with AI using the conditional operator
function camelCase(cssProp) {
  return cssProp
    .split("-") // split from dash
    .map(
      (
        word,
        index // loop between words, first word remains unchanged
      ) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    )
    .join("");
  //join the words back togeather without seporators;
}
console.log(camelCase("font-family"));

//question 4b
// Using different types of for loops
//standard for loop without conditional operator
function forLoopCamelCase(cssProp) {
  let words = cssProp.split("-"); // This splits the words by the "-"
  for (let i = 1; i < words.length; i++) {
    // This loop will interate over each word as long as index is less than the words length
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(""); // this will return the word back without any spaces
}
console.log(forLoopCamelCase("hello-there"));

//Question 5 a

console.log("Question 5a");
let twentyCents = 0.2;
let tenCents = 0.1;
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);
//why is this not working? - it is not working as javascript is concatenating the strings instead of adding them togeather. you would need to use parseFloat() to convert the strings back to numbers.

//5b
function currentlyAddition(float1, float2) {
  // round floats safely using toFixed()
  let sum = parseFloat((float1 + float2).toFixed(2));
  return sum;
}
console.log(currentlyAddition(0.2, 0.1));

//5c using Math.opw to conevert to whole number, then using switch expression to change the result based of what operator
function currencyOperation(float1, float2, operation) {
  let factor = Math.pow(10, 2); // using Math.poww to turn float into whole number  eg 0.23 turns into 23
  let int1 = Math.round(float1 * factor);
  let int2 = Math.round(float2 * factor);
  switch (operation) {
    case "+":
      result = (int1 + int2) / factor;
      break;
    case "-":
      result = (int1 - int2) / factor;
      break;
    case "*":
      result = ((int1 * int2) / (factor * factor)).toFixed(2); //using to fixed to round to 2DP

      break;
    case "/":
      result = (int1 / int2).toFixed(2);
      break;
  }
  return result;
}

console.log(currencyOperation(0.23, 0.13, "+"));
console.log(currencyOperation(0.45, 0.76, "-"));
console.log(currencyOperation(0.46, 0.44, "/"));
console.log(currencyOperation(0.78, 0.23, "*"));

//question 6
// I will use the filter function to remove duplicates.
console.log("Question 6");
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

// function unique(duplicatesArray) {
//  let Array2 = duplicatesArray.filter(function (item, index, array){  //setting call back function for array

//   return index == array.indexOf(item);
//  })

//  return Array2;

// };

function unique(duplicatesArray) {
  let Array1 = duplicatesArray.filter(
    (
      item,
      index //setting call back function for array
    ) => index == duplicatesArray.indexOf(item)
  );

  return Array1;
}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

//question 7

console.log("Question 7");

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

//7a
function getBookTitle(bookId) {
  let findBook = books.find((book) => book.id == bookId);
  return findBook.title;
}
console.log(getBookTitle(2));
console.log(getBookTitle(4));

//7b
function getOldBooks(array) {
  let bookAge = books.filter((book) => book.year < 1950);
  return bookAge;
}
console.log(getOldBooks(books));

//Practice for loop and map
// for (let book of books) {
//   console.log(book.title + " for of");
// }
// books.map((book) => {
//   console.log(book.title + "map");
// });

//7c

const addGenre = (arr, genre) => {
  return arr.map((book) => ({
    ...book, // this spread operator keeps all elements of array
    genre: genre, // this adds the new genre key to the array
  }));
};
const updatedBooks = addGenre(books, "Classic"); // creating a variable that adds the new value in the array
console.log(updatedBooks);

//7d

//Question 8

//8a
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

console.log(phoneBookABC);

//8b
const phoneBookDEF = new Map();
phoneBookDEF.set("Dan", "0412312343");
phoneBookDEF.set("Elliot", "0433221117");
phoneBookDEF.set("Frank", "0455221182");
console.log(phoneBookDEF);

//8c
phoneBookABC.set("Caroline", "0455224231");

console.log(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log(phoneBook);

//Question 9

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let sum = 0;

  Object.values(salaries).forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let values = Object.values(salaries);
  let names = Object.keys(salaries);
  let highSalary = Math.max(...values);
  let highEarner = names[values.indexOf(highSalary)];

  return highEarner;
}

console.log(topEarner(salaries));

//Question 10
console.log("Question 10");

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

//10a
const hours = today.getHours();
const minutes = today.getMinutes();
const totalMinutes = hours * 60 + minutes;
console.log(totalMinutes + " minutes have passes so far");

//10b
const seconds = today.getSeconds();
const totalseconds = hours * 60 * 60 + minutes * 60 + seconds;
console.log(totalseconds + " seconds have passes so far");

//10 c

const birthday = new Date("2000-07-01T00:00:00");

const difference = today - birthday;

const millisecondsInSecond = 1000;
const millisecondsInMinute = millisecondsInSecond * 60;
const millisecondsInHour = millisecondsInMinute * 60;
const millisecondsInDay = millisecondsInHour * 24;

// Calculate the number of days, hours, minutes, and seconds
const days = Math.floor(difference / millisecondsInDay);

const hours1 = Math.floor(
  (difference % millisecondsInDay) / millisecondsInHour
);
const minutes2 = Math.floor(
  (difference % millisecondsInHour) / millisecondsInMinute
);
const seconds3 = Math.floor(
  (difference % millisecondsInMinute) / millisecondsInSecond
);
const years = Math.floor(days / 365);
console.log(
  `${years} Years,${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);

//D

function daysInBetween(date1Str, date2Str) {
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  const timeDif = Math.abs(date1 - date2);

  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;

  const days = Math.floor(timeDif / millisecondsInDay);
  const hours = Math.floor((timeDif % millisecondsInDay) / millisecondsInHour);
  const minutes = Math.floor(
    (timeDif % millisecondsInHour) / millisecondsInMinute
  );
  const seconds = Math.floor(
    (timeDif % millisecondsInMinute) / millisecondsInSecond
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

console.log(daysInBetween("2023-09-07T00:00:00", "2000-09-07T00:00:00"));
