const name = "alkis"
console.log(`Hello, ${name}`)
//
const num1 = 1
const num2 = 2
console.log(`result of ${num1} + ${num2} = ${num1 + num2}`)
//
const isTrue = true
console.log(
  isTrue?
  "Είναι αλήθεια!":
  "Είναι ψευδές!"
)
//
const cities = [
  "Athens",
  "London",
  "Paris"
]
cities.push("Berlin")
for (const city of cities){
  console.log(city)
}
//
const user = {
  name:"Alkis",
  age:44,
  city:"Athens"
}
console.log(`user name: ${user.name}, age: ${user.age}, from ${user.city}`)
const hello = () => {
  console.log(`Hello ${user['name']}`)
}
hello()
//
const surface = (radious) => {
  return Math.PI * radious
}
console.log(`το εμβαδον αν η ακτινα είναι 5 είναι ${surface(5).toFixed(2)}`)
//
const set = (arr) => {
  const unique = []
  for (const el of arr) {
    if (!unique.includes(el)){
      unique.push(el)
    }
  }
  return unique
}
const arr = [1, 2, 2, 3, 4, 4, 5, 1, 6, 3];
console.log("Original Array:", arr);
console.log("Array with Unique Elements:", set(arr));
//
// const singleD = (nestedArray) => {
//   const result = []
//   for (const el of nestedArray) {
//     if (Array.isArray(el)){
//     result.push(...singleD(el))
//     } else {
//       result.push(el)
//     }
//   } 
//   return result
// }
// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// console.log("Αρχικός πίνακας:", nestedArray);
// console.log("Flattened πίνακας:", singleD(nestedArray));

const singleD2 = (nestedArray) => {
  let i = 0
  let result = []
  while (i < nestedArray.length) {
    if (Array.isArray(nestedArray[i])){
      let j=0
      while (j < nestedArray[i].length){
        result.push(nestedArray[i][j])
        j++
      }
    } else {
      result.push(nestedArray[i])
    }
    i++
  }
  return result
}
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log("Αρχικός πίνακας:", nestedArray);
console.log("Flattened πίνακας:", singleD2(nestedArray));
const nestedArray2 = [1, [2, 3], 4, [5, 6], 7];
console.log("Αρχικός πίνακας:", nestedArray2);
console.log("Flattened πίνακας:", singleD2(nestedArray2));
//
