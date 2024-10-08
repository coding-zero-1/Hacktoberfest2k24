// Data Types in JavaScript

// JavaScript has a dynamic typing system, meaning variables can change their data type during runtime. Here's a breakdown of the primary data types:

// Primitive Data Types

// Number: Represents numerical values, including integers and floating-point numbers.

  let age = 25; // Integer
  let pi = 3.14159; // Floating-point number
  
// String: Represents sequences of characters enclosed in quotes.

  let name = "Alice";
  let greeting = 'Hello, world!';
  
// Boolean: Represents true or false values.

  let isSunny = true;
  let isRaining = false;

// null: Represents the absence of a value.

  let emptyValue = null;
  
// undefined: Represents a variable that has been declared but not yet assigned a value.

  let uninitializedVariable; // undefined
  
// Symbol: Represents a unique identifier.

  let symbol = Symbol('unique symbol');
  

// Object Data Type

// Object: Represents a collection of key-value pairs, where keys are strings and values can be of any data type.

  let person = {
    name: "Bob",
    age: 30,
    city: "New York"
  };
  

// Note: In JavaScript, arrays are considered a special type of object.

// Type Conversion

// JavaScript provides automatic type conversion in certain situations. For example:

// Number conversion:

  let numberString = "10";
  let number = parseInt(numberString); // number will be 10
  
// String conversion:

  let number1 = 5;
  let numberString1 = String(number); // numberString will be "5"
  
// Boolean conversion:

  let emptyString = "";
  let isTruthy = Boolean(emptyString); // isTruthy will be false