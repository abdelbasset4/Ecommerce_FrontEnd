import  { useEffect, useRef } from 'react';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { generateSlides } from './generateSlides';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ProductCarousel = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const renderSlides = () => {
    return generateSlides().map((slide) => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} className='w-full h-full'/>
      </SplideSlide>
    ));
  };

  const mainOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    height: '25rem',

  };

  const thumbsOptions = {
    type: 'slide',
    rewind: true,
    gap: '1rem',
    pagination: false,
    fixedWidth: 100,
    fixedHeight: 60,
    cover: true,
    focus: 'center',
    isNavigation: true,
  };

  return (
    <div className="wrapper">

      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
        className='py-0'
      >
        {renderSlides()}
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        className='py-2'
      >
        {renderSlides()}
      </Splide>
    </div>
  );
};

export default ProductCarousel;
