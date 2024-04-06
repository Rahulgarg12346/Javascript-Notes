// ***************************array **************************************88

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeors = ['shaktiman', 'naagraj']

const myArr2 =  new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods 

let fruits = ['apple', 'banana', 'cherry'];

// Adding/Removing Elements
fruits.push('date');                // Adds 'date' to the end of the array
console.log(fruits);                // Output: ['apple', 'banana', 'cherry', 'date']

fruits.pop();                       // Removes the last element ('date')
console.log(fruits);                // Output: ['apple', 'banana', 'cherry']

fruits.unshift('apricot');          // Adds 'apricot' to the beginning of the array
console.log(fruits);                // Output: ['apricot', 'apple', 'banana', 'cherry']

fruits.shift();                     // Removes the first element ('apricot')
console.log(fruits);                // Output: ['apple', 'banana', 'cherry']

// Concatenation
let moreFruits = ['date', 'elderberry'];
let allFruits = fruits.concat(moreFruits);  // Concatenates two arrays
console.log(allFruits);             // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

// Slicing/Splicing
let slicedFruits = allFruits.slice(1, 4);  // Extracts elements from index 1 to index 3
console.log(slicedFruits);          // Output: ['banana', 'cherry', 'date']

let removedFruits = allFruits.splice(2, 2); // Removes 2 elements starting from index 2
console.log(removedFruits);         // Output: ['cherry', 'date']
console.log(allFruits);             // Output: ['apple', 'banana', 'elderberry']

// Searching/Filtering
let index = allFruits.indexOf('banana'); // Finds the index of 'banana'
console.log(index);                  // Output: 1

let filteredFruits = allFruits.filter(fruit => fruit.startsWith('b')); // Filters fruits starting with 'b'
console.log(filteredFruits);        // Output: ['banana']

// Iteration
allFruits.forEach(fruit => console.log(fruit));  // Iterates through each element

let capitalizedFruits = allFruits.map(fruit => fruit.toUpperCase()); // Maps each element to uppercase
console.log(capitalizedFruits);     // Output: ['APPLE', 'BANANA', 'ELDERBERRY']

let totalLength = allFruits.reduce((acc, fruit) => acc + fruit.length, 0); // Reduces to total length
console.log(totalLength);           // Output: 18

// Sorting
let sortedFruits = allFruits.sort(); // Sorts the array alphabetically
console.log(sortedFruits);          // Output: ['apple', 'banana', 'elderberry']

// Reversing
let reversedFruits = allFruits.reverse(); // Reverses the array
console.log(reversedFruits);        // Output: ['elderberry', 'banana', 'apple']


//----------------------------------------------------------------------------------------------------------------------------------

console.log(fruits.includes(9)); // false 
console.log(fruits.indexOf("apple"));// 0

const newArr= fruits.join()
console.log(fruits)// ["apple",'banana','cherry']
console.log(newArr)// apple,banana,cherry
console.log(typeof newArr)// string


