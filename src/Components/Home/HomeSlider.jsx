import { Carousel, Typography } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import slider1 from "../../assets/slider/slider1.jpg"
import slider2 from "../../assets/slider/slider2.jpg"
import slider3 from "../../assets/slider/slider3.jpg"
import slider4 from "../../assets/slider/slider4.jpg"

export default function HomeSlider() {
  return (
    <div className="h-screen">
    <Carousel autoplay={true} autoplayDelay={3000} loop={true}
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
  <div className="relative h-full w-full ">
      <img
        src={slider1}
        alt="slider 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4  md:w-2/4">
          <Typography
            variant="h5"
            color="white"
            className="mb-4 text-3xl "
          >
           New Collection
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Get 25% of on selected item
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Use this code to recieve 50% discount for all products
          </Typography>
          <div className="flex  gap-2">
            <Button size="lg" color="white" className="bg-white px-2">
              Go to collection
            </Button>

          </div>
        </div>
      </div>
    </div>
  <div className="relative h-full w-full ">
      <img
        src={slider2}
        alt="slider 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4  md:w-2/4">
          <Typography
            variant="h5"
            color="white"
            className="mb-4 text-3xl "
          >
           New Collection
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Get 25% of on selected item
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Use this code to recieve 50% discount for all products
          </Typography>
          <div className="flex  gap-2">
            <Button size="lg" color="white" className="bg-white px-2">
              Go to collection
            </Button>

          </div>
        </div>
      </div>
    </div>
  <div className="relative h-full w-full ">
      <img
        src={slider3}
        alt="slider 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4  md:w-2/4">
          <Typography
            variant="h5"
            color="white"
            className="mb-4 text-3xl "
          >
           New Collection
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Get 25% of on selected item
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Use this code to recieve 50% discount for all products
          </Typography>
          <div className="flex  gap-2">
            <Button size="lg" color="white" className="bg-white px-2">
              Go to collection
            </Button>

          </div>
        </div>
      </div>
    </div>
  <div className="relative h-full w-full ">
      <img
        src={slider4}
        alt="slider 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4  md:w-2/4">
          <Typography
            variant="h5"
            color="white"
            className="mb-4 text-3xl "
          >
           New Collection
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Get 25% of on selected item
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-3 opacity-80"
          >
            Use this code to recieve 50% discount for all products
          </Typography>
          <div className="flex  gap-2">
            <Button size="lg" color="white" className="bg-white px-2">
              Go to collection
            </Button>

          </div>
        </div>
      </div>
    </div>

  </Carousel>
    </div>
  );
}