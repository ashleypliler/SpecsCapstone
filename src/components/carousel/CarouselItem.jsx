import React from 'react'

 const CarouselItem = ({slide}) => {

  return (
    <div className='carousel-item'>
        <img src={slide}></img>
    </div>
  )
};

export default CarouselItem;
