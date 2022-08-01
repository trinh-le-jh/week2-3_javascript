const validPassword = new RegExp(/^((?=.*[a-z])(?=.*[A-Z]))(?=.*\d)(?=.*[`~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d`~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/)

const validatePassword = (email) => {
  return validPassword.test(email)
}

// Contain all
console.log(validatePassword('e93W@b239'))

// No special character and upper case
console.log(validatePassword('e9b23989'))

// No number
console.log(validatePassword('kian_miUw'))

// No upper case
console.log(validatePassword('tji.jh2r'))

// No special character
console.log(validatePassword('exRom2ue'))

// Not long enough
console.log(validatePassword('aU1#e'))
