# Explore JavaScript:

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
  * [MDN Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
  * Iterators are built-in Javascript functions that allow the developer to easily manipulate their code.
  * While parameters do not require specific naming, it is best practice to name them to be easily identified by other developers.

#### forEach()
  * .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
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

#### .map()
  * .map() executes the same code on every element in an array and returns a new array with the updated elements.
    * Example:
    ~~~
    let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

    let secretMessage = animals.map(animal => animal.charAt(0));

    console.log(secretMessage.join(''));
    // Output: HelloWorld
    ~~~
    * Example:
    ~~~
    let bigNumbers = [100, 200, 300, 400, 500];

    let smallNumbers = bigNumbers.map(num => num/100);
    // Output: [1, 2, 3, 4, 5]
    ~~~

#### .filter()
  * `.filter()` checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
  * Example One (ES5 Style):
  ~~~
  let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

  let shortWords = words.filter(function(word) {
    return word.length < 6;
  });
  // Output: ['pillow']
  ~~~
  * Example Two (ES5 Style):
  ~~~
  let randomNumbers = [375, 200, 3.14, 7, 13, 852];

  let smallNumbers = randomNumbers.filter(function(smallNumber) {
    return smallNumber < 250;
  })
  console.log(smallNumbers)
  // Output: [200, 3.14, 7, 13]
  ~~~
  * Example One (ES6 Style):
  ~~~
  let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

  let shortWords = words.filter(word => word.length < 6);
  // Output: ['pillow']
  ~~~
  * Example Two (ES6 Style):
  ~~~
  let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

  let longFavoriteWords = favoriteWords.filter(word => word.length > 7);
  // Output: [ 'nostalgia', 'hyperbole', 'esoteric' ]
  ~~~

#### .some()
  * `.some()` iterates over an array and returns `true` if any item inside returns truthy.
  * Example:
  ~~~
  let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

  console.log(words.some(function(word) {
    return word.length < 6;
  }));
  // Output: true
  ~~~

#### .every()
  * The `.every()` method tests whether all elements in the array pass the test implemented by the provided function.
  * Example:
  ~~~
  let interestingWords = ['unique', 'uncanny', 'oxymoron'];

  console.log(interestingWords.every(word => word.length > 5 ));
  // Output: true
  ~~~

## Objects
  * JavaScript objects are containers that can store data and functions.
  * The data we store in an object is not ordered — we can only access it by calling its associated key.
  * You can create an object with key-value pairs using the following syntax:
  * An objects keys point to values that can be any data type, including other objects.
  * Example:
    * `let restaurant` creates a variable named `restaurant` that stores the object.
    * We create the object between curly braces: `{}`.
    * `name`, `seatingCapacity`, `hasDineInSpecial`, and `entrees` are all keys.
    * We separate each key from its corresponding value by a colon (`:`).
    * The value is to the right of the colon. For example, `seatingCapacity`'s value is `120`.
    * Every key-value pair is separated by a comma `,`.
  ~~~
  let restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
  };
  ~~~

#### Objects: Accessing Object Properties (Dot Notation)
  * The most common way to access a key's value is to use dot notation.
  * To access the properties within an object, we connect the value's name to the key name with a period `.`.
    * Example:
    ~~~
    let person = {
      name: 'Blaine',
      age: 28
    };
    console.log(person.name);
    // Output: 'Blaine'
    ~~~

#### Objects: Accessing Object Properties (Bracket Notation)
  * Another way to access a key's value is with bracket notation.
  * To access the properties within an object, we connect the value's name to the key name using brackets and quotes `{''}`.
    * Example:
    ~~~
    let person = {
      name: 'Blaine',
      age: 28
    };
    console.log(person['name']);
    // Output: 'Blaine'
    ~~~

  * One advantage that bracket notation has over dot notation is that you can use variables inside the brackets to select the keys of an object.
  * Example (using object keys):
  ~~~
  let person = {
    name: 'Blaine',
    age: 28,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };

  let day = 'Thursday';
  let alarm;

  if (day === 'Saturday' || day === 'Sunday') {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }

  console.log(person[alarm]);
  // Output: Alarm set to 7AM
  ~~~


#### Objects: Adding a Property
  * Objects are considered mutable, which means you can change them after they're created.
  * If we want to add another item to our object we can do so by assigning a value to a new key that's attached to our object.
  * Even if you save an object to a const variable, you can still add to and edit the key-value pairs inside of it without causing an error.
    * Example:
    ~~~
    let person = {
      name: 'Blaine',
      age: 28,
      weekendAlarm: 'No alarms needed',
      weekAlarm: 'Alarm set to 7AM'
    };

    // Either notation (Bracket and Dot) adds a new key called 'hobbies' to the 'person' object.
    person.hobbies = ['Gaming', 'Cooking']
    person['hobbies'] = ['Gaming', 'Cooking']

    // Either notation is usable (Bracket and Dot).
    console.log(person.hobbies);
    console.log(person['hobbies']);

    // Output: ['Gaming', 'Cooking']
    ~~~

#### Objects: Editing a Property
  * In the same way that we would add a property to an object, we can modify a key's value.
    * Example:
    ~~~
    let person = {
      name: 'Blaine',
      age: 28,
      weekendAlarm: 'No alarms needed',
      weekAlarm: 'Alarm set to 7AM'
    };

    // Here we add the 'hobbies' key with its values
    person['hobbies'] = ['Gaming', 'Cooking']

    // This will print the array as: ['Gaming', 'Cooking']
    console.log(person['hobbies']);
    console.log(person.hobbies);
    // Output: ['Gaming', 'Cooking']

    // Here we alter the 'hobbies' key and provide a new array. Both notations can be used (Dot & Bracket)
    person.hobbies = ['Gaming']
    person['hobbies'] = ['Gaming']

    // This console log will print only ['Gaming'] as we have altered the value of 'hobbies'.
    console.log(person.hobbies);
    // Output: ['Gaming']
    ~~~

#### Objects: Methods
  * When objects have key-function pairs, we call the function a method.
    * Example (ES5 Style):
    ~~~
    let person = {
      name: 'Blaine',
      age: 28,
      weekendAlarm: 'No alarms needed',
      weekAlarm: 'Alarm set to 7AM',

      // 'sayHello' is now the key to this function using ES5
      sayHello: () => {
        return 'Hello, there!';
    	}

    };

    // When you call the method, don't forget the ()!
    console.log(person.sayHello())
    // Output: Hello, there!
    ~~~

    * Example (ES6 Style / Best Practice):
    ~~~
    let person = {
      name: 'Blaine',
      age: 28,
      weekendAlarm: 'No alarms needed',
      weekAlarm: 'Alarm set to 7AM',

      // 'sayHello' is now the key to this function using ES6
      sayHello() {
        return 'Hello, there!';
    	}

    };

    // When you call the method, don't forget the ()!
    console.log(person.sayHello())
    // Output: Hello, there!
    ~~~

#### Objects: The this Keyword
  * In Javascript, this refers to the object we call it inside.
    * Example:
      * Using `this.name` tells the code to look at the object its part of (myObj) and find a corresponding key (name).
      * Be aware, using ES5 syntax to create a key-function will break the code. You MUST use ES6.
    ~~~
    let myObj = {
      name: 'Blaine',
      sayHello() {
        return `${this.name} says hello!`;
      }
    };
    console.log(myObj.sayHello())
    // Output: Blaine says hello!
    ~~~

    * We can also change the object that `this` calls.
      * Example:
      ~~~
      let person = {
        name: 'Blaine',
        age: 28,
        weekendAlarm: 'No alarms needed',
        weekAlarm: 'Alarm set to 7AM',
        sayHello() {
       	 return `Hello, my name is ${this.name}`;
      	},
        sayGoodbye() {
        	return 'Goodbye!'
      	}
      };

      let friend = {
        name: 'Chris'
      }

      // Here we have essentially copied the 'sayHello' function from 'person' to 'friend'.
      friend.sayHello = person.sayHello

      // Now when we console log it the scope of this is now focused on 'friend' instead of 'person'. So the output is 'Chris' instead of 'Blaine'.
      console.log(friend.sayHello())
      // Output: Chris says hello!
      ~~~

