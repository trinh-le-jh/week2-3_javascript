const arr = [1,2,4,4,4,5,6,7,1,2,4,5,7,2,2,1]

const countDuplicate = arr.reduce((acc, cur) => ({
    list: {...acc.list, [cur]: (acc.list[cur] || 0) + 1},
    max: (((acc.list[cur] || 0) + 1) > acc.max ? ((acc.list[cur] || 0) + 1) : acc.max)})
, {list: {}, max: 0})

const listDuplicate = Object.keys(countDuplicate.list).filter((i) =>
  countDuplicate.list[i] == countDuplicate.max)

console.log(listDuplicate)