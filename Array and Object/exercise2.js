const arr = [1,2,4,4,4,5,6,7,1,2,4,5,7,2,2,1]

const countDuplicate = arr.reduce((acc, cur) => {
    const newTotalDuplicate = (acc.counterList[cur] || 0) + 1
    acc.counterList[cur]= newTotalDuplicate
    
    return {
        counterList: acc.counterList,
        max: (newTotalDuplicate > acc.max ? newTotalDuplicate : acc.max)
    }
}, {counterList: {}, max: 0})

const listDuplicate = Object.keys(countDuplicate.counterList).filter((i) =>
  countDuplicate.counterList[i] == countDuplicate.max)

console.log('Most common item: ' + listDuplicate.join(', '))