#### Objects: Setters
  * Getter and setter methods get and set the properties inside of an object.
  * There are a couple of advantages to using these methods for getting and setting properties directly:
    * You can check if new data is valid before setting a property.
    * You can perform an action on the data while you are getting or setting a property.
    * You can control which properties can be set and retrieved.
  * It is also best practice to prepend property names with underscores (`_`).
    * Developers use an underscore before a property name to indicate a property or value should not be modified directly by other code.
    * It is recommended that you prepending all properties with an underscore, and create setters for all attributes you want to access later in your code.
    * Example:
    ~~~
    let person = {
      _name: 'Blaine',
      _age: 28,

      set age(ageIn) {
        if (typeof ageIn === 'number') {
          this._age = ageIn;
          console.log(`${ageIn} is valid input.`);
        }
        else {
          console.log('Invalid input');
          return 'Invalid input';
        }
      }

    };

    // Using an integer is correct. It sets the _age value to 65 using the setter method.
    person.age = 39;
    // Output: 39 is valid input.

    // Using anything other than an integer is incorrect which will activate the else portion.
    person.age = 'Thirty-nine';
    // Output: Invalid input
    ~~~

#### Objects: Getters
  * Once you've set the properties, you need a way to access them. Getters are used to get the property values inside of an object.
    * Example:
    ~~~
    let person = {
      _name: 'Blaine',
      _age: 28,

    	get age() {
        console.log(`${this._name} is ${this._age} years old.`)
        return this._age;
      }

    };

    // Gets the _age value
    console.log(person.age)
    // Output: Blaine is 39 years old.
    // Output: 39
    ~~~

#### Objects: Getters and Setters Together
  * Getter & Setter recap:
    * Objects store key-value pairs and let us represent real-world things in JavaScript.
    * Properties in objects are separated by commas. Key-value pairs are always separated by a colon.
    * You can add or edit a property within an object with dot notation.
    * A method is a function in an object.
    * `this` helps us with scope inside of object methods.
    * `this` is a dynamic variable that can change depending on the object that is calling the method.
    * Getter and setter methods allow you to process data before accessing or setting property values.
  * Example:
  ~~~
  let person = {
    _name: 'Blaine',
    _age: 28,

    set age(ageIn) {
      if (typeof ageIn === 'number') {
        this._age = ageIn;
        console.log(`${ageIn} is valid input.`);
      }
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    },

  	get age() {
      console.log(`${this._name} is ${this._age} years old.`)
      return this._age;
    }

  };

  // Using an integer is correct. It sets the _age value to 65 using the setter method.
  person.age = 39;
  // Output: 39 is valid input.

  // Using anything other than an integer is incorrect which will activate the else portion.
  person.age = 'Thirty-nine';
  // Output: Invalid input

  // Gets the _age value
  console.log(person.age)
  // Output: Blaine is 39 years old.
  // Output: 39
  ~~~

## Classes
  * Classes are a tool that developers use to quickly produce similar objects.

#### Classes: Objects vs. Classes
  * Take, for example, an object representing a dog named halley.
  * This dog's name (a key) is "Halley" (a value) and has an age (another key) of 3 (another value).
  * We'll create the halley object below:
    * Example:
    ~~~
    let halley = {
      _name: 'Halley',
      _behavior: 0,

      get name() {
        return this._name;
      },

      get behavior() {
        return this._behavior;
      },

      incrementBehavior() {
        this._behavior++;
      }
    }
    ~~~

    * Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare.
    * Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects.
    * For each new dog, you can provide a value for their name.
    ~~~
    class Dog {
      constructor(name) {
        this._name = name;
        this._behavior = 0;
      }

      get name() {
        return this._name;
      }
      get behavior() {
        return this._behavior;
      }   

      incrementBehavior() {
        this._behavior ++;
      }
    }

    const halley = new Dog('Halley'); // Creates a new Dog named 'halley'
    console.log(halley.name); // Print name value to console
    console.log(halley.behavior); // Print behavior value to console
    halley.incrementBehavior(); // Add one to behavior
    console.log(halley.name); // Print name value to console
    console.log(halley.behavior); // Print behavior value to console
    // Output:
    /*
      Halley
      0
      Halley
      1
    */
    ~~~

#### Classes:
  * Although you may see similarities between class and object syntax, there is one important method that sets them apart called the constructor method.
  * JavaScript calls the constructor() method every time it creates a new instance of a class.
    * Example:
    ~~~
    class Dog {
      constructor(name) {
        this.name = name;
        this.behavior = 0;
      }
    }
    ~~~
      * Dog is the name of our class. By convention, we capitalize and CamelCase class names.
      * JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
      * This constructor() method accepts one argument, name.
      * Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance's name property to the name argument.
      * Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.

#### Classes: Instance
  * An instance is an object that contains the property names and methods of a class, but with unique property values.
    * Example:
    ~~~
    class Dog {
      constructor(name) {
        this.name = name;
        this.behavior = 0;
      }
    }

    const halley = new Dog('Halley'); // Create new Dog instance
    console.log(halley.name); // Log the name value saved to halley
    // Output: 'Halley'
    ~~~
    * Below our Dog class, we use the new keyword to create an instance of our Dog class. Let's consider the line of code step-by-step.
      * We create a new variable named halley that will store an instance of our Dog class.
      * We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
      * We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
      * Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.


#### Classes: Methods
  * Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
    * Example:
    * Note that between each of our methods, we did not include commas.
    ~~~
    class Dog {
      constructor(name) {
        this._name = name;
        this._behavior = 0;
      } // No Comma

      get name() {
        return this._name;
      } // No Comma

      get behavior() {
        return this._behavior;
      } // No Comma

      incrementBehavior() {
        this._behavior++;
      } // No Comma
    }
    ~~~

#### Classes: Method Calls / Multiple Objects created from a single Class
  * Now we can use our new methods to access and manipulate data from Dog instances.
    * Example:
    ~~~
    class Dog {
      constructor(name) {
        this._name = name;
        this._behavior = 0;
      }

      get name() {
        return this._name;
      }

      get behavior() {
        return this._behavior;
      }   

      incrementBehavior() {
        this._behavior++;
      }
    }

    const halley = new Dog('Halley');

    let nikko = new Dog('Nikko'); // Create dog named Nikko
    nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
    let bradford = new Dog('Bradford'); // Create dog name Bradford
    console.log(nikko.behavior); // Logs 1 to the console
    console.log(bradford.behavior); // Logs 0 to the console
    ~~~
      * In the example above, we create the Dog class, then create an instance, and save it to a variable named halley.
      * The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or method name. For methods, you must also include opening and closing parentheses.
      * In the example above, we create two new Dog instances, nikko and bradford. Because we increment the behavior of our nikko instance, but not bradford, accessing nikko.behavior returns 1 and accessing bradford.behavior returns 0.
    * Example Two:
    ~~~
    class Surgeon {
      constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
      }
      get name() {
        return this._name
      }
      get department() {
        return this._department
      }
      get remainingVacationDays() {
        return this._remainingVacationDays
      }
      takeVacationDays(daysOff) {
    this._remainingVacationDays =     this._remainingVacationDays - daysOff
      }
    }

    const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
    const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

    console.log(surgeonCurry.name)
    console.log(surgeonCurry.takeVacationDays(3))
    console.log(surgeonCurry.remainingVacationDays)
    ~~~

