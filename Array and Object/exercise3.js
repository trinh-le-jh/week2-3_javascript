function ask(question) {
  if (!question) return
  
  const answer = prompt(
    question.question + '\n'
    + question.answers.map( ({ answer }, idx) =>
      '\n' + idx + '. ' + answer
    )
  )
  
  if(question[answer] === undefined)
    return
  
  if (question.answers[answer].question) {
    ask(question.answers[answer])
    return
  }
  
  if(question.answers[answer].comment)
    alert(question.answers[answer].comment)
}

const questionTree = {
  question: 'Do you have life?',
  answers: [
    {
      answer: 'What the heck are you talking about?',
      comment: 'Hmm...'
    },
    {
      answer: 'No',
      comment: 'You are a programmer'
    }
  ]
}

ask(questionTree)