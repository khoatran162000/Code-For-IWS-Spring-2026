// ARITHMETIC OPERATORS
let x = 5;
let y = 3;
// Addition
console.log("x + y = ", x + y); // 8
// Subtraction
console.log("x - y = ", x - y); // 2
// Multiplication
console.log("x * y = ", x * y); // 15
// Division
console.log("x / y = ", x / y); // 1.666...
// Modulus
console.log("x % y = ", x % y); // 2
// Exponentiation
console.log("x ** y = ", x ** y); // 125
// Increment
console.log("++x = ", ++x); // x is now 6
console.log("x++ = ", x++); // prints 6, then x is now 7
console.log("x = ", x);  // 7
// Decrement
console.log("--y = ", --y); // y is now 2
console.log("y-- = ", y--); // prints 2, then y is now 1
console.log("y = ", y);  // 1


// COMPARISON OPERATORS
const a = 3, b = 2;
console.log(a > b); // true

// Equality
console.log(2 == 2); // true
console.log(2 == '2'); // false

// Not Equal
console.log(2 != 3); // true
console.log(2 != '2'); // true

// Strict Equality
console.log(2 === 2); // true
console.log(2 === '2'); // false

// Strict Not Equal
console.log(2 !== 3); // true
console.log(2 !== '2'); // true


// LOGICAL OPERATORS
const x1 = 5, y1 =3;
console.log(x1 < 6 && y1 < 5); // true

// Logical AND
console.log(true && false); // false
console.log(true && true); // true

// Logical OR
console.log(true || false); // true
console.log(false || false); // false

// Logical NOT
console.log(!true); // false
console.log(!false); // true


// STRING OPERATORS
// Concatenation
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2); // "Hello, World!"

// TERNARY OPERATOR
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote." : "No, too young to vote.";
console.log(canVote); // "Yes, can vote."


// If Else Statement
// Check if the input number is negative, positive or zero
let number = 0; // You can change this value to test different cases
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// Switch Statement
// Program for a simple calculator
let resultReturn;

// Take the operator input
let operator = prompt('Enter operator (+, -, *, /): ');
// Take 2 numbers input
let number1 = parseFloat(prompt('Enter first number: '));
let number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        resultReturn = number1 + number2;
        break;
    case '-':
        resultReturn = number1 - number2;
        break;
    case '*':
        resultReturn = number1 * number2;
        break;
    case '/':
        resultReturn = number1 / number2;
        break;
    default:
        console.log('Invalid operator!');
        break;
}
console.log(`${number1} ${operator} ${number2} = ${resultReturn}`);


// LOOP
// For Loop
// Program to display text 5 times
for (let i = 1; i <= 5; i++) {
    console.log("This is iteration number " + i);
}

// While Loop
// Program to display numbers from 1 to 5
let count = 1;
while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}

// Do...While Loop
// Program to display numbers from 1 to 5
let num = 1;
do {
    console.log("Number is: " + num);
    num++;
} while (num <= 5);

// For...In Loop
// Program to iterate over object properties
const person = {fname:"John", lname:"Doe", age:25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// For...Of Loop
// Program to iterate over array elements
const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

// BREAK AND CONTINUE
// Break Statement
// Program to find the first even number in an array
const numbers = [1, 3, 5, 4, 2];
for (let numBreak of numbers) {
    if (numBreak % 2 === 0) {
        console.log("First even number is: " + numBreak);
        break;
    }
}

// Continue Statement
// Program to print only odd numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd number: " + i);
}


// STRING IN JAVASCRIPT
const name = 'Peter';
const name1 = "Jack";
const name2 = `The names are ${name} and ${name1}`; // Using template literals

// Access String Characters
const a1 = 'Hello';
console.log(a1[0]); // H
const a2 = 'World';
console.log(a2.charAt(1)); // o

// JS Strings are Immutable
let a3 = 'Hello';
a3[0] = 'h'; // This will not change the string
console.log(a3); // Hello
// Correct way to change a string
a3 = 'h' + a3.slice(1);
console.log(a3); // hello

// JS is Case Sensitive
const greeting = 'Hello';
console.log(greeting === 'hello'); // false

// String Length
const strLength = 'Hello, World!';
console.log(strLength.length); // 13

// JS String Object
const a7 = "Hello World";
const a8 = new String("Hello World");
console.log(typeof a7); // string
console.log(typeof a8); // object

// Common String Methods
const text1 = "hello";
const text2 = "world";
const text3 = "      JavaScript      ";

// Concatenation
console.log(text1.concat(" ", text2)); // "hello world"
// Upper and Lower Case
console.log(text1.toUpperCase()); // "HELLO"
console.log(text2.toLowerCase()); // "world"
// Trim
console.log(text3.trim()); // "JavaScript"
// Split
console.log(text3.trim().split("")); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
// Slice
console.log(text1.slice(1, 4)); // "ell"
// JS String() Function
const value = 123;
const strValue = String(value);
console.log(typeof strValue); // "string"


// ARRAYS IN JAVASCRIPT
// Creating an Array
const array1 = ["Apple", "Banana", "Cherry"];
console.log(array1); // ["Apple", "Banana", "Cherry"]
const array2 = new Array("Dog", "Cat", "Mouse");
console.log(array2); // ["Dog", "Cat", "Mouse"]
//Empty Array
const array3 = [];
console.log(array3); // []
// Array of Numbers
const array4 = [1, 2, 3, 4, 5];
console.log(array4);
// Array of String
const array5 = ["Red", "Green", "Blue"];
console.log(array5);
// Array of Mixed Types
const array6 = [1, "Two", true, null];
console.log(array6);
// Store arrays, objects, functions in an array
const array7 = [
    [1, 2, 3],
    {name: "John", age: 30},
    function() { return "Hello"; }
];
console.log(array7);
// Accessing Array Elements
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Cherry"
// Adding Elements at the End
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]
// Adding Elements at the Beginning
fruits.unshift("Mango");
console.log(fruits); // ["Mango", "Apple", "Banana", "Cherry", "Date"]
// Adding Elements at Specific Index
fruits.splice(2, 0, "Orange"); // At index 2, remove 0 elements, add "Orange"
console.log(fruits); // ["Mango", "Apple", "Orange", "Banana", "Cherry", "Date"]
// Removing Elements from the End
fruits.pop();
console.log(fruits); // ["Mango", "Apple", "Orange", "Banana", "Cherry"]
// Removing Elements from the Beginning
fruits.shift();
console.log(fruits); // ["Apple", "Orange", "Banana", "Cherry"]
// Removing Elements from Specific Index
fruits.splice(1, 1); // At index 1, remove 1 element
console.log(fruits); // ["Apple", "Banana", "Cherry"]
// Array Length
console.log(fruits.length); // 3
// Looping through an Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Array Methods
const numbersArray = [5, 2, 9, 1, 5, 6];
// Sort
console.log(numbersArray.sort())
// Find Index of an Element
console.log(numbersArray.indexOf(9)); // 2
// Convert Array to String
console.log(numbersArray.toString()); // "1,2,5,5,6,9"
// Slicing an Array
console.log(numbersArray.slice(1, 4)); // [2, 5, 5]
// Merging Arrays
const moreNumbers = [10, 11, 12];
const mergedArray = numbersArray.concat(moreNumbers);
console.log(mergedArray); // [1, 2, 5, 5, 6, 9, 10, 11, 12]