#### Classes: Inheritance
  * Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
  * Classes use inheritance in order to pass down attributes or methods to similar sub-classes.
  * Parent Classes hold attributes and methods that sub-classes (any class that 'extends' the parent class) will have access to.
  * Sub-Classes have access to all attributes and methods provided in the Parent Class it 'extends' from.
    * Example of a Parent Class (Which is a normal class):
    ~~~
    class HospitalEmployee {
      . . . attributes / methods . . .
    }
    ~~~
    * Example of a Sub-Class (Which 'extends' from a Parent Class):
    ~~~
    class Nurse extends HospitalEmployee { // Note that 'Nurse' can use any and all attributes and methods provided in 'HospitalEmployee'.
      . . . new attributes / new methods . . .
    }
    ~~~

  * The `extends` keyword makes the methods of the HospitalEmployee class available inside the Nurse class.
  * The `super` keyword calls the constructor of the parent class.
  * Constructors in Sub-Classes can use `super(attribute)` to pass the argument of the 'Nurse' Class to the Constructor of the 'HospitalEmployee' Parent Class. When the 'HospitalEmployee' Constructor runs, it sets `this._attribute = attribute;` for the new Nurse instance.
  * Any methods or attributes that are specific to a particular sub-class should be added to that sub-class only. This keeps the Parent Class from becoming too cluttered.
    * Example of a Parent Class:
    ~~~
    class HospitalEmployee { // Parent Class (Holds any attributes or methods that sub-classes will also use)
      constructor(name) {
        this._name = name; // name is something all sub-classes will use and can be 'forwarded' to the subclasses.
        this._remainingVacationDays = 20; // remainingVacationDays is another attribute that all sub-classes will use.
      }

      get name() { // This get name method is another 'forwarded' item from the parent class.
        return this._name;
      }

      get remainingVacationDays() {
        return this._remainingVacationDays;
      }

      takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
      }
    }
    ~~~
    * Example of a Sub-Class (Which 'extends' from a Parent Class):
    ~~~
    class Nurse extends HospitalEmployee { // This is an 'extension of the Parent HospitalEmployee Class'
      constructor(name, certifications) {
        super(name); // This uses the constructor of the Parent Class (HospitalEmployee) to set the name for this Nurse instance.
        this._certifications = certifications; // This is a sub-class specific attribute and is only accessible in Nurse.
      }
    }

    const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

    console.log(nurseOlynyk)
    // Output: Nurse { _name: 'Olynyk', _remainingVacationDays: 20, _certifications: [ 'Trauma', 'Pediatrics' ] }
    console.log(nurseOlynyk.name)
    // Output: Olynyk
    console.log(nurseOlynyk._remainingVacationDays)
    // Output: 20
    ~~~

#### Classes: Static Methods
  * Static Methods aren't available in individual instances, but you can call them directly from the class.
  * Static methods are called on the class, but not on instances of the class.
    * Example:
    ~~~
    class HospitalEmployee {
      . . .
      static generatePassword() {
        return Math.round(Math.random(10001));
      }
    }

    class Nurse extends HospitalEmployee {
      . . .
    }

    console.log(HospitalEmployee.generatePassword())
    // Output: (A random whole number)
    console.log(nurseOlynyk.generatePassword())
    // Output: An ERROR
    ~~~

# Explore ReactJS:

## Basic JSX
  * JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
  * If a JavaScript file contains JSX code, then that file will have to be compiled as it  not considered valid JavaScript. Web browsers can't read it!.
  * That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
    * Example of JSX:
    ~~~
    const h1 = <h1>Hello world</h1>;
    ~~~

#### Basic JSX: Element
  * A basic unit of JSX is called a JSX element.
  * This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.
    * Example:
    ~~~
    <h1>Hello world</h1>
    ~~~

#### Basic JSX: Expressions
  * JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.
  * That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array...you name it.
    * Example (Single Element):
    ~~~
    const navBar = <nav>I am a nav bar</nav>;
    ~~~
    * Example (Multiple Elements):
    ~~~
    const myTeam = {
      center: <li>Benzo Walli</li>,
      powerForward: <li>Rasha Loa</li>,
      smallForward: <li>Tayshaun Dasmoto</li>,
      shootingGuard: <li>Colmar Cumberbatch</li>,
      pointGuard: <li>Femi Billon</li>
    };
    ~~~

#### Basic JSX: Attributes
  * JSX elements can have attributes, just like HTML elements can.
  * A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value.
    * Example:
    ~~~
    <a href="http://www.example.com">Welcome to the Web</a>;

    const title = <h1 id="title">Introduction to React.js: Part I</h1>;

    const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;

    const p1 = <p id="large">foo</p>
    const p2 = <p id="small">bar</p>      
    ~~~

#### Basic JSX: Nested
  * You can nest JSX elements inside of other JSX elements, just like in HTML.
    * Example (Without HTML indentation):
    ~~~
    <a href="https://www.example.com"><h1>Click me!</h1></a>
    ~~~
    * Example (With HTML indentation):
      * If you use multiple lines the JSX must be wrapped in parentheses.
    ~~~
    (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
    )
    ~~~
    * Example (With HTML indentation):
      * If you use multiple lines the JSX must be wrapped in parentheses.
    ~~~
    const theExample = (
      <a href="https://www.example.com">
        <h1>
          Click me!
        </h1>
      </a>
    );
    ~~~

#### Basic JSX: Outer Elements
  * A JSX expression must have exactly one outermost element.
  * The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!
  * In most cases a `<div></div>` tag must encompass everything that will render.
    * NOT Working Example:
    ~~~
    const paragraphs = (
      <p>I am a paragraph.</p>
      <p>I, too, am a paragraph.</p>
    );
    ~~~
    * Working Example:
    ~~~
    const paragraphs = (
      <div id="i-am-the-outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
      </div>
    );
    ~~~

#### Basic JSX: Rendering
  * To render a JSX expression means to make it appear onscreen.
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
    ~~~

#### Basic JSX: ReactDOM.render()
  * ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.
  * ReactDOM.render() is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.
  * `<h1>Hello world</h1>` is the first argument being passed to ReactDOM.render(). ReactDOM.render()'s first argument should be a JSX expression, and it will be rendered to the screen.
  * The first argument is appended to whatever element is selected by the second argument.
    * Example:
    ~~~
    ReactDOM.render( // The ReactDOM render call
      <h1>Hello world</h1>, // The JSX element aka the first argument
      document.getElementById('app')); // The Element we append the first argument to aka the second argument

    ~~~

#### Basic JSX: Passing a Variable to ReactDOM.render()
  * ReactDOM.render()'s first argument should evaluate to a JSX expression, it doesn't have to literally be a JSX expression.
  * The first argument could also be a variable, so long as that variable evaluates to a JSX expression.
    * Example:
    ~~~
    const toDoList = (
      <ol>
        <li>Learn React</li>
        <li>Become a Developer</li>
      </ol>
    );

    ReactDOM.render(
      toDoList,
      document.getElementById('app')
    );
    ~~~

