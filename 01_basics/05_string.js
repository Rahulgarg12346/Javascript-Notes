// const name ="rahul"
// const repocount =50

// // console.log(name + repocount + "value");

// console.log(`hello my name is ${name} and my repocount is ${repocount}`)

// // ---------String-------------

// // const name = "jatin";
// const repository = 4;

// // console.log(name +repository +"value");

// console.log(`Hello is ${name} the repository ${repository}`);

// const gamename = new String("abcdefght");
// console.log(gamename[0]);

// console.log(gamename.__proto__);

// // console.log(gamename.length);

// // console.log(gamename.toUpperCase());

// // console.log(gamename.charAt(2));

// console.log(gamename.indexOf('t'));

// // console.log(gamename.substring(2,3));

// // console.log(gamename.substring(2));

// // console.log(gamename.slice(-8,4));

// const newString ="   rahul   "
// console.log(newString)
// console.log(newString.trim())// use of trim is remove spacing starting and ending

// const url = "https://rahul.com/garg%20baniya"

// console.log( url.replace('%20','-')) // replace krne ke liye value ki 
// console.log(url.includes("baniya"))
// const shikha = "s-h-i-k-h-a"
// console.log(shikha.split('-')) // split by - and convert to arrary


//************************************** string all methods ************

let s = "hello";

// Case conversion
console.log(s.toUpperCase());       // Convert to uppercase
console.log(s.toLowerCase());       // Convert to lowercase
console.log(s.charAt(0).toUpperCase() + s.slice(1)); // Capitalize first character
console.log(s.replace(/\b\w/g, c => c.toUpperCase())); // Convert string to title case

// String modification
console.log(s.trim());              // Remove leading and trailing whitespace
console.log(s.trimStart());         // Remove leading whitespace
console.log(s.trimEnd());           // Remove trailing whitespace
console.log(s.replace('o', 'i'));   // Replace occurrences of 'o' with 'i'
console.log(s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')); // Swap case of characters

// Search and manipulation
let sub = 'el';
console.log(s.indexOf(sub));        // Return index of first occurrence of substring (or -1 if not found)
console.log(s.lastIndexOf(sub));    // Return index of last occurrence of substring (or -1 if not found)
console.log(s.includes(sub));       // Check if string contains substring
console.log(s.startsWith('he'));    // Check if string starts with prefix
console.log(s.endsWith('lo'));      // Check if string ends with suffix
console.log(s.split(sub).length - 1); // Return the number of occurrences of substring

// String splitting and joining
let sep = 'l';
console.log(s.split(sep));         // Split string into an array of substrings using separator
console.log(s.split('').reverse().join('').split(sep).reverse()); // Split string into an array of substrings using separator, starting from the right
console.log(s.split('\n'));         // Split string at line breaks
let iterable = ['a', 'b', 'c'];
console.log(iterable.join(s));      // Join iterable of strings into a single string using s as separator

// Formatting
console.log(`Formatted: ${s}`);     // Format string (template literal)
