const duplicateArray = [1,2,2,3,4,4,4,5,6]

const removeDuplicateBySet = (arr) => {
  return [...new Set(arr)]
}

const removeDuplicateByFilter = (arr) => {
  return arr.filter((i, idx) => {
    return arr.indexOf(i) === idx
  })
}

const removeDuplicateWithLoop = (arr) => {
  const copyArr = [...arr]
  let i = 0
  let length = copyArr.length
  while (i < length) {
    if(copyArr.indexOf(copyArr[i]) !== i ) {
      copyArr.splice(i, 1)
      length = copyArr.length
    } else
      i += 1
  }
  return copyArr
}

const main = () => {
  console.log('Remove duplicate by using Set')
  console.log(removeDuplicateBySet(duplicateArray))
  
  console.log('Remove duplicate by using Filter')
  console.log(removeDuplicateByFilter(duplicateArray))
  
  console.log('Remove duplicate by go through a loop and remove duplicate')
  console.log(removeDuplicateWithLoop(duplicateArray))
}

main()