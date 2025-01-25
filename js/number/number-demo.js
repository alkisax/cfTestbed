console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)

if (Number.isInteger(12)) {
  console.log("12 is an integer")
} else {
  console.log("12 is not an integer")
}

if (Number.isNaN(Nan)) {
  console.log(true)
} else {
  console.log(false)
} 

if (isNaN(Nan)) {
  console.log("Is NaN")
} else {
  console.log("Is not NaN")
}

console.log(Number.parseInt("44"))
console.log(parseInt("44"))

console.log(Number.parseFloat("44.44"))
console.log(parseFloat("44.44"))

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloats(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}
console.log(compareFloats(num1, num2))