#### Basic JSX: The Virtual DOM
  * [The Virtual Dom Explained](https://www.codecademy.com/articles/react-virtual-dom)
  * One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.
  * That means that if you render the exact same thing twice in a row, the second render will do nothing:
    * Example:
    ~~~
    const hello = <h1>Hello world</h1>;

    // This will add "Hello world" to the screen:

    ReactDOM.render(hello, document.getElementById('app'));

    // This won't do anything at all:

    ReactDOM.render(hello, document.getElementById('app'));
    ~~~

## Advanced JSX
  *

#### Advanced JSX: class vs className
  * In HTML, it's common to use `class` as an attribute name, however, In JSX, you can't use the word `class`! You have to use `className` instead.
  * This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
    * Example:
    ~~~
    // Incorrect
    <h1 class="big">Hey</h1>

    // Correct
    <h1 className="big">Hey</h1>
    ~~~

#### Advanced JSX: Self-Closing Tags
  * Most HTML elements use two tags: an opening tag (<div>), and a closing tag (</div>).
  * However, some HTML elements such as <img> and <input> use only one tag. The tag that belongs to a single-tag element isn't an opening tag nor a closing tag; it's a self-closing tag.
  * When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket:
  * BUT! In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:
    * Example (In HTML):
    ~~~
    Fine in HTML with a slash:
      <br />

    Also fine, without the slash:
      <br>
    ~~~
    * Example (In JSX):
    ~~~
    Fine in JSX:
      <br />

    NOT FINE AT ALL in JSX:
      <br>
    ~~~

#### Advanced JSX: Curly Braces in JSX
  * Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn't add numbers - it reads them as text, just like HTML.
  * By wrapping your code in curly braces your saying "Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX."
    * Example:
    ~~~
    // Will return "2 + 3"
    ReactDOM.render(
      <h1>2 + 3</h1>,
      document.getElementById('app')
    );

    // Will return "5"
    ReactDOM.render(
      <h1>{2 + 3}</h1>,
      document.getElementById('app')
    );
    ~~~

#### Advanced JSX: Variables in JSX
  * When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.
  * That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.
    * Example:
    ~~~
    // Declare a variable:
    const name = 'Gerdo';

    // Access your variable
    // from inside of a JSX expression:
    const greeting = <p>Hello, {name}!</p>;
    ~~~

#### Advanced JSX: Variable Attributes in JSX
  * When writing JSX, it's common to use variables to set attributes.
    * Example:
    ~~~
    // Use a variable to set the `height` and `width` attributes:

    const sideLength = "200px";

    const panda = (
      <img
        src="images/panda.jpg"
        alt="panda"
        height={sideLength}
        width={sideLength} />
    );
    ~~~
  * Object properties are also often used to set attributes:
    * Example:
    ~~~
    const pics = {
      panda: "http://bit.ly/1Tqltv5",
      owl: "http://bit.ly/1XGtkM3",
      owlCat: "http://bit.ly/1Upbczi"
    };

    const panda = (
      <img
        src={pics.panda}
        alt="Lazy Panda" />
    );

    const owl = (
      <img
        src={pics.owl}
        alt="Unimpressed Owl" />
    );

    const owlCat = (
      <img
        src={pics.owlCat}
        alt="Ghastly Abomination" />
    );
    ~~~

#### Advanced JSX: Event Listeners in JSX
  * [Event Listeners List](https://reactjs.org/docs/events.html#supported-events)
  * JSX elements can have event listeners, just like HTML elements can.
  * Programming in React means constantly working with event listeners.
  * You create an event listener by giving a JSX element a special attribute called `onClick()`
  * An event listener attribute's value should be a function.
    * Example:
    ~~~
    function myFunc() {
      alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
    }

    <img onClick={myFunc} />
    <img onMouseOver={myFunc} />
    ~~~
  * Note that in HTML, event listener names are written in all lowercase, such as `onclick` or `onmouseover`.
  * In JSX, event listener names are written in camelCase, such as `onClick` or `onMouseOver`.

#### Advanced JSX: JSX Conditionals: If Statements
  * Here's a rule that you need to know: you can not inject an if statement into a JSX expression.
    * Bad Code Example:
    ~~~
    (
      <h1>
        {
          if (purchase.complete) {
            'Thank you for placing an order!'
          }
        }
      </h1>
    )
    ~~~
  * If you can't inject an if statement into JSX how can you write a conditional?
  * This is a common way to express conditionals in JSX.
  * Well, one option is to write an if statement, and not inject it into JSX.
    * Good Code Example:
    ~~~
    let message;

    if (user.age >= drinkingAge) {
      message = (
        <h1>
          Hey, check out this alcoholic beverage!
        </h1>
      );
    } else {
      message = (
        <h1>
          Hey, check out these earrings I got at Claire's!
        </h1>
      );
    }

    ReactDOM.render(
      message,
      document.getElementById('app')
    );
    ~~~
    * Another Good Code Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    function coinToss() {
      // This function will randomly return either 'heads' or 'tails'.
      return Math.random() < 0.5 ? 'heads' : 'tails';
    }

    const pics = {
      kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
      doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
    };
    let img;

    // if/else statement begins here:
    if (coinToss() === 'heads') {
      img = (
        <img src={pics.kitty} />
        )
    } else {
      img = (
      <img src={pics.doggy} />
      )
    }

    ReactDOM.render(img, document.getElementById('app'));
    ~~~

#### Advanced JSX: JSX Conditionals: The Ternary Operator
  * There's a more compact way to write conditionals in JSX: the ternary operator.
  * The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.
  * Recall how it works: you write `x ? y : z`, where `x`, `y`, and `z` are all JavaScript expressions. When your code is executed, `x` is evaluated as either "truthy" or "falsy." If `x` is truthy, then the entire ternary operator returns `y`. If `x` is falsy, then the entire ternary operator returns `z`.
  [In-depth Ternary Operator Examples](https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript)
    * Example:
    ~~~
    const headline = (
      <h1>
        { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
      </h1>
    );
    ~~~
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    function coinToss () {
      // Randomly return either 'heads' or 'tails'.
      return Math.random() < 0.5 ? 'heads' : 'tails';
    }

    const pics = {
      kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
      doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
    };

    const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

    ReactDOM.render(
    	img,
    	document.getElementById('app')
    );
    ~~~

#### Advanced JSX: JSX Conditionals: &&
  * Like the ternary operator, && is not React-specific, but it shows up in React surprisingly often.
  * && works best in conditionals that will sometimes do an action, but other times do nothing at all.
  * Every time that you see && in this example, either some code will run, or else no code will run.
    * Example:
    ~~~
    const tasty = (
      <ul>
        <li>Applesauce</li>
        { !baby && <li>Pizza</li> }
        { age > 15 && <li>Brussels Sprouts</li> }
        { age > 20 && <li>Oysters</li> }
        { age > 25 && <li>Grappa</li> }
      </ul>
    );

    ~~~

#### Advanced JSX: .map in JSX
  * The array method .map() comes up often in React. It's good to get in the habit of using it alongside JSX.
  * If you want to create a list of JSX elements, then .map() is often your best bet.
    * Example:
    ~~~
    const strings = ['Home', 'Shop', 'About Me'];

    const listItems = strings.map(string => <li>{string}</li>);

    <ul>{listItems}</ul>
    ~~~
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    const people = ['Rowe', 'Prevost', 'Gare'];

    const peopleLis = people.map(person =>
      // expression goes here:
    	<li>{person}</li>
    );

    // ReactDOM.render goes here:
    ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'));
    ~~~

#### Advanced JSX: Keys
  * When you make a list in JSX, sometimes your list will need to include something called keys:
  * A key is a JSX attribute. The attribute's name is key. The attribute's value should be something unique, similar to an id attribute.
    * keys don't do anything that you can see! React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.
    * Not all lists need to have keys. A list needs keys if either of the following are true:
      * The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
      * A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
    * If neither of these conditions are true, then you don't have to worry about keys. If you aren't sure then it never hurts to use them!
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    const people = ['Rowe', 'Prevost', 'Gare'];

    const peopleLis = people.map((person, i) =>
      // expression goes here:
    	<li key={'person_' + i}>{person}</li>
    );

    // ReactDOM.render goes here:
    ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'));
    ~~~

#### Advanced JSX: React.createElement
  * The majority of React programmers do use JSX, but you should understand that it is possible to write React code without it.
  * When a JSX element is compiled, the compiler transforms the JSX element into the method that you see below: React.createElement().
  * Every JSX element is secretly a call to React.createElement().
    * Example in JSX:
    ~~~
    const h1 = <h1>Hello world</h1>;
    ~~~
    * Example in React:
    ~~~
    const h1 = React.createElement(
      "h1",
      null,
      "Hello, world"
    );
    ~~~

## ReactJS Components
  * React applications are made out of components.
  * A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

#### ReactJS Components: Import React
  * This line of code creates a new variable. That variable's name is React, and its value is a particular, imported JavaScript object:
  ~~~
  import React from 'react';
  ~~~
    * This imported object contains methods that you need in order to use React. The object is called the React library.
    * you have to import the React library, and save it in a variable named React, before you can use any JSX at all.
  * Building a React Component from the ground up, step 1:
  ~~~
  import React from 'react';
  ~~~

#### ReactJS Components: Import ReactDOM
  * The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render().
  ~~~
  import ReactDOM from 'react-dom';
  ~~~
  * The methods imported from 'react' don't deal with the DOM at all. They don't engage directly with anything that isn't part of React.
  * To clarify: the DOM is used in React applications, but it isn't part of React. After all, the DOM is also used in countless non-React applications. Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.
  * Building a React Component from the ground up, step 2:
  ~~~
  import React from 'react';
  import ReactDOM from 'react-dom';
  ~~~

#### ReactJS Components: Create a Component Class
  * You've learned that a React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.
  * Here's another fact about components: every component must come from a component class.
  * A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.
  * To make a component class, you use a base class from the React library: React.Component.
    * React.Component is a JavaScript class. To create your own component class, you must subclass React.Component.
    * You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.
    * Example:
    ~~~
    class MyComponentClass extends React.Component {
      render() {
        return <h1>Hello world</h1>;
      }
    }
    ~~~
    * Building a React Component from the ground up, step 3:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    class x extends React.Component {}
    ~~~
#### ReactJS Components: Name a Component Class
  * When you declare a new component class, you need to give that component class a name. On line 4, notice that our component class's name is MyComponentClass.
  * Component class variable names must begin with capital letters!
    * This adheres to JavaScript's class syntax. It also adheres to a broader programming convention in which class names are written in UpperCamelCase.
    * Building a React Component from the ground up, step 4:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    class MyComponentClass extends React.Component {}
    ~~~

#### ReactJS Components: The Render Function
  * A component class is like a factory that builds components. It builds these components by consulting a set of instructions, which you must provide. Let's talk about these instructions!
  * For starters, these instructions should take the form of a class declaration body. That means that they will be delimited by curly braces, like this:
    * Example:
    ~~~
    class ComponentFactory extends React.Component {
        // instructions go here, between the curly braces
    }
    ~~~
    * There is only one property that you have to include in your instructions: a render method.
    ~~~
    class ComponentFactory extends React.Component {
      render() {}
    }
    ~~~
    * A render method must contain a return statement. Usually, this return statement returns a JSX expression:
    ~~~
    class ComponentFactory extends React.Component {
      render() {
        return <h1>Hello world</h1>;
      }
    }
    ~~~
    * Building a React Component from the ground up, step 5:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    class MyComponentClass extends React.Component {
      render() {
      	return <h1>Hello world</h1>
      }
    }
    ~~~

#### ReactJS Components: Create a Component Instance
  * MyComponentClass is now a working component class! It's ready to follow its instructions and make some React components.
  * So, let's make a React component! It only takes one more line:
    * Example:
    ~~~
    <MyComponentClass />
    ~~~
    * To make a React component, you write a JSX element. Instead of naming your JSX element something like h1 or div like you've done before, give it the same name as a component class. Voilà, there's your component instance!
    * JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two!
    * That is the React-specific reason why component class names must begin with capital letters.
    * In a JSX element, that capitalized first letter says, "I will be a component instance and not an HTML tag."
    * Building a React Component from the ground up, step 6:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    class MyComponentClass extends React.Component {
      render() {
        return <h1>Hello world</h1>;
      }
    }

    // component goes here:
    <MyComponentClass />
    ~~~

#### ReactJS Components: Render A Component
  *
    * Example:
    ~~~
    class MyComponentClass extends React.Component
    { // everything in between these curly-braces is instructions for how to build components

      render() {
        return <h1>Hello world</h1>;
      }
    }
    ~~~
    * This class declaration results in a new component class, in this case named MyComponentClass. MyComponentClass has one method, named render. This all happens via standard JavaScript class syntax.
    * Whenever you make a component, that component inherits all of the methods of its component class. MyComponentClass has one method: MyComponentClass.render(). Therefore, <MyComponentClass /> also has a method named render.
    * You could make a million different <MyComponentClass /> instances, and each one would inherit this same exact render method.
    * To call a component's render method, you pass that component to ReactDOM.render().
    ~~~
    ReactDOM.render(
      <MyComponentClass />,
      document.getElementById('app')
    );
    ~~~
      * ReactDOM.render() will tell <MyComponentClass /> to call its render method.
      * <MyComponentClass /> will call its render method, which will return the JSX element <h1>Hello world</h1>.
      * ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM. This will make "Hello world" appear on the screen.
      * Building a React Component from the ground up, step 7:
      ~~~
      import React from 'react';
      import ReactDOM from 'react-dom';

      class MyComponentClass extends React.Component {
        render() {
          return <h1>Hello world</h1>;
        }
      }

      // component goes here:

      ReactDOM.render(<MyComponentClass />, document.getElementById('app'));
      ~~~

## Components & Advanced JSX
  *

#### Components & Advanced JSX: Use a Variable Attribute in a Component
  * You can, and often will, inject JavaScript into JSX inside of a render function.
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    const redPanda = {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
      alt: 'Red Panda',
      width:  '200px'
    };

    class RedPanda extends React.Component {
      render() {
        return (
          <div>
            <h1>Cute Red Panda</h1>
            <img
              src={redPanda.src}
              alt={redPanda.alt}
              width={redPanda.width} />
          </div>
        );
      }
    }

    ReactDOM.render(
      <RedPanda />,
      document.getElementById('app')
    );
    ~~~
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';


    const owl = {
      title: 'Excellent Owl',
      src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
    };

    // Component class starts here:
    class Owl extends React.Component {
      render() {
        return (
          <div>
            <h1>{owl.title}</h1>
            <img
              src={owl.src}
              alt={owl.title} />
          </div>
        )
      }
    }

    ReactDOM.render(<Owl/>,document.getElementById('app'));
    ~~~

#### Components & Advanced JSX: Put Logic in a Render Function
  * A render() function must have a return statement. However, that isn't all that it can have.
  * A render() function can also be a fine place to put simple calculations that need to happen right before a component renders. Here's an example of some calculations inside of a render function:
    * Example:
    ~~~
    class Random extends React.Component {
      render() {
        // First, some logic that must happen
        // before rendering:
        const n = Math.floor(Math.random() * 10 + 1);
        // Next, a return statement
        // using that logic:
        return <h1>The number is {n}!</h1>;
      }
    }
    ~~~
    * A common mistake is placing the functions above the render when it should be placed between render and return.
    * Common Mistake Example:
    ~~~
    class Random extends React.Component {
      // This should be in the render function:
      const n = Math.floor(Math.random() * 10 + 1);

      render() {
        return <h1>The number is {n}!</h1>;
      }
    };
    ~~~
    * Another Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';`

    const fiftyFifty = Math.random() < 0.5;

    // New component class starts here:
    class TonightsPlan extends React.Component {
      render() {
        let thing;
        if (fiftyFifty === true) {
          thing = "Tonight I'm going out WOOO"
        } else {
          thing = "Tonight I'm going to bed WOOO"
        }

        return (
          <h1>{thing}</h1>
        )
      }
    }

    ReactDOM.render(<TonightsPlan />, document.getElementById('app'));`
    ~~~

#### Components & Advanced JSX: Using `this` in a Component
  * In JavaScript `this` is the current execution context of a function.
    * Example:
    ~~~
    class IceCreamGuy extends React.Component {
      get food() {
        return 'ice cream';
      }

      render() {
        return <h1>I like {this.food}.</h1>;
      }
    }
    ~~~
      * Since this will evaluate to an instance of `IceCreamGuy`, `this.food` will evaluate to a call of `IceCreamGuy`'s `.food` method. This method will, in turn, evaluate to the string "ice cream."

#### Components & Advanced JSX: Using an Event Listener in a Component
  * An Event Listener 'listens' for the user to perform a specific event on a given element and then executes the function or code attached to it.
    * Example:
    ~~~
    class MyClass extends React.Component {
      myFunc() {
        alert('Stop it.  Stop hovering.');
      }

      render() {
        return (
          <div onHover={this.myFunc}>
          </div>
        );
      }
    }
    ~~~
      * Notice that the component class has two methods: .myFunc() and .render(). .myFunc() is being used as an event handler. .myFunc() will be called any time that a user hovers over the rendered <div></div>.

## Components Interact
  * A React application can contain dozens, or even hundreds, of components.
  * Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.
  * In other words, React apps are made out of components, but what makes React special isn't components themselves. What makes React special is the ways in which components interact.

#### Components Interact: A Component in a Render Function
  * Components return JSX, but they can also return other Components
    * Example:
    ~~~
    class OMG extends React.Component {
      render() {
        return <h1>Whooaa!</h1>;
      }
    }

    class Crazy extends React.Component {
      render() {
        return <OMG />;
      }
    }
    ~~~

#### Components Interact: Require A File
  * When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default.
  * If you want to use a variable that's declared in a different file, such as a NavBar, then you have to import the variable that you want. To import a variable, you can use an import statement:
    * Example:
    ~~~
    import { NavBar } from './NavBar.js';
    ~~~
      * If you use an import statement, and the string at the end begins with either a dot or a slash, then import will treat that string as a filepath. import will follow that filepath, and import the file that it finds.
      * If your filepath doesn't have a file extension, then ".js" is assumed. So the above example could be shortened:
      ~~~
      import { NavBar } from './NavBar';
      ~~~
      * For more information regarding Modules check out [Modules In-Depth](http://eloquentjavascript.net/10_modules.html)
      * Full Example:
      ~~~
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { NavBar } from './NavBar';


      class ProfilePage extends React.Component {
        render() {
          return (
            <div>
      				<NavBar />
              <h1>All About Me!</h1>
              <p>I like movies and blah blah blah blah blah</p>
              <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
            </div>
          );
        }
      }
      ~~~

#### Components Interact: export
  * When you import a variable from a file that is not the current file, then an import statement isn't quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.
  * export comes from [ES6's module system ](http://eloquentjavascript.net/10_modules.html), just like import does. export and import are meant to be used together, and you rarely see one without the other.
  * There are a few different ways to use export. We will be using a style called "named exports."
  * In one file, place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class:
    * Example:
    ~~~
    // Manifestos.js:

    export const faveManifestos = {
      futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
      SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
      cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
    };

    export const alsoRan = 'TimeCube';
    ~~~
    * In a different file, import the name of the var, let, const, function, or class from the first file:
    ~~~
    // App.js:

    // Import faveManifestos and alsoRan from ./Manifestos.js:
    import { faveManifestos, alsoRan } from './Manifestos';

    // Use faveManifestos:
    console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
    ~~~
    * This style of importing and exporting in JavaScript is known as "named exports." When you use named exports, you always need to wrap your imported names in curly braces, such as:
    ~~~
    import { faveManifestos, alsoRan } from './Manifestos';`
    ~~~
    * Class Export Example:
    ~~~
    import React from 'react';

    export class NavBar extends React.Component {
      render() {
        const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
        const navLinks = pages.map(page => {
          return (
            <a href={'/' + page}>
              {page}
            </a>
          )
        });

        return <nav>{navLinks}</nav>;
      }
    }
    ~~~

## this.props
  * Previously, you learned one way that components can interact: a component can render another component.
  * Another way that components can interact: a component can pass information to another component.
  * Information that gets passed from one component to another is known as "props."
  * Things that are gone over in this section:
    * Passing a prop by giving an attribute to a component instance.
    * Accessing a passed-in prop via this.props.prop-name
    * Displaying a prop
    * Using a prop to make decisions about what to display
    * Defining an event handler in a component class
    * Passing an event handler as a prop
    * Receiving a prop event handler and attaching it to an event listener
    * Naming event handlers and event handler attributes according to convention
    * this.props.children
    * getDefaultProps

#### this.props: Access a Component's props
  * Every component has something called props.
  * A component's props is an object. It holds information about that component.
  * To see a component's props object, you use the expression `this.props`.
    * Example in a render method:
    ~~~
    render() {
      console.log("Props object comin' up!");

      console.log(this.props);

      console.log("That was my props object!");

      return <h1>Hello world</h1>;
    }
    ~~~
    * Example with entire Component:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    class PropsDisplayer extends React.Component {
      render() {
      	const stringProps = JSON.stringify(this.props);

        return (
          <div>
            <h1>CHECK OUT MY PROPS OBJECT</h1>
            <h2>{stringProps}</h2>
          </div>
        );
      }
    }

    // ReactDOM.render goes here:
    ReactDOM.render(<PropsDisplayer />, document.getElementById('app'));
    ~~~

#### this.props: Pass `props` to a Component
  * You can pass information to a React component.
  * How? By giving that component an attribute:
    * Example:
    ~~~
    <MyComponent foo="bar" />
    ~~~
    * Let's say that you want to pass a component the message, "This is some top secret info.". Here's how you could do it:
    ~~~
    <Example message="This is some top secret info." />
    ~~~
      * As you can see, to pass information to a component, you need a name for the information that you want to pass.
      * In the above example, we used the name message. You can use any name you want.
      * If you want to pass information that isn't a string, then wrap that information in curly braces. Here's how you would pass an array:
      ~~~
      <Greeting myInfo={["top", "secret", "lol"]} />
      ~~~
      * In this next example, we pass several pieces of information to <Greeting />. The values that aren't strings are wrapped in curly braces:
      ~~~
      <Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
      ~~~
      * Passing in props using the render:
      ~~~
      import React from 'react';
      import ReactDOM from 'react-dom';

      class PropsDisplayer extends React.Component {
        render() {
        	const stringProps = JSON.stringify(this.props);

          return (
            <div>
              <h1>CHECK OUT MY PROPS OBJECT</h1>
              <h2>{stringProps}</h2>
            </div>
          );
        }
      }

      // ReactDOM.render goes here:
      ReactDOM.render(<PropsDisplayer myProp=
      "Hello"/>, document.getElementById('app'));
~~~

#### this.props: Render a Component's props
  * Usually, you will want to display the props that are passed into a given component.
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    class Greeting extends React.Component {
      render() {
        return <h1>Hi there, {this.props.firstName}!</h1>;
      }
    }

    ReactDOM.render(
      <Greeting firstName='Blaine' />,
      document.getElementById('app')
    );
    ~~~

#### this.props: Pass props From Component To Component
  * Let's Review:
    * You have learned how to pass a prop to a component:
      ~~~
      <Greeting firstName="Blaine" />
      ~~~
    * You have also learned how to access and display a passed-in prop:
      ~~~
      render() {
        return <h1>{this.props.firstName}</h1>;
      }
      ~~~
    * The most common use of props is to pass information to a component, from a different component.
    * A curmudgeonly clarification about grammar:
      * You may have noticed some loose usage of the words prop and props. Unfortunately, this is pretty inevitable.
      * props is the name of the object that stores passed-in information. this.props refers to that storage object. At the same time, each piece of passed-in information is called a prop. This means that props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information :(
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Greeting } from './Greeting'

    class App extends React.Component {
      render() {
        return (
          <div>
            <h1>
              Hullo and, "Welcome to The Newzz," "On Line!"
            </h1>
            <Greeting name="Blaine"/>
            <article>
              Latest newzz:  where is my phone?
            </article>
          </div>
        );
      }
    }

    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );  
    ~~~
    ~~~
    import React from 'react';

    export class Greeting extends React.Component {
      render() {
        return <h1>Hi there, {this.props.name}!</h1>;
      }
    }
    ~~~

#### this.props: Render Different UI Based on props
  * You can do more with props than just display them. You can also use props to make decisions.
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    export class Greeting extends React.Component {
      render() {
      	if (this.props.signedIn == false) {
      	  return <h1>GO AWAY</h1>;
      	} else {
      	  return <h1>Hi there, {this.props.name}!</h1>;
      	}
      }
    }
    ~~~
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Greeting } from './Greeting';

    class App extends React.Component {
      render() {
        return (
          <div>
            <h1>
              Hullo and, "Welcome to The Newzz," "On Line!"
            </h1>
            <Greeting name="Alison" signedIn={true} />
            <article>
              Latest:  where is my phone?
            </article>
          </div>
        );
      }
    }

    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
    ~~~

#### this.props: Put an Event Handler in a Component Class
  * You can, and often will, pass functions as props. It is especially common to pass event handler functions.
  * However, you have to define an event handler before you can pass one anywhere.
  * How do you define an event handler in React?
    * You define an event handler as a method on the component class, just like the render method. Almost all functions that you define in React will be defined in this way, as methods in a class.
    * BAD Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Button } from './Button';

    function talk () {
    	let speech = '';
      for (let i = 0; i < 10000; i++) {
        speech += 'blah ';
      }
      alert(speech);
    }

    class Talker extends React.Component {
      render() {
        return <Button />;
      }
    }

    ReactDOM.render(
      <Talker />,
      document.getElementById('app')
    );
    ~~~
    * Good Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Button } from './Button';

    class Talker extends React.Component {
      talk() {
        let speech;
        for (let i = 0; i< 10000; i++) {
          speech =+ 'blah '
        }
        alert(speech);
      }

      render() {
        return <Button />;
      }
    }

    ReactDOM.render(
      <Talker />,
      document.getElementById('app')
    );
    ~~~

