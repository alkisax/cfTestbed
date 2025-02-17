//1
const nums = [1, 5, -4, 7, 10, 3, 9, 4, -1];
const positiveNums = [1, 5, 7, 10, 3, 9, 4];
const negativeNums = [-1, -2, -3]
console.log(nums);

const maped = nums.map(num => num * 2)
console.log("nums dubled: ", maped);

//2
console.log();
const filtered = nums.filter(num => {
  return num % 2 === 0
})
console.log("onle even: ", filtered);

//3 
console.log();
const isPossitiveInside = nums.some(num => {
  return num > 0  
})
const isPossitiveInside2 = positiveNums.some(num => {
  return num > 0  
})
const isPossitiveInside3 = negativeNums.some(num => {
  return num > 0  
})
console.log("isPossitiveInside nums", isPossitiveInside);
console.log("isPossitiveInside positiveNums", isPossitiveInside2);
console.log("isPossitiveInside negativeNums", isPossitiveInside3);

//4
console.log();
const isAllPossitiveInside = nums.every(num => {
  return num > 0  
})
const isAllPossitiveInside2 = positiveNums.every(num => {
  return num > 0  
})
const isAllPossitiveInside3 = negativeNums.every(num => {
  return num > 0  
})
console.log("isAllPossitiveInside nums", isAllPossitiveInside);
console.log("isAllPossitiveInside positiveNums", isAllPossitiveInside2);
console.log("isAllPossitiveInside negativeNums", isAllPossitiveInside3);

console.clear();

//5
const persons = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Diana', age: 28 },
  { name: 'Eve', age: 40 }
];

const young = persons.filter(person => person.age <= 30)
console.log("young: ", young);

const onlyName = persons.map(person => person.name)
console.log("only names: ", onlyName);
