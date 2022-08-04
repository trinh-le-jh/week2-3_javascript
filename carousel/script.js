let currentImageIndex = 0

let nextBtn = null
let prevBtn = null

const listImage = []
const listSmallImage = []

window.onload = (event) => {
  let container =  document.getElementsByClassName('carousel-inner')[0]
  listImage.push(...container.children)
  
  let containerSmallImage =  document.getElementsByClassName('carousel-indicators')[0]
  listSmallImage.push(...containerSmallImage.children)
  
  nextBtn = document.getElementsByClassName('carousel-button right')[0]
  prevBtn = document.getElementsByClassName('carousel-button left')[0]
  
  listImage[currentImageIndex + 1].classList.add('next')
  prevBtn.style.display = 'none'
}

const nextImageShow = () => {
  const cur = listImage[currentImageIndex]
  const next = listImage[currentImageIndex + 1]
  const nextNext = listImage[currentImageIndex + 2]
  
  cur.classList.add('out-right')
  next.classList.add('in-left')
  
  setTimeout(() => {
    cur.classList.remove('out-right', 'active')
    cur.classList.add('prev')
  
    next.classList.add('active')
    next.classList.remove('next', 'in-left')
    if(nextNext)
      nextNext.classList.add('next')
    else {
      nextBtn.style.display = 'none'
    }
    prevBtn.style.display = 'flex'
    currentImageIndex += 1
  },1000)
}

const previousImageShow = () => {
  const cur = listImage[currentImageIndex]
  const prev = listImage[currentImageIndex - 1]
  const prevPrev = listImage[currentImageIndex - 2]
  
  cur.classList.add('out-left')
  prev.classList.add('in-right')
  
  setTimeout(() => {
    cur.classList.remove('out-left', 'active')
    cur.classList.add('next')
  
    prev.classList.add('active')
    prev.classList.remove('prev', 'in-right')
    if(prevPrev)
      prevPrev.classList.add('prev')
    else {
      prevBtn.style.display = 'none'
    }
    nextBtn.style.display = 'flex'
    currentImageIndex -= 1
  },1000)
}