import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import app from "../../assets/Download App/app.webp";
// Default theme
// import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import TestimonialCard from './TestimonialCard';
let data=[
  {
    name:"Federer Rojer",
    obj:"Tennis player",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
  },
  {
    name:"Nadal",
    obj:"Tennis player",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
  },
  {
    name:"Djokovic",
    obj:"Tennis player",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
  },
  {
    name:"Muray",
    obj:"Tennis player",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
  },

]
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
            className='pt-0'
          >
            <div  className='custom-wrapper grid grid-cols-1'>
              <SplideTrack className='grid lg:block' key={Math.random()}>
              {data.map(({ name,obj,text }) => (
                // eslint-disable-next-line react/jsx-key
                <SplideSlide>
                  <TestimonialCard name={name} obj={obj} text={text} key={Math.random()}/>
                </SplideSlide>

              ))}  
              </SplideTrack>

            </div>
          </Splide>
        </div>
      );

}
