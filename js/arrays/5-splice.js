const arr = [1, 2, 3, 4, 5, 6, 7, 9]

//delete
const arr2 = arr.splice(0, 4) // διαγραφή απο την θέση 0 ως την 4

console.log(arr2)
console.log(arr) // ο αρχικός πίνακας άλλαξε

//insert
arr.splice(0, 0, 10) // apo 0 os 0
console.log(arr)

// update
arr.splice(0, 1, 11) //  στη θέση 0 θα διαγραφθεί ένα στοιχςέιο και στην θέση του θα μπεί το 11
console.log(arr)