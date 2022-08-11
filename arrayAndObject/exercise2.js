const duplicateArray = [1, 2, 4, 4, 4, 5, 6, 7, 1, 2, 4, 5, 7, 2, 2, 1];

const countDuplicate = duplicateArray.reduce((previousValue, currentValue) => {
  const newTotalDuplicate = (previousValue.counterList[currentValue] || 0) + 1;
  previousValue.counterList[currentValue] = newTotalDuplicate;
  
  if (newTotalDuplicate > previousValue.maximumDuplicate) {
    previousValue.maximumDuplicate = newTotalDuplicate;
    previousValue.mostDuplicate.clear();
    previousValue.mostDuplicate.add(currentValue);
  }
  
  if (newTotalDuplicate === previousValue.maximumDuplicate) {
    previousValue.mostDuplicate.add(currentValue);
  }
  
  return {
    counterList: previousValue.counterList,
    maximumDuplicate: previousValue.maximumDuplicate,
    mostDuplicate: previousValue.mostDuplicate
  };
}, {counterList: {}, maximumDuplicate: 0, mostDuplicate: new Set()});

console.log(countDuplicate);
