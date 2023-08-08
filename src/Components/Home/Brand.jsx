// import { useEffect, useState } from "react";
import Countdown from "react-countdown";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import nike from "../../assets/brands/nike.jpg";
import dior from "../../assets/brands/dior.png";
import gucci from "../../assets/brands/gucci.png";
import puma from "../../assets/brands/puma.png";
import zara from "../../assets/brands/zara.png";
import { Link } from "react-router-dom";

export default function Brand() {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex gap-5">
          <div className="flex flex-col justify-center">
            <span className="text-center">{days}</span>
            <span className="text-sm">DAYS</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-center">{hours}</span>
            <span className="text-sm">HOURS</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-center">{minutes}</span>
            <span className="text-sm">MINS</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-center">{seconds}</span>
            <span className="text-sm">SECS</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div
      className="px-8 py-8 mt-10 rounded-2xl  text-white mx-4"
      style={{ backgroundColor: "#004743" }}>
      <div className="content flex flex-col lg:flex-row gap-3 justify-center lg:justify-between">
        <div className="text">
          <h3 className="text-2xl font-bold">Top Brands Deal</h3>
          <p className="text-xl mt-4">
            Up To <span className="font-bold">60% off on brands</span>{" "}
          </p>
        </div>
        <div className="timer">
          <Countdown
            date={"2023-09-05T01:02:03"}
            autoStart={true}
            renderer={renderer}
          />
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
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-32 mt-10 w-full px-4">
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
        <div className="mx-auto my-5 text-center ">
          <Link
            to="brands"
            className="inline-flex items-center justify-center rounded-md border border-white py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 hover:bg-white hover:text-black duration-300 cursor-pointer">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
