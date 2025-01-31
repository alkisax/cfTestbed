const initial = [1, 2, 3]
const copy = [...initial]

const extended = [0, ...initial, 4]
const chars = [..."Hello"]
console.log(extended)
console.log(copy)
console.log(chars)