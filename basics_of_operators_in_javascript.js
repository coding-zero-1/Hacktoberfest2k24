// I'd be glad to explain the basics of operators in JavaScript, providing clear descriptions and code examples for each:

// **Arithmetic Operators:**

// Addition (+):** Adds two operands.
  let result = 5 + 3; // result will be 8

// Subtraction (-): Subtracts the second operand from the first.

  let difference = 10 - 4; // difference will be 6

// Multiplication (*): Multiplies two operands.
  let product = 2 * 7; // product will be 14

// Division (/): Divides the first operand by the second.
  let quotient = 15 / 3; // quotient will be 5

// Modulo (%): Returns the remainder of the division.
  let remainder = 17 % 5; // remainder will be 2

// Increment (++): Adds 1 to the operand (either before or after the expression).

  let num = 5;
  let incrementedNum = ++num; // incrementedNum will be 6, num will also be 6

// Decrement (--): Subtracts 1 from the operand (either before or after the expression).
  let num1 = 5;
  let decrementedNum = --num1; // decrementedNum will be 4, num will also be 4

// Assignment Operators:

// Assignment (=): Assigns a value to a variable.
  let x = 10;

// Addition assignment (+=): Adds the right operand to the left operand and assigns the result to the left operand.
  let y = 5;
  y += 3; // y will be 8

// Subtraction assignment (-=): Subtracts the right operand from the left operand and assigns the result to the left operand.
  let z = 12;
  z -= 4; // z will be 8

// Multiplication assignment (*=): Multiplies the left operand by the right operand and assigns the result to the left operand.
  let a = 2;
  a *= 5; // a will be 10

// Division assignment (/=): Divides the left operand by the right operand and assigns the result to the left operand.
  let b = 15;
  b /= 3; // b will be 5

// Modulo assignment (`%=`): Calculates the remainder of the division and assigns it to the left operand.
  let c = 17;
  c %= 5; // c will be 2

// Comparison Operators:

// Equal to (==): Checks if two values are equal.
  let isEqual = 5 == 5; // isEqual will be true

// Not equal to (!=): Checks if two values are not equal.
  let isNotEqual = 7 != 3; // isNotEqual will be true

// Strictly equal to (===): Checks if two values are equal and of the same data type.
  let isStrictlyEqual = "5" === 5; // isStrictlyEqual will be false

// Strictly not equal to (`!==`): Checks if two values are not equal or of different data types.

  let isStrictlyNotEqual = "5" !== 5; // isStrictlyNotEqual will be true

// Greater than (>): Checks if the left operand is greater than the right operand.

  let isGreater = 10 > 8; // isGreater will be true

// Less than (<): Checks if the left operand is less than the right operand.

  let isLess = 3 < 7; // isLess will be true

// Greater than or equal to (>=): Checks if the left operand is greater than or equal to the right operand.

  let isGreaterOrEqual = 6 >= 6; // isGreaterOrEqual will be true

// Less than or equal to (<=): Checks if the left operand is less than or equal to the right operand.
  let isLessOrEqual = 2 <= 4; // isLessOrEqual will be true

// Logical Operators:

// Logical AND (&&):Returns true if both operands are true.
  let isTrue = true && false; // isTrue will be false

// Logical OR (||): Returns true if at least one operand is true.
  let isTrue1 = true || false; // isTrue will be true

// Logical NOT (!): Reverses the logical value of an operand.
  let isNotTrue = !true; // isNotTrue will be false

// Conditional Operators:
// Ternary operator (`? :`): Provides a concise way to write conditional expressions.
  let result1 = (5 > 3) ? "Five is greater" : "Three is greater"; // result will be "Five is greater"