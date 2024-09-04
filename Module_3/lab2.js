// Question 1
      // my first initaal attempt at Question 1
      function Capital(word) {
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalized;
      }
      console.log(Capital("hello There"));
      // my second attempt at Question 1
      function ucFirstLetters(str) {
        return str
            .split(' ')   // Split the string into an array of words
            .map(word =>  // Map over each word in the array
                word.charAt(0).toUpperCase() + word.slice(1)  // Capitalize the first letter and concatenate with the rest of the word
            )
            .join(' ');   // Join the array of words back into a single string with spaces
    }
    console.log(ucFirstLetters("capitalize each word")); 

      //Question 2
      //With out Coditional Operator
      function truncate(str, max) {
        let stringLength = str.length;

        if (stringLength >= max) {
          stringLength = max;
          let newString = str.substring(0, max);
          let display = newString + " .....";
          console.log(display);
        } else {
          console.log(str);
        }
      }

      // with conditional operator
      function truncate2(str, max) {
        let stringLength = str.length;
        let newString = str.substring(0, max);
        let conOper =
          stringLength >= max
            ? console.log(newString + ".....")
            : console.log(str);
      }
      truncate("asdadaasdasd", 8);

      truncate2("adsadasa", 5);

      //question 3

      const animals = ["Tiger", "Giraffe"];
      console.log(animals);

      animals.push("Dog", "Cow");
      console.log(animals);

      animals.unshift("Cat", "Mouse");
      console.log(animals);

      animals.sort();

      // middle function
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
        // In comments was my first attempt
        //   const result = animals.map((animal) => animal[0]).join("");
        //   console.log(result);
        //   const letterFilter = results.filter(beginsWith);
        // }
        // findMatchingAnimals("C");

        return animals.filter((animal) => animal.startsWith(beginsWith));
      }
      console.log(findMatchingAnimals("C"));

      // Question 4
      // attempt 1 of Question 4 - help with AI using the conditional operator
      function camelCase(cssProp) {
        return cssProp
          .split("-") // split from dash
          .map(
            (
              word,
              index // loop between words, first word remains unchanged
            ) =>
              index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");
        //join the words back togeather without seporators;
      }
      console.log(camelCase("font-family"));

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
      console.log(forLoopCamelCase('hello-there'))

      //Question 5 a
      let twentyCents = 0.2;
      let tenCents = 0.1;
      let fixedTwenty = twentyCents.toFixed(2);
      let fixedTen = tenCents.toFixed(2);
      console.log(fixedTwenty + fixedTen); 
      //why is this not working? - it is not working as javascript is concatenating the strings instead of adding them togeather. you would need to use parseFloat() to convert the strings back to numbers.

      //5b
      function currentlyAddition(float1, float2) {
        // round floats safly using toFixed()
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

  const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
  const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

  let Array2 = []; // this is an empty array which the arrays will enter to then get the duplicaates removed.

  function unique(duplicatesArray) {
   let Array2 = duplicatesArray.filter(function (v, i, self){  //setting call back function for array 

    return i == self.indexOf(v);
   })

   return Array2;

  };
  

    console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
    console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
        
  //question 7 

  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
//7a
    function getBookTitle(bookId) {
      let findBook = books.find(book => book.id == bookId)
      return findBook.title; 
    };
    console.log(getBookTitle(2));
    console.log(getBookTitle(4));

  //7b
  function getOldBooks(array) {
    let bookAge = books.filter(book => book.year < 1950);
    return bookAge;
  }
  console.log(getOldBooks(books));

  //7c 
     
     const addGenre = (arr, genre) => {
      return arr.map(book => ({ ...book, // this spread operator keeps all elements of array
        genre: genre // this adds the new genre key to the array
      
        
      }));
     };
     const updatedBooks = addGenre(books, "Classic") // creating a variable that adds the new value in the array
     console.log(updatedBooks);
  
  //7d 

  let bookName = books.filter(book => book.title ==)
