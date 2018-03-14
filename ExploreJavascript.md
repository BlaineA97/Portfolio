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

## Blank

#### Blank
  *
    * Example:
    ~~~
    ~~~
