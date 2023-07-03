// import { useEffect, useState } from "react";
import Countdown from 'react-countdown';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import nike from "../../assets/brands/nike.jpg"
import dior from "../../assets/brands/dior.png"
import gucci from "../../assets/brands/gucci.png"
import puma from "../../assets/brands/puma.png"
import zara from "../../assets/brands/zara.png"

export default function Brand() {
    // const [count, setCount] = useState( new Date("July 10, 2023 15:37:25").getTime());

    // useEffect(() => {
  
    //     //Implementing the setInterval method
    //     const interval = setInterval(() => {
    //         var now = new Date().getTime();
    //         var distance = count - now;
    //         // Time calculations for days, hours, minutes and seconds
    //         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //         setCount(count + 1);
    //     }, 1000);
  
    //     //Clearing the interval
    //     return () => clearInterval(interval);
    // }, [count]);
    // Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        <div className="flex gap-5">
            <div className='flex flex-col justify-center'>
                <span className='text-center'>{days}</span>
                <span className='text-sm'>DAYS</span>
            </div>
            <div className='flex flex-col justify-center'>
                <span className='text-center'>{hours}</span>
                <span className='text-sm'>HOURS</span>
            </div>
            <div className='flex flex-col justify-center'>
                <span className='text-center'>{minutes}</span>
                <span className='text-sm'>MINS</span>
            </div>
            <div className='flex flex-col justify-center'>
                <span className='text-center'>{seconds}</span>
                <span className='text-sm'>SECS</span>
            </div>
        </div>
    )
  }
};
  return (
    <div className='px-8 py-8 mt-10 rounded-2xl  text-white mx-4' style={{backgroundColor:"#004743"}}>
        <div className="content flex justify-between">
            <div className="text">
                <h3 className="text-2xl font-bold">Top Brands Deal</h3>
                <p className="text-xl mt-4">Up To <span className='font-bold'>60% off on brands</span> </p>
            </div>
            <div className="timer">
            <Countdown date={'2023-07-05T01:02:03'} autoStart={true}  renderer={renderer} />

            </div>
        </div>
        <div>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

        breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
        className="h-32 mt-10 w-full px-4"
      >
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">

          <div className="content">
            <img src={nike} alt="" />
          </div>

        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">

          <div className="content">
            <img src={zara} alt="" />
          </div>

        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">

          <div className="content">
            <img src={gucci} alt="" />
          </div>

        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">

          <div className="content">
            <img src={dior} alt="" />
          </div>

        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">

          <div className="content">
            <img src={puma} alt="" />
          </div>

        </SwiperSlide>


      </Swiper>
        </div>
    </div>
  )
}
