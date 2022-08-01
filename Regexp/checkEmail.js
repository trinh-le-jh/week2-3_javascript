const validEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const validateEmail = (email) => {
  return validEmail.test(email)
}

console.log(validateEmail('exe@example'))
console.log(validateEmail('tji.jhjnnn@example.com'))
console.log(validateEmail('kian_mintzlaff70@yahoo.com'))
console.log(validateEmail('e9b23900dd30e10aaa@example.com'))
