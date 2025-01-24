let num1 = 10
let num2 = 3
let num3 = 0

let divResult = num1 / num2
let divZeroResult = num1 / num3
let expr = (num2 / num1) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1)
let intResult = Math.floor(num1 / num2)
let upperInt = Math.floor(num1 / num2)
let roundResult = Math.round(num1 / num2)

let num4 =-2
let modResult = num1 % num2
let modResult2 = num4 % num2
let modResult3 = num1 % num4


console.log(divResult, fixedDiv, divZeroResult, expr)
console.log("Division Result (num1 / num2):", divResult); // Division
console.log("Division Result (fixed to 1 decimal):", fixedDiv); // Fixed decimal
console.log("Division by Zero Result (num1 / num3):", divZeroResult); // Division by zero
console.log("Expression Result ((num2 / num1) * (8.5 / 3.3)):", expr); // Complex expression

console.log("Floor Result (integer division result):", intResult); // Floor
console.log("Ceiling Result (rounded up):", upperInt); // Ceiling
console.log("Rounded Division Result:", roundResult); // Rounded division

console.log("Modulo Result (num1 % num2):", modResult); // Modulo
console.log("Modulo Result (num4 % num2):", modResult2); // Modulo with negative number
console.log("Modulo Result (num1 % num4):", modResult3); // Modulo with negative divisor