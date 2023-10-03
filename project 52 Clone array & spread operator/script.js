// //The spread operator (...) 
// const originalArray = [1, 2, 3];
// const clonedArray = [...originalArray];
// console.log(clonedArray); // [1, 2, 3]

// The slice() method
const string = 'Hello, world!';
// Extract the first 5 characters
const slicedString = string.slice(0, 5);
console.log('Sliced String:', slicedString); // 'Hello'


// The Array.from() 
// Create an array from a set
const set = new Set([1, 2, 3, 4, 5]);
const setArray = Array.from(set);
console.log(setArray); // [1, 2, 3, 4, 5]


// // The concat() 
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// // Concatenate the two arrays
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

// The concat() 
const numbersArray = [1, 2, 3];
const stringsArray = ['a', 'b', 'c'];
// Concatenate the two arrays
const concatenatedArray = numbersArray.concat(stringsArray);
console.log(concatenatedArray); // [1, 2, 3, 'a', 'b', 'c']

// The map() 
const originalArray = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
// Map each object to a new object with a different property name
const renamedArray = originalArray.map((object) => ({
  firstName: object.name,
  lastName: object.age,
}));
console.log(renamedArray); // [{ firstName: 'Alice', lastName: 25 }, { firstName: 'Bob', lastName: 30 }]


// The reduce() 
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Numbers:', numbers);  // [1, 2, 3, 4, 5]
console.log('Sum:', sum);           // 15
