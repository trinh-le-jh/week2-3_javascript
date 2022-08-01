const duplicateArray = [1,2,2,3,4,4,4,5,6]

const uniqueBySet = [...new Set(duplicateArray)]

console.log(uniqueBySet)

const uniqueByFilter = duplicateArray.filter((i, idx) => {
  return duplicateArray.indexOf(i) === idx
})

console.log(uniqueByFilter)

let i = 0
let length = duplicateArray.length
while (i < length) {
  if(duplicateArray.indexOf(duplicateArray[i]) !== i ) {
    duplicateArray.splice(i, 1)
    length = duplicateArray.length
  } else
    i += 1
}

console.log(duplicateArray)