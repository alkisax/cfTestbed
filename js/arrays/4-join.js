const arr = [1, 2, 3]
console.log(arr)
console.log(arr.join(", "))

let out = ""
for (let item of arr) {
  out += item + ", "
}
console.log(out)
