// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {TbMoodKid} from "react-icons/tb"
import {TbBallBasketball} from "react-icons/tb"
import {RiMenLine} from "react-icons/ri"
import {RiWomenLine} from "react-icons/ri"
import {GiSunglasses} from "react-icons/gi"
import {CgAppleWatch} from "react-icons/cg"
import {ImLink} from "react-icons/im"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function CategorySlider() {

  return (
    <>
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
          <div className="icon ">
            <RiMenLine size={"3rem"}/>
          </div>
          <div className="content">
            <h3 className="text-2xl">Men</h3>
            <p>4 Brands ,20 Products</p>
          </div>
          <div className="flex justify-center items-center text-white absolute top-0 left-0 w-full h-full bg-gray-600 rounded-xl opacity-0 group-hover:opacity-50 duration-300">
          <ImLink size={"2rem"}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">
          <div className="icon ">
            <RiWomenLine size={"3rem"}/>
          </div>
          <div className="content">
            <h3 className="text-2xl">Women</h3>
            <p>5 Brands ,20 Products</p>
          </div>
          <div className="flex justify-center items-center text-white absolute top-0 left-0 w-full h-full bg-gray-600 rounded-xl opacity-0 group-hover:opacity-50 duration-300">
          <ImLink size={"2rem"}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">
          <div className="icon ">
            <CgAppleWatch size={"3rem"}/>
          </div>
          <div className="content">
            <h3 className="text-2xl">Watch</h3>
            <p>5 Brands ,24 Products</p>
          </div>
          <div className="flex justify-center items-center text-white absolute top-0 left-0 w-full h-full bg-gray-600 rounded-xl opacity-0 group-hover:opacity-50 duration-300">
          <ImLink size={"2rem"}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">
          <div className="icon ">
            <GiSunglasses size={"3rem"}/>
          </div>
          <div className="content">
            <h3 className="text-2xl">Sunglasses</h3>
            <p>10 Brands ,24 Products</p>
          </div>
          <div className="flex justify-center items-center text-white absolute top-0 left-0 w-full h-full bg-gray-600 rounded-xl opacity-0 group-hover:opacity-50 duration-300">
          <ImLink size={"2rem"}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">
          <div className="icon ">
            <TbMoodKid size={"3rem"}/>
          </div>
          <div className="content">
            <h3 className="text-2xl">Kids</h3>
            <p>10 Brands ,24 Products</p>
          </div>
          <div className="flex justify-center items-center text-white absolute top-0 left-0 w-full h-full bg-gray-600 rounded-xl opacity-0 group-hover:opacity-50 duration-300">
          <ImLink size={"2rem"}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center gap-6 bg-gray-200 rounded-xl px-3 group cursor-pointer relative">
          <div className="icon ">
            <TbBallBasketball size={"3rem"}/>
          </div>
          <div className="content">
            <h3 className="text-2xl">Sports</h3>
            <p>10 Brands ,24 Products</p>
          </div>
          <div className="flex justify-center items-center text-white absolute top-0 left-0 w-full h-full bg-gray-600 rounded-xl opacity-0 group-hover:opacity-50 duration-300">
          <ImLink size={"2rem"}/>
          </div>
        </SwiperSlide>

      </Swiper>
      <div className="mx-auto my-5 text-center ">
        <Link
                to="categories"
                className="inline-flex items-center justify-center rounded-md border border-black py-4 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 hover:bg-black hover:text-white duration-300 cursor-pointer"
              >
                View All
        </Link>
      </div>
    </>
  );
}