#### this.props: Pass an Event Handler as a prop
  * You can pass a method in the exact same way that you pass any other information.
  * It doesn't really matter what prop name you choose. prop attributes will work with just about any name, so long as the name follows the [JavaScript variable name rules](https://mathiasbynens.be/notes/javascript-identifiers).
  * For example, if you're going to pass a function named talk, you might as well use talk as your name.
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Button } from './Button';

    class Talker extends React.Component {
      talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
          speech += 'blah ';
        }
        alert(speech);
      }

      render() {
        return <Button talk={this.talk}/>;
      }
    }

    ReactDOM.render(
      <Talker />,
      document.getElementById('app')
    );
    ~~~

#### this.props: Receive an Event Handler as a prop
  * We want to allow `<Button />` to use `<Talker />`'s `talk` function.
  * To do that, we will pass the `talk` function to `<Button />` using JSX attributes like so:
  ~~~
  return <Button talk={this.talk}/>;
  ~~~
  * Then we will need `<Button />` to use the prop function that it was passed like so:
  ~~~
  return (
    <button onClick={this.props.talk}>
      Click me!
    </button>
  );
  ~~~
    * Full Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Button } from './Button';

    class Talker extends React.Component {
      talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
          speech += 'blah ';
        }
        alert(speech);
      }

      render() {
        return <Button talk={this.talk}/>;
      }
    }

    ReactDOM.render(
      <Talker />,
      document.getElementById('app')
    );
    ~~~
    ~~~
    import React from 'react';

    export class Button extends React.Component {
      render() {
        return (
          <button onClick={this.props.talk}>
            Click me!
          </button>
        );
      }
    }
    ~~~

