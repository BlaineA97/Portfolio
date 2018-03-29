# Javascript Examples:

## Functions:
  * Functions in JavaScript are generally declared as either a function declaration or a function expression.
    * Functions are written to perform a task.
    * Functions take data, perform a set of tasks on the data, and then return the result.
    * We can define parameters to be used when calling the function.
    * When calling a function, we can pass in arguments, which will set the function's parameters.
    * We can use return to return the result of a function which allows us to call functions anywhere, even inside other functions.

#### Function Declarations
  > A function declaration is a function that is bound to an identifier or name.

  ~~~
  const square = function (number) {
    return number * number;
  };

  console.log(square(5));
  // Output: 25.
  ~~~
  ~~~
  function isGreaterThan (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return true
     } else {
        return false
     }
  }

  console.log(isGreaterThan(10, 5));
  // Output: true
  ~~~

#### Function Expressions
  > A function expression is similar to function declaration, with the exception that identifier can be omitted, creating an anonymous function.
  > Function expressions are often stored in a variable. You can identify a function expression by the absence of a function name immediately trailing the function keyword.

  ~~~
  const square = (number) => {
    return number * number;
  };

  console.log(square(5));
  // Output: 25.
  ~~~
  ~~~
  const isGreaterThan = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        return true
     } else {
        return false
     }
  }

  console.log(isGreaterThan(10, 5));
  // Output: true
  ~~~

#### Arrow Functions
  > JavaScript also provides several ways to refactor arrow function syntax.

##### Arrow Function Type: Concise Body

  > Functions that take a single parameter should not use parentheses. The code will still work, but it's better practice to omit the parentheses around single parameters. However, if a function takes zero or multiple parameters, parentheses are required.

  > A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

  > A function composed of a sole single-line block does not need brackets.

  * Concise Body Examples:
    * The parentheses around celsius have been removed, since it is a single parameter.
    * The return keyword has been removed since the function consists of a single-line block.
    * The {} have been removed, again, since the function consists of a single-line block.
      * Example One:
      ~~~
      const multiplyByNineFifths = (celsius) => {
        return celsius * (9/5);
      };

      // Is the same as:

      const multiplyByNineFifths = celsius => celsius * (9/5);
      ~~~
      * Example Two:
      ~~~
      const getFahrenheit = (celsius) => {
        return multiplyByNineFifths(celsius) + 32;
      };

      // Is the same as:

      const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;
      ~~~
      * Example Three:
      ~~~
      const volumeOfSphere = (diameter) => {
        return (1/6) * Math.PI * diameter * diameter * diameter;
      };

      // Is the same as:

      const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;
      ~~~
## Scope
  * Scope refers to where a variable can be accessed in a program. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context. Scope depends entirely on where a variable is declared.
  * Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
  * Global Scope refers to variables that are accessible to every part of the program.
  * Block Scope refers to variables that are accessible only within the block they are defined.

#### Global Scope
  > Variables defined in the global scope are declared outside of a set of curly braces {}, referred to as a block, and are thus available throughout a program.

  * Example One:
    * Here the variable color is declared outside of the function block, giving it global scope.
    * In turn, color can be accessed within the colorOfSky function.
    * Global variables make data accessible from any place within a program.
  ~~~
  const color = 'blue'

  const colorOfSky = () => {
    return color; // blue
  };

  console.log(colorOfSky()); // blue
  ~~~
  * Example Two:
  ~~~
  const satellite = 'The Moon';
  const galaxy = 'The Milky Way';

  let stars = 'North Star'

  const myNightSky = () => {
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
  }

  console.log(myNightSky())
  // Output: "Night Sky: The Moon, North Star, The Milky Way"
  ~~~

  > While it's important to know what global scope is, it's better to avoid defining variables in the global scope. Globally scoped variables can collide with variables that are more locally scoped, causing unexpected behavior in our code.

  > By adding a variable to our function we change the code in unexpected ways:

  ~~~
  const satellite = 'The Moon';
  const galaxy = 'The Milky Way';
  let stars = 'North Star'

  const myNightSky = () => {
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ',' + stars + ',' + galaxy;
  }

  console.log(myNightSky())
  // Output: "Night Sky: The Moon, Sirius, The Milky Way"

  console.log(stars)
  //Output: "Sirius"
  ~~~

