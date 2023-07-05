import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import app from "../../assets/Download App/app.webp";
// Default theme
// import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export default function Testimonial() {
    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        perPage:3,
        perMove:1,

      };
    
      return (
        <div className="wrapper mt-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Testimonial</h2>
          <Splide
            options={ options }
            aria-labelledby="autoplay-example-heading"
            hasTrack={ false }
            
          >
            <div  className='custom-wrapper'>
              <SplideTrack >
                  <SplideSlide>
                    <img src={app} alt="" />
                    <p>start</p>
                  </SplideSlide>
              </SplideTrack>

            </div>
          </Splide>
        </div>
      );

}
