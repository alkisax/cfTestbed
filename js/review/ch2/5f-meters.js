function convertMeters(meters){
  return {
    centimeters: meters * 100,
    millimeters: meters * 1000,
  }
}

function convertCentimeters(centimeters){
  return {
    meters: centimeters / 100,
    millimeters: centimeters * 10,
  }
}

function convertMillimeters(mm){
  return {
    meters: mm / 1000,
    centimeters: centimeters / 10,
  }
}


const obj = convertMillimeters(1500)
console.log(obj.meters)
console.log(obj.centimeters)
