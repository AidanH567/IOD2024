// Question 1
      // my first initaal attempt at Question 1
      function Capital(word) {
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalized;
      }
      console.log(Capital("hello There"));
      // my second attempt at Question 1
      function ucFirstLetters(str) {}

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
      truncate("as", 8);

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
      //standards for loop
      function forLoopCamelCase(cssProp) {
        let words = cssProp.split("-"); // This splits the words by the "-"
        for (let i = 1; i < words.length; i++) {
          // This loop will interate over each word as long as index is less than the words length
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join(""); // this will return the word back without any spaces
      }

      //Question 5 a
      let twentyCents = 0.2;
      let tenCents = 0.1;
      let fixedTwenty = twentyCents.toFixed(2);
      let fixedTen = tenCents.toFixed(2);
      console.log(fixedTwenty + fixedTen); //why is this not working? - it is not working as javascript is concatenating the strings instead of adding them togeather. you would need to use parseFloat() to convert the strings back to numbers.

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