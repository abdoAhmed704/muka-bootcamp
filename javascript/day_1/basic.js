//================================ task 1 =================================================


/*
| Feature        | var                              | let                               | const                              |
|----------------|----------------------------------|-----------------------------------|------------------------------------|
| Scope          | Function-scoped                  | Block-scoped                      | Block-scoped                      |
| Hoisting       | Yes, hoisted but not initialized | Yes, hoisted but not initialized  | Yes, hoisted but not initialized  |
| Reassignment   | Yes                              | Yes                               | No                                |
| Redeclaration  | Yes                              | No                                | No                                |
| Initial Value  | Optional                         | Optional                          | Required                          |
*/

//================================ task 2 =================================================

// var 
var Abdo = 10;
console.log("var a:", Abdo); // 10
Abdo = 20;
console.log("var a after reassignment:", Abdo); // 20

// let 
let Ahmed = 30;
console.log("let b:", Ahmed); // 30
Ahmed = 40;
console.log("let b after reassignment:", Ahmed); // 40

//const 
const sayed = 50;
console.log("const c:", sayed); // 50

//================================ task 3 =================================================


let number = 5;
let newString = "5";
let result1 = number + newString;
console.log("num + str:", result1); // "55"

let result2 = number - newString;
console.log("num - str:", result2); // 0

let bool = true;
let result3 = number + bool;
console.log("num + bool:", result3); // 6

//================================ task 4 =================================================


/*
| Type            | Operator   | Description                                 | Example                     |
|-----------------|------------|---------------------------------------------|-----------------------------|
| Arithmetic      | +          | Addition                                    | 5 + 3 = 8                   |
| Arithmetic      | -          | Subtraction                                 | 5 - 3 = 2                   |
| Arithmetic      | *          | Multiplication                              | 5 * 3 = 15                  |
| Arithmetic      | /          | Division                                    | 15 / 3 = 5                  |
| Arithmetic      | %          | Modulus (Remainder)                         | 5 % 2 = 1                   |
| Arithmetic      | ++         | Increment                                   | let a = 5; a++; // 6        |
| Arithmetic      | --         | Decrement                                   | let a = 5; a--; // 4        |
| Comparison      | ==         | Equal to (type coercion allowed)            | 5 == '5' // true            |
| Comparison      | ===        | Strict equal to (no type coercion)          | 5 === '5' // false          |
| Comparison      | !=         | Not equal to (type coercion allowed)        | 5 != '5' // false           |
| Comparison      | !==        | Strict not equal to (no type coercion)      | 5 !== '5' // true           |
| Comparison      | >          | Greater than                                | 5 > 3 // true               |
| Comparison      | <          | Less than                                   | 3 < 5 // true               |
| Comparison      | >=         | Greater than or equal to                    | 5 >= 5 // true              |
| Comparison      | <=         | Less than or equal to                       | 3 <= 5 // true              |
| Logical         | &&         | Logical AND                                 | true && false // false      |
| Logical         | ||         | Logical OR                                  | true || false // true       |
| Logical         | !          | Logical NOT                                 | !true // false              |
*/


//================================ task 5 =================================================

let x = 5, y = 3;
console.log("x + y:", x + y);  // 8
console.log("x - y:", x - y);  // 2
console.log("x * y:", x * y);  // 15
console.log("x / y:", x / y);  // 1.67
console.log("x % y:", x % y);  // 2

//================================ task 6 =================================================

let num1 = 5, num2 = '5';
console.log("num1 == num2:", num1 == num2);  // true
console.log("num1 === num2:", num1 === num2);  // false
console.log("num1 > 3:", num1 > 3);  // true
console.log("num1 <= 5:", num1 <= 5);  // true


//================================ task 7 =================================================

let a = true, b = false;
console.log("a_bool && b_bool:", a && b);  // false
console.log("a_bool || b_bool:", a || b);  // true
console.log("!a_bool:", !a);  // false


//================================ task 8 =================================================

let numberOne = 10;
if (numberOne % 2 === 0) {
    console.log(numberOne + " is even");
} else {
    console.log(numberOne + " is odd");
}


//================================ task 9 =================================================

let string1 = "Hello";
let string2 = "Hello";
if (string1 === string2) {
    console.log("The strings are equal.");
} else {
    console.log("The strings are not equal.");
}

