const listQuestion = {
  "1": {
    "question": "what you gonna do today?",
    "answers": {
      "3": "go to work"
    },
    "parentId": "0"
  },
  "3": {
    "question": "where is the office?",
    "answers": {
      "4": "District 1",
      "5": "District 8",
    },
    "parentId": "1"
  },
  "4": {
    "comment": "I hear that the office has move.",
    "parentId": "3"
  },
  "5": {
    "comment": "Have a nice day.",
    "parentId": "3"
  }
};

function ask(question) {
  if (!question || !question.question) return;
  
  let listAnswer = '';
  let answerMapping = {};
  
  Object.keys(question.answers).forEach( (answer, idx) => {
    listAnswer += `\n ${idx}. ${question.answers[answer]}`;
    answerMapping[idx] = answer;
  })
  
  const answer = prompt(`${question.question} \n ${listAnswer}`);
  
  const nextQuestionId = answerMapping[answer];
  
  if(listQuestion[nextQuestionId] === undefined)
    return;
  
  if(listQuestion[nextQuestionId].comment) {
    alert(listQuestion[nextQuestionId].comment);
    return;
  }
  
  ask(listQuestion[nextQuestionId]);
};

ask(listQuestion[1]);