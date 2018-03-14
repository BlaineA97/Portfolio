# Javascript Examples:

### Function Types:
  > Functions in JavaScript are generally declared as either a function declaration or a function expression.

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
    ~~~
    const multiplyByNineFifths = (celsius) => {
      return celsius * (9/5);
    };
    ~~~
    * Is the same as:
    ~~~
    const multiplyByNineFifths = celsius => celsius * (9/5);
    ~~~
    
  ~~~


  const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
  };

  console.log('The temperature is ' + getFahrenheit(15) + '°F');

  // Is the same as:


  const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

  console.log('The temperature is ' + getFahrenheit(15) + '°F');
  ~~~

#### Blank
  >

  ~~~
  ~~~
