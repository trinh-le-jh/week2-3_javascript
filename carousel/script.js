let currentImageIndex = 0;

let nextBtn = null;
let prevBtn = null;

const listBigImage = [];

window.onload = () => {
  let container = document.getElementsByClassName('carousel-inner')[0];
  listBigImage.push(...container.children);
  
  nextBtn = document.getElementsByClassName('carousel-button right')[0];
  prevBtn = document.getElementsByClassName('carousel-button left')[0];
  
  listBigImage[currentImageIndex + 1].classList.add('next');
  prevBtn.style.display = 'none';
}

const onNextBtnClick = () => {
  const currentImage = listBigImage[currentImageIndex];
  const nextImage = listBigImage[currentImageIndex + 1];
  const secondNextImage = listBigImage[currentImageIndex + 2];
  
  currentImage.classList.add('out-right');
  nextImage.classList.add('in-left');
  
  setTimeout(() => {
    currentImage.classList.remove('out-right', 'active');
    currentImage.classList.add('prev');
    
    nextImage.classList.add('active');
    nextImage.classList.remove('next', 'in-left');
    if (secondNextImage)
      secondNextImage.classList.add('next');
    else
      nextBtn.style.display = 'none';
    
    prevBtn.style.display = 'flex';
    currentImageIndex += 1;
  }, 1000);
};

const onBackBtnClick = () => {
  const currentImage = listBigImage[currentImageIndex];
  const previousImage = listBigImage[currentImageIndex - 1];
  const secondPreviousImage = listBigImage[currentImageIndex - 2];
  
  currentImage.classList.add('out-left');
  previousImage.classList.add('in-right');
  
  setTimeout(() => {
    currentImage.classList.remove('out-left', 'active');
    currentImage.classList.add('next');
    
    previousImage.classList.add('active');
    previousImage.classList.remove('prev', 'in-right');
    if (secondPreviousImage)
      secondPreviousImage.classList.add('prev');
    else
      prevBtn.style.display = 'none';
    
    nextBtn.style.display = 'flex';
    currentImageIndex -= 1;
  }, 1000);
};