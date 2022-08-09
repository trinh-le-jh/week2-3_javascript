// import myJson from './data.json' assert {type: 'json'};
// console.log('myJson', myJson)

const obj = {
  "1": {
    "id":"1",
    "question": "what you gonna do today?",
    "answers": [ 3 ],
    "parentId": "0"
    
  },
  "3": {
    "id": "3",
    "answer": "go to work",
    "question": "where is the office?",
    "answers": [ 4, 5 ],
    "parentId": "1"
  },
  "4": {
    "id": "5",
    "answer": "District 1",
    "comment": "I hear that the office has move.",
    "parentId": "3"
  },
  "5": {
    "id": "6",
    "answer": "District 8",
    "comment": "Have a nice day.",
    "parentId": "3"
  }
}

console.log('1')


function ask(question) {
  if (!question) return

  const answer = prompt(
    question.question + '\n'
    + question.answers.map( (answerId, idx) =>
      '\n' + idx + '. ' + obj[answerId].answer
    )
  )
  
  const nextQuestionId = question.answers[answer]

  if(obj[nextQuestionId] === undefined)
    return

  if (obj[nextQuestionId].question) {
    ask(obj[nextQuestionId])
    return
  }

  if(obj[nextQuestionId].comment)
    alert(obj[nextQuestionId].comment)
}

ask(obj[1])

console.log('444444')