#### this.props: Naming Conventions (handleEvent, onEvent, and this.props.onEvent)
  * When you pass an event handler as a prop, there are two names that you have to choose.
  * Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.
    * The first name that you have to choose is the name of the event handler itself (The function you are passing).
    * The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name.
    * Example:
    ~~~
    return <Button secondName={this.firstName}/>;
    ~~~
    * These two names can be whatever you want. However, there is a naming convention that they often follow. You don't have to follow this convention, but you should understand it when you see it.
    * Here's how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was "click."
    * If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:
    * Example:
    ~~~
    class MyClass extends React.Component {
      handleHover() {
        alert('I am an event handler.');
        alert('I will be called in response to "hover" events.');
      }
    }
    ~~~
    * Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:
    * One major source of confusion is the fact that names like onClick have special meaning, but only if they're used on HTML-like elements.
      * HTML Example:
      ~~~
      <button onClick={this.props.onClick}>
        Click me!
      </button>
      ~~~
      * Non-HTML / Attribute Example:
      ~~~
      <Button onClick={this.handleClick} />
      ~~~

#### this.props: this.props.children
  * Every component's props object has a property named children.
  * `this.props.children` will return everything in between a component's opening and closing JSX tags.
  * So far, all of the components that you've seen have been self-closing tags, such as `<MyComponentClass />`. They don't have to be! You could write `<MyComponentClass></MyComponentClass>`, and it would still work.
  * `this.props.children` would return everything in between `<MyComponentClass>` and `</MyComponentClass>`.
    * Look at BigButton.js. In Example 1, `<BigButton>`'s `this.props.children` would equal the text, "I am a child of BigButton."
    ~~~
    // Example 1
    <BigButton>
      I am a child of BigButton.
    </BigButton>
    ~~~
    * In Example 2, <BigButton>'s this.props.children would equal a <LilButton /> component.
    ~~~
    // Example 2
    <BigButton>
      <LilButton />
    </BigButton>
    ~~~
    * In Example 3, <BigButton>'s this.props.children would equal undefined.
    ~~~
    // Example 3
    <BigButton />
    ~~~
    * If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.
  * Full Example:
  ~~~
  // Parent Component
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { List } from './List';

  class App extends React.Component {
    render() {
      return (
        <div>
          <List type='Living Musician'>
            <li>Sachiko M</li>
            <li>Harvey Sid Fisher</li>
          </List>
          <List type='Living Cat Musician'>
            <li>Nora the Piano Cat</li>
          </List>
        </div>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  ~~~
  * Note in the class `List` that the children are called and displayed because they are present in the parent Component.
  ~~~
  import React from 'react';

  export class List extends React.Component {
    render() {
      let titleText = `Favorite ${this.props.type}`;
      if (this.props.children instanceof Array) {
      	titleText += 's';
      }
      return (
        <div>
          <h1>{titleText}</h1>
          <ul>{this.props.children}</ul>
        </div>
      );
    }
  }
  ~~~

#### this.props: defaultProps
  * What if you don't pass props to a child class that has interpolated props? It will display nothing.
  * It is good practice to provide default values for these props in the event they go unused.
  * You can make this happen by giving your component class a property named defaultProps:
    * No Props Passed Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';

    class Button extends React.Component {
      render() {
        return (
          <button>
            {this.props.text}
          </button>
        );
      }
    }

    // defaultProps goes here:
    Button.defaultProps = { text: 'I am a button' }

    ReactDOM.render(
      <Button />,
      document.getElementById('app')
    );
    // Output: "I am a Button"
    ~~~
    * With Props Passed Example:
    ~~~
    import React from 'react';
      import ReactDOM from 'react-dom';

      class Button extends React.Component {
        render() {
          return (
            <button>
              {this.props.text}
            </button>
          );
        }
      }

      // defaultProps goes here:
      Button.defaultProps = { text: 'I am a button' }

      ReactDOM.render(
        <Button text="I am Groot" />,
        document.getElementById('app')
    );
    // Output: "I am Groot"
    ~~~

## this.state
  * React components will often need dynamic information in order to render. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.
  * There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.
  * It's time to learn about state. props and state are all that you need to set up an ecosystem of interacting React components.

#### this.state: Setting Initial State
  * A React component can access dynamic information in two ways: props and state.
  * Unlike props, a component's state is not passed in from the outside. A component decides its own state.
  * To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:
    ~~~
    class Example extends React.Component {
      constructor(props) {
        super(props);
        this.state = { mood: 'decent' };
      }

      render() {
        return <div></div>;
      }
    }

    <Example />
    ~~~
  * Let's break this down bit by bit:
    * this.state should be equal to an object, like in the example above. This object represents the initial "state" of any component instance.
    * The constructor and super are both features of ES6, not unique to React.
    * It is important to note that React components always have to call super in their constructors to be set up properly.
    * Make sure not to separate constructor and render with a comma! Methods should never be comma-separated, if inside of a class body. This is to emphasize the fact that classes and object literals are different.

#### this.state: Access a Component's state
  * To read a component's state, use the expression this.state.name-of-property:
    * Example:
    ~~~
    class TodayImFeeling extends React.Component {
      constructor(props) {
        super(props);
        this.state = { mood: 'decent' };
      }

      render() {
        return (
          <h1>
            I'm feeling {this.state.mood}!
          </h1>
        );
      }
    }
    ~~~
    * The above component class reads a property in its state from inside of its render function.
    * Just like this.props, you can use this.state from any property defined inside of a component class's body.

#### this.state: Update state with this.setstate
  * A component can do more than just read its own state. A component can also change its own state.
  * A component changes its state by calling the function `this.setState()`.
  * `this.setState()` takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback.
    ~~~
    this.setState({ hungry: true });
    ~~~
    * `this.setState()` takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.

#### this.state: Call this.setState from Another Function
  * The most common way to call `this.setState()` is to call a custom function that wraps a `this.setState()` call. `.makeSomeFog()` is an example:
    ~~~
    class Example extends React.Component {
      constructor(props) {
        super(props);
        this.state = { weather: 'sunny' };
        this.makeSomeFog = this.makeSomeFog.bind(this);
      }

      makeSomeFog() {
        this.setState({
          weather: 'foggy'
        });
      }
    }
    ~~~
    * Notice how the method makeSomeFog() contains a call to this.setState().
    * There is another line that is worth going over:
    ~~~
    this.makeSomeFog = this.makeSomeFog.bind(this);
    ~~~
    * Just know that in React, whenever you define an event handler that uses `this`, you need to add `this.methodName = this.methodName.bind(this)` to your constructor function.

## Stateless Components Inherit From Stateful Components
  * A React component should use props to store information that can be changed, but can only be changed by a different component.
  * A React component should use state to store information that the component itself can change.
    * React uses two components to create a programming pattern: a stateful component, and a stateless component.
      * "Stateful" describes any component that has a state property;
      * "Stateless" describes any component that does not.
    * In this pattern, a stateful component passes its state down to a stateless component.

#### Stateless Components Inherit From Stateful Components: Build a Stateful Component Class
  * A Stateful Component holds states and provides them to its children components.
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';


    class Parent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: 'Frarthur'
        }
      }
      render() {
        return(
          <div>

          </div>
        )
      }
    }
    ~~~

