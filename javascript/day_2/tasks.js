
/*
| Feature                | Function Declaration       | Function Expression          | Arrow Function               |
|------------------------|----------------------------|------------------------------|------------------------------|
| Hoisting               | Yes                        | No                           | No                           |
| this Context           | Dynamic                    | Dynamic                      | Lexical                      |
| Syntax                 | function funcName() {}     | const funcName = function(){} | const funcName = () => {}    |
| Arguments Object       | Available                  | Available                    | Not available                |
| Use of 'this' keyword  | Depends on how it's called | Depends on how it's called   | Inherits from parent scope   |
*/

function hello() {
    return "Hello from Function Declaration!";
}
console.log(hello()); 

// Function Expression
const helloHello = function () {
    return "Hello from Function Expression!";
};
console.log(helloHello()); // "Hello from Function Expression!"

// Arrow Function
const helloArrow = () => "Hello from Arrow Function!";
console.log(helloArrow()); // "Hello from Arrow Function!"


// the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}
const numbers = [5, 10, 15, 20];
console.log("Maximum value:", findMax(numbers)); // 20

// Function that returns the product of two parameters using regular function
function multiply(a, b) {
    return a * b;
}
console.log("Regular function multiply:", multiply(5, 6)); // 30


// Function that returns the product of two parameters using arrow function
const multiplyArrow = (a, b) => a * b;
console.log("Arrow function multiply:", multiplyArrow(5, 6)); // 30
