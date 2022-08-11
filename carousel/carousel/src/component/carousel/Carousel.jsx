import {memo, useEffect, useState} from "react";
import './index.css';

const nextImageClass = 'next';
const previousImageClass = 'prev';
const currentActiveImageClass = 'active';

const sliceArray = (array, chunkSize) => {
  const copyArray = [...array];
  return Array.from(
    {length: Math.ceil(copyArray.length / chunkSize)},
    () => copyArray.splice(0, chunkSize)
  );
};

const CarouselButton = ({onClickFunction, position, hidden}) => {
  if (hidden) return null;
  return (
    <button
      className={`${position} carousel-button`}
      role="button"
      onClick={onClickFunction}
    >
      <i className={`${position} arrow`}></i>
    </button>
  )
};

const ListSmallImage = ({imageLinks}) => {
  return (
    <ol className="carousel-small-images">
      {imageLinks.map((imageLink, index) => (
        <li className="small-image-item" key={`${imageLinks}-small-${index}`}>
          <img
            src={imageLink}
            alt=""
          />
        </li>
      ))}
    </ol>
  )
};

const ImageShow = ({imageLinks}) => {
  return (
    <div className="big-image-frame">
      {imageLinks.map((link) => (
        <img
          key={`${link}-show`}
          src={link}
          alt=""
          className="big-image"
        />
      ))}
    </div>
  )
};

const Carousel = ({imageLinks, numberImageShowPerTime, smallImagePosition}) => {
  const [listImageRender, setListImageRender] =
    useState(sliceArray(imageLinks, numberImageShowPerTime));
  const [listBigImage, setListBigImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const onBackBtnClick = () => {
    const currentImage = listBigImage[currentImageIndex];
    const previousImage = listBigImage[currentImageIndex - 1];
    const secondPreviousImage = listBigImage[currentImageIndex - 2];
  
    currentImage.classList.add('out-left');
    previousImage.classList.add('in-right');
  
    setTimeout(() => {
      currentImage.classList.remove('out-left', currentActiveImageClass);
      currentImage.classList.add( nextImageClass);
    
      previousImage.classList.add(currentActiveImageClass);
      previousImage.classList.remove(previousImageClass, 'in-right');
      if (secondPreviousImage)
        secondPreviousImage.classList.add(previousImageClass);
    }, 1000);
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const onNextBtnClick = () => {
    const currentImage = listBigImage[currentImageIndex];
    const nextImage = listBigImage[currentImageIndex + 1];
    const secondNextImage = listBigImage[currentImageIndex + 2];
  
    currentImage.classList.add('out-right');
    nextImage.classList.add('in-left');
  
    setTimeout(() => {
      currentImage.classList.remove('out-right', currentActiveImageClass);
      currentImage.classList.add(previousImageClass);
    
      nextImage.classList.add(currentActiveImageClass);
      nextImage.classList.remove( nextImageClass, 'in-left');
      if (secondNextImage)
        secondNextImage.classList.add( nextImageClass);
    }, 1000);
    setCurrentImageIndex(currentImageIndex + 1);
  };
  
  useEffect(() => {
    let container =
      document.getElementsByClassName('carousel-inner');
    setListBigImage(container[0].children);
    container[0].children[1].classList.add( nextImageClass);
  }, []);
  
  useEffect(() => {
    setListImageRender(sliceArray(imageLinks, numberImageShowPerTime));
  }, [numberImageShowPerTime]);

  return (
    <div className={`container display-small-${smallImagePosition}`}>
      <div className="carousel slide">
        <div className="carousel-inner">
          {listImageRender.map((imageLink) => (
            <ImageShow key={`${imageLink}-container`} imageLinks={imageLink}/>
          ))}
        </div>

        <CarouselButton
          position="left"
          onClickFunction={onBackBtnClick}
          hidden={currentImageIndex === 0}
        />

        <CarouselButton
          position="right"
          onClickFunction={onNextBtnClick}
          hidden={currentImageIndex === (listImageRender.length -1)}
        />
      </div>
      <ListSmallImage imageLinks={imageLinks}/>
    </div>
  )
}

export default memo(Carousel)