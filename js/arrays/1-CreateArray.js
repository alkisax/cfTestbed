const arr = []
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, "alice", 3.4, true]
const sparceArray = [1, ,3] // τα στοιχεία είναι μικρότερα απο το Length
const arr3 = [ , , ,] //3 στοιχεία
const arr4 = new Array(2) //2 undefined στοιχεία
const grid = [[1, 2], [3, 4], [5, 6, 7]]
const objArr = [{id: 1}, {id: 2}, {id: 3}]

console.log(arr1[0])  //1

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

for (const el of arr1) {
  console.log(el)
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j< grid[i].length; j++) {
    console.log(grid[i][j])
  }
}

for (const row of grid) {
  for (const item of row) {
    console.log(item)
  }
}



