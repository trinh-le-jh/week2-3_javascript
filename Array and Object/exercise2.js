const arr = [1,2,4,4,4,5,6,7,1,2,4,5,7,2,2,1]

const countDuplicate = arr.reduce((acc, cur) => {
    const newTotalDuplicate = (acc.counterList[cur] || 0) + 1
    acc.counterList[cur] = newTotalDuplicate
    
    if (newTotalDuplicate > acc.maximumDuplicate) {
        acc.maximumDuplicate = newTotalDuplicate
        acc.mostDuplicate.clear()
        acc.mostDuplicate.add(cur)
    }
    
    if (newTotalDuplicate === acc.maximumDuplicate) {
        acc.mostDuplicate.add(cur)
    }
    
    return {
        counterList: acc.counterList,
        maximumDuplicate: acc.maximumDuplicate,
        mostDuplicate: acc.mostDuplicate
    }
}, {counterList: {}, maximumDuplicate: 0, mostDuplicate: new Set()})

console.log(countDuplicate)
