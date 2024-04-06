// ************************************************** NUM ************************************

// const score= 400

// console.log(score);

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)

// console.log(balance.toFixed(4)) // to fixed result 100.0000

// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3))//1.12e+3

// const hundred  = 1000000

// console.log(hundred.toLocaleString()); // 10,00,000 


// ************************************ Math ******************************

// Constants
console.log(Math.PI);               // 3.141592653589793
console.log(Math.E);                // 2.718281828459045

// Basic arithmetic operations
console.log(Math.abs(-5));          // 5
console.log(Math.ceil(4.3));        // 5 (Round up) upper hi value lega
console.log(Math.floor(4.9));       // 4 (Round down)
console.log(Math.round(4.5));       // 5 (Round to the nearest integer)
console.log(Math.max(10, 20, 30));  // 30 (Maximum of the given numbers)
console.log(Math.min(10, 20, 30));  // 10 (Minimum of the given numbers)

// Exponents and logarithms
console.log(Math.pow(2, 3));        // 8 (2 raised to the power of 3)
console.log(Math.sqrt(16));         // 4 (Square root)
console.log(Math.log(10));          // 2.302585092994046 (Natural logarithm)
console.log(Math.log10(100));       // 2 (Base 10 logarithm)

// Trigonometric functions (arguments in radians)
console.log(Math.sin(Math.PI / 2)); // 1 (Sine)
console.log(Math.cos(Math.PI));     // -1 (Cosine)
console.log(Math.tan(Math.PI / 4)); // 1 (Tangent)

// Random number generation
console.log(Math.random());         // Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 10)+1)
console.log(Math.floor(Math.random() * 10)); // Random integer between 0 and 9

// Other functions
console.log(Math.abs(-5));          // 5 (Absolute value)
console.log(Math.sign(-5));         // -1 (Sign of the number: -1 for negative, 1 for positive, 0 for zero)
console.log(Math.trunc(4.9));       // 4 (Truncate the decimal part)


const min =10
const max = 20

console.log(Math.floor(Math.random()* (max- min + 1)) + min)