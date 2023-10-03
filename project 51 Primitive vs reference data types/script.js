// JavaScript has several primitive data types, including:
// Number: Represents numeric values (e.g., 42, 3.14).
const age = 30;  // Example of a number
const pi = 3.14;  // Another example of a number
console.log(age)
console.log(pi)

// tring: Represents sequences of characters (e.g., "hello").
const greeting = "Hello, world!";  // Example of a string
const name = 'Alice';  // Another example of a string
console.log(greeting)
console.log(name)

// Boolean: Represents true or false values.
const isStudent = true;  // Example of a boolean (true)
const hasCar = false;  // Example of a boolean (false)
console.log(isStudent)
console.log(hasCar)

// Null: Represents the intentional absence of any object value.
const data = null;  // Example of null
console.log(data)

// Undefined: Represents an uninitialized variable.
let variableWithoutValue;  // Example of undefined
console.log(variableWithoutValue)

// symbol: Introduced in ECMAScript 6 (ES6), representing unique values.
const uniqueSymbol = Symbol('description');  // Example of a symbol
console.log(uniqueSymbol )


// Examples of reference data types in JavaScript include:
// Object: A collection of key-value pairs (e.g., { name: 'John', age: 30 }).
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
console.log(person) 

// Array: An ordered list of values (e.g., [1, 2, 3]).
const numbers = [1, 2, 3, 4, 5];
console.log(numbers) 

// Function: A reusable block of code (e.g., function myFunction() { ... }).
const sayHello = function() {
    console.log('Hello!');
  };
console.log(sayHello)   

// Date: Represents a date and time.
// Create a new Date object representing the current date and time.
const currentDate = new Date();

// Get the year, month, day, hour, minute, second, and millisecond of the current date and time.
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();
const millisecond = currentDate.getMilliseconds();

// Set the date and time of a Date object.
currentDate.setFullYear(2023);
currentDate.setMonth(9);
currentDate.setDate(30);
currentDate.setHours(10);
currentDate.setMinutes(50);
currentDate.setSeconds(9);
currentDate.setMilliseconds(0);

// Compare two Date objects.
const date1 = new Date(2023, 9, 30, 10, 50, 9, 0);
const date2 = new Date(2023, 9, 30, 10, 50, 9, 0);

// date1 and date2 are equal.
console.log(date1 === date2); // true

// Format a Date object as a string.
const formattedDate = currentDate.toLocaleDateString();

// formattedDate will contain a string representing the current date in the local format.
console.log(formattedDate); // 2023-09-30



// Regular Expression:
const regex = /[a-zA-Z]+/;
console.log(regex) 


// Operations on reference types often involve working with the referenced data via the reference.
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const john = new Person('John', 25);
  console.log(person) 