#### Block Scope
  * Because of the challenges with global scope, it is preferable to define variables in block scope.
  * A block refers to the {} braces of a function, a loop, or an if statement, and serves as an important structural marker for our code.
  * Block scope means that a variable defined in the block is only accessible within the curly braces.

  * Example One:
  ~~~
  const colorOfSky = () => {
    let color = 'blue';
    console.log(color); // blue
  };

  colorOfSky(); // blue
  console.log(color); // undefined
  ~~~
  * Example Two:
  ~~~
  const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves)
  }

  visibleLightWaves()
  // Output: "Moonlight"

  console.log(lightWaves)
  // Output: Error (Because the variable is not available outside of the Block Scope.)
  ~~~
  * Example Three: (Using If Statements)
  ~~~
  const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
  	  let lightWaves = 'Northern Lights';
  	  console.log(lightWaves)
      // Output: 'Northern Lights'
    }
    console.log(lightWaves)
    // Output: 'Moonlight'
  }

  visibleLightWaves()
  ~~~
  * Example Four: (Using For Loops)
    * Here the variable i is defined in the cloudCount() function.
    * Within the for loop block, we again define i, as a value that will be incremented.
    * The local value of i, whether defined in the function block or the for loop, has no impact on the global scope of our program.
    ~~~
    const cloudCount = () => {
      let i = 2;
      console.log(i); // 2
      for (let i = 0; i < 10; i++) {
        console.log(i); // All numbers from 0 to 9
      }
    };

    cloudCount();
    console.log(i); // undefined
    ~~~
    * Example Five: (Using For Loops)
    ~~~
    const starCount = () => {
      let i = 5;
      console.log(i) // Output: 5
      for (let i = 0 ; i < 12 ; i++) {
    	  console.log(i) // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      }
    }

    starCount()
    // Output: 5 & 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    console.log(i)
    // Output: Error (Because the variable is not available outside of the Block Scope.)
    ~~~

## Arrays
  * Arrays are JavaScript's way of making lists. These lists can store any data types (including strings, numbers, and booleans) and they are ordered, meaning each item has a numbered position.
    Example One:
    ~~~
    let newYearsResolutions = ['a', 'b', 'c']
    console.log(newYearsResolutions)
    // Output: [ 'a', 'b', 'c' ]
    ~~~

#### Arrays: Property Access
  * Each item in an array has a numbered position. We can access individual items using their numbers, just like we would in an ordinary list.
  * Something important to note is that JavaScript starts counting from 0 rather than 1, so the first item in an array will be at position 0. This is because JavaScript is zero-indexed.

    * Example One: (Selecting an Item in an Array)
    ~~~
    let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

    console.log(newYearsResolutions[0]);
    // Output: 'Rappel into a cave'

    console.log(newYearsResolutions[2]);
    // Output: 'Learn to juggle'
    ~~~
    * Example Two: (Selecting a letter in a String)
    ~~~
    let hello = 'Hello World';

    console.log(hello[6]);
    // Output: W

    console.log(hello[1]);
    // Output: e
    ~~~
    * Example Three: (Selecting an Item by making it a variable)
    ~~~
    let newYearsResolutions = ['a', 'b', 'c']
    let listItem = newYearsResolutions[0]

    console.log(listItem)
    // Output: 'a'
    ~~~

#### Arrays: Update Elements
  * `seasons[3] = "Autumn";` tells our program to change the item at index 3 of the seasons array to be "Autumn" instead of what is already there.
  ~~~
  let seasons = ["Winter", "Spring", "Summer", "Fall"];

  console.log(seasons)
  //Output: [ 'Winter', 'Spring', 'Summer', 'Fall' ]

  seasons[3] = "Autumn";
  console.log(seasons)
  //Output: [ 'Winter', 'Spring', 'Summer', 'Autumn' ]
  ~~~

#### Arrays: Length Property
  * We may wish to know how many items are stored inside of an array.
  * We can find this out by using one of an array's built-in properties, called length.
  * We can attach this to any variable holding an array and it will return the number of items inside.
    * Example One: (Length will return the number of Items in the Array)
    ~~~
    let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class'];

    console.log(newYearsResolutions.length);
    // Output: 2
    ~~~
    * Example Two: (Length will return the number of Items in the Array)
    ~~~
    let newYearsResolutions = ['a', 'b', 'c']

    console.log(newYearsResolutions.length)
    // Output: 3
    ~~~

#### Arrays: Built in Methods
  * JavaScript has built in methods for arrays that help us do common tasks. Let's learn some of them.
  * Learn more about each method at [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

##### `push()`
  * `.push()` allows us to add items to the end of an array.
    * Example:
    ~~~
    let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    groceryList.push('honey');
    console.log(groceryList);
      // Output: ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains', 'honey'];
    ~~~

##### `pop()`
  * `.pop()` removes the last item of an array.
    * Example:
    ~~~
    let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    groceryList.pop();
    console.log(groceryList);
      // Output: ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil'];
    ~~~

##### `.shift()`
  * `.shift()` removes the first item from an Array.
    * Example:
    ~~~
    let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    groceryList.shift();
    console.log(groceryList);
      // Output: ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    ~~~

##### `.unshift()`
  * `.unshift()` adds the item to the front of an Array.
    * Example:
    ~~~
    let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    groceryList.unshift('popcorn')
    console.log(groceryList);
      // Output: ['popcorn', 'orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]
    ~~~

##### `.slice()`
  * `.slice(startingIndex, [optionalEndingIndex])` allows you to make a new Array using part of an existing array.
  * The original Array will not be modified.
    * Example:
    ~~~
    let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
    console.log(groceryList.slice(1, 4));
      // Output: ['orange juice', 'bananas', 'coffee beans']
    ~~~
    * `.slice(1,4)` extracts the second element through the fourth element (elements indexed 1, 2, and 3).

#### Arrays: with let and const
  * You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
  * Variables that are assigned with const cannot be reassigned. However, arrays that are declared with const remain mutable, or changeable.
  * This means that we can change the contents of an array, but cannot reassign the variable name to a new array or other data type.
    * Example:
    ~~~
    let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
    const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

    condiments = ['Relish']
    console.log(condiments)
      // Output: [ 'Relish' ] (This Array allows change because it used let)

    utensils = ['Sporks']
      // Output: ERROR (This change would not work because it used const is is therefore unchangeable)
    ~~~

#### Arrays: Conclusion
  * Arrays are lists and are a way to store data in JavaScript.
  * Arrays are created with brackets [].
  * Each item inside of an array is at a numbered position, starting at 0.
  * We can access one item in an array using its numbered position, with syntax like: myArray[0].
  * We can also change an item in an array using its numbered position, with syntax like myArray[0] = "new string";
  * Arrays have a length property, which allows you to see how many items are in an array.
  * Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
  * Arrays have many other methods that perform different functions, such as .slice() and .shift(). You can read the documentation for any * array method on the Mozilla Developer Network website.
  * Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable; they can be * changed. However, a variable declared with const cannot be reassigned.

## Loops
  * Loops let us tell the computer to loop over a block of code so that we don't have to write out the same process over and over.
  * Loops are especially useful when we have an array where we'd like to do something to each of its items, like logging each item to the console.
  * There are two kinds of loops:
    * for loops, which let us loop a block of code a known amount of times.
    * while loops, which let us loop a block of code an unknown amount of times.

#### Loops: for Loops, Forwards
  * Instead of writing out the same code over and over, let’s make the computer loop through our array for us. We can do this with for loops.
    * Example:
    ~~~
    let animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

    for (let animalIndex = 0; animalIndex < animals.length; animalIndex++) {
      console.log(animals[animalIndex]);
    }

    // Output:
    // Grizzly Bear
    // Sloth
    // Sea Lion
    ~~~
    * Breakdown:
    ~~~
    for ( [START CONDITION] ; [END CONDITION] ; [ITERATOR] ) {
      CODE BLOCK
    }
    ~~~
      * Within the for loop's parentheses, the **start condition** is let animalIndex = 0, which means the loop will start counting at 0. animalIndex is called an iterator variable and it is a good practice to give this variable a descriptive name.
      * The **stop condition** is animalIndex < animals.length, which means the loop will run as long as animalIndex is less than the length of the animals array. When animalIndex is equal to the length of the animals array, the loop will stop executing.
      * The **iterator** is animalIndex++. This means that after each loop, animalIndex will increase by 1.
      * Finally, the **code block** is inside of the { and } curly braces. The block will execute each loop until the program reaches the stop condition.
      * The secret to loops is that animalIndex, the variable we created inside the for loop's parentheses, is equal to a number. To be more clear, the first loop, animalIndex will equal 0, the second loop, animalIndex will equal 1, and the third loop, animalIndex will equal 2.
      * Loops make it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand. We can write a for loop and replace the hard-coded number with the variable animalIndex, like this: animals[animalIndex].
    * Example Two:
    ~~~
    const vacationSpots = ['Seattle', 'Ireland', 'Britain']

    for (let vacationSpotIndex = 0 ; vacationSpotIndex < vacationSpots.length ; vacationSpotIndex++ ) {
      console.log('I would love to visit ' + vacationSpots[vacationSpotIndex])
    }

    // Output:
    // I would love to visit Seattle
    // I would love to visit Ireland
    // I would love to visit Britain
    ~~~

#### Loops; for Loops, Backwards
  * We can make our loop run backward by modifying the start, stop, and iterator conditions.
      * Example:
      ~~~
      const vacationSpots = ['Seattle', 'Ireland', 'Britain']

      for (let vacationSpotIndex = (vacationSpots.length - 1) ; vacationSpotIndex >= 0 ; vacationSpotIndex-- ) {
        console.log('I would love to visit ' + vacationSpots[vacationSpotIndex])
      }
      // Output:
      // I would love to visit Britain
      // I would love to visit Ireland
      // I would love to visit Seattle
      ~~~
      * To do this, we'll need to edit the code between the for loop's parentheses:
      * The start condition should set vacationSpotIndex to the length of the array.
      * The loop should stop running when vacationSpotIndex is less than 0.
      * The iterator should subtract 1 each time, which is the purpose of vacationSpotIndex--.

#### Loops: Nested for Loops
  * Let's say that you and a friend would like to go on vacation together. You've both made arrays of your favorite places and you want to compare to see if any of them match. This is a job for loops!
    * The big idea is that we can run a for loop inside another for loop to compare the items in two arrays.
    * Every time the outer for loop runs once, the inner for loop will run completely.
    * These are called nested for loops and we can use them to check to see if any of your vacation spots match your friend's spots.
      * Example:
      ~~~
      let myPlaces = ['New Zealand', 'San Francisco', 'Canada'];
      let friendPlaces = ['Canada', 'England', 'Scottland']

      for ( let myPlacesIndex = 0 ; myPlacesIndex < myPlaces.length ; myPlacesIndex++ ) {
        for (let friendPlacesIndex = 0 ; friendPlacesIndex < friendPlaces.length ; friendPlacesIndex++) {
          if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
            console.log(myPlaces[myPlacesIndex])
          }
        }
      }
       // Output: Canada
      ~~~

#### Loops: Beware Infinite Loops
  * A common infinite loop occurs when the condition of the while statement is set to true. Below is an example of code that will run forever.
    * Example:
    ~~~
    // Initiate an infinite loop
      while (true) {
          // execute code forever
      }
    ~~~
  * The loop begins with i = 0.
  * After one iteration through the loop, i is equal to -1. This is because i begins at 0 and 1 is subtracted from i each loop.
    * Example:
    ~~~
    for (let i = 0; i < array.length; i--) {
       //some code
    }
    ~~~

## Iterators
  *

#### forEach()
  * `forEach()` will execute the same code on each element of an array.
  * Things to keep in mind about the forEach() function:
    * It is an array method. It must be called upon an array.
    * Any changes to the iterated array value won't be updated in the original array.
    * The return value is undefined.
  * Both of the below examples achieve the same result:
    * Example One (ES5 Style):
    ~~~
    let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];

    groceries.forEach(function(groceryItem) {
      console.log(' - ' + groceryItem);
    });
    ~~~
    * Example Two (ES5 Style):
    ~~~
    let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

    fruits.forEach(function(fruitName) {
      console.log("I want to eat a " + fruitName)
    });
    ~~~
    * Example One (ES6 Style):
    ~~~
    let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];

    groceries.forEach(groceryItem => console.log(' - ' + groceryItem));
    ~~~
    * Example Two (ES6 Style):
    ~~~
    let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

    fruits.forEach(fruitName => console.log("I want to eat a " + fruitName));
    ~~~

#### Blank
  *
    * Example:
    ~~~
    ~~~

## Blank
  *

#### Blank
  *
    * Example:
    ~~~
    ~~~