#### Stateless Components Inherit From Stateful Components: Build a Stateless Component Class
  * A Stateless Component accepts props from its parent and displays it.
    * Example:
    ~~~
    import React from 'react';

    export class Child extends React.Component {
      render() {
        return(
        <h1>
    			Hey, my name is {this.props.name}!
        </h1>
        )
      }
    }
    ~~~

#### Stateless Components Inherit From Stateful Components: Pass a Component's State
  * By importing the Child Component into the Parent, we can pass props and display the Child Component by changing only a couple things in the Parent Component.
    * Example:
    ~~~
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Child } from './Child';

    class Parent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: 'Frarthur'
        }
      }
      render() {
        return(
          <Child name={this.state.name} />
        )
      }
    }

    ReactDOM.render(<Parent />,document.getElementById('app'));
    ~~~
    * ReactDOM will display the <Parent/> Component, which is displaying the <Child/> Component and passing its state 'name' to be displayed.

## Child Components Update Their Parents' state
  * In these examples, The stateless, child component will update the state of the parent component. Here's how that works:
    * Step One
      * The parent component class defines a method that calls `this.setState()`.
      * For an example, look in Step One at the `.handleClick()` method.
        ~~~
        // Step One
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { ChildClass } from './ChildClass';

        class ParentClass extends React.Component {
          constructor(props) {
            super(props);

            this.state = { totalClicks: 0 };
          }

          handleClick() {
            const total = this.state.totalClicks;

            // calling handleClick will
            // result in a state change:
            this.setState(
              { totalClicks: total + 1 }
            );
          }
        }
        ~~~
    * Step Two
      * The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.
      * For an example, look in Step Two at the end of the `constructor()` method.
        ~~~
        // Step Two
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { ChildClass } from './ChildClass';

        class ParentClass extends React.Component {
          constructor(props) {
            super(props);

            this.state = { totalClicks: 0 };

            this.handleClick = this.handleClick.bind(this);
          }

          handleClick() {
            const total = this.state.totalClicks;

            // calling handleClick will
            // result in a state change:
            this.setState(
              { totalClicks: total + 1 }
            );
          }

          // The stateful component class passes down
          // handleClick to a stateless component class:
          render() {
            return (
              <ChildClass onClick={this.handleClick} />
            );
          }
        }
        ~~~
    * Step Three
      * Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.
      * Look in Step Three, at the ChildClass component call:
        ~~~
        // Step Three
        <ChildClass onClick={this.handleClick} />
        ~~~
    * Step Four
      * The child receives the passed-down function, and uses it as an event handler.
      * Look in Step Four. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent's state.
        ~~~
        import React from 'react';
        import ReactDOM from 'react-dom';

        export class ChildClass extends React.Component {
          render() {
            return (
              // The stateless component class uses
              // the passed-down handleClick function,
              // accessed here as this.props.onClick,
              // as an event handler:
              <button onClick={this.props.onClick}>
                Click Me!
              </button>
            );
          }
        }
        ~~~

#### Child Components Update Their Parents' state: Blank
  *
    * Example:
    ~~~
    ~~~

#### Child Components Update Their Parents' state: Blank
  *
    * Example:
    ~~~
    ~~~

## Blank
  *

#### Blank: Blank
  *
    * Example:
    ~~~
    ~~~

#### Blank: Blank
  *
    * Example:
    ~~~
    ~~~
