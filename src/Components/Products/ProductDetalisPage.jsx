import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import Counter from "../Utility/Counter";
import SecondNavBar from "../Utility/SecondNavBar";
import ProductCarousel from "./ProductCarousel";
import ProductAccordion from "./ProductAccordion";

export default function ProductDetalisPage() {
  return (

    <>
    <SecondNavBar/>
    <div className="flex flex-col lg:flex-row gap-6 mx-auto  px-4 mt-10">
          <div className="w-full lg:w-1/2 h-screen">
          <ProductCarousel/>
          </div>
          <div className="py-6 w-full lg:w-[40%] pe-5">
            <Typography  className=" text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
              iPhone 12 pro max 256GB
            </Typography>
            
            <Typography variant="small" color="gray" className="text-sm leading-6 md:text-body md:leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet asperiores officia iure est! In autem officiis, ipsum unde, reiciendis tempora rem expedita aut fuga eius molestias possimus eum magnam.
            </Typography>
            <div className="flex gap-3 mt-3">
                <Typography  className="font-semibold text-base md:text-xl lg:text-2xl">
                $950.00
                </Typography>
                <Typography  className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
                $1905.00
                </Typography>
            </div>
            <div className="my-5">
                <Typography className="text-black text-xl font-semibold">
                    Size
                </Typography>
                <ButtonGroup size="sm" className="flex gap-4 divide-x-0 divide-y-0" >
                    <Button  className="bg-white border-2 border-gray-300 hover:border-gray-800 text-gray-900 rounded-md">S</Button>
                    <Button className="bg-white border-2 border-gray-300 hover:border-gray-800 text-gray-900 rounded-md">M</Button>
                    <Button className="bg-white border-2 border-gray-300 hover:border-gray-800 text-gray-900 rounded-md">L</Button>
                    <Button className="bg-white border-2 border-gray-500 hover:border-gray-800 text-gray-900 rounded-md">XL</Button>
                </ButtonGroup>
            </div>
            <div className="my-5">
                <Typography className="text-black text-xl font-semibold">
                    Color
                </Typography>
                <ButtonGroup size="sm" className="flex gap-4 mt-3 divide-x-0 divide-y-0 h-8" >
                    <Button  className="bg-orange-900 text-gray-900 rounded-md"></Button>
                    <Button className="bg-purple-300 text-gray-900 rounded-md"></Button>
                    <Button className="bg-pink-600  text-gray-900 rounded-md"></Button>
                    <Button className="bg-red-800   text-gray-900 rounded-md"></Button>
                </ButtonGroup>
            </div>
            <div className="flex items-center gap-3 my-5">

            <Counter/>
            <Button className=" bg-gray-900 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80" fullWidth>
             Add to Card
            </Button>
            </div>
            <div className="border-t border-gray-300 pt-4 flex flex-col gap-2">
                <div className="flex gap-1">
                    <Typography className="text-gray-900 text-sm font-semibold">
                    SKU: 
                    </Typography>
                    <Typography className="text-gray-700 text-sm font-medium">
                    N/A
                    </Typography>
                </div>
                <div className="flex gap-1">
                    <Typography className="text-gray-900 text-sm font-semibold">
                    Category: 
                    </Typography>
                    <Typography className="text-gray-700 text-sm font-medium">
                    Kids
                    </Typography>
                </div>
                <div className="flex gap-1">
                    <Typography className="text-gray-900 text-sm font-semibold">
                    Tags: 
                    </Typography>
                    <Typography className="text-gray-700 text-sm font-medium">
                    Casual,Cotton,Red
                    </Typography>
                </div>
                <div className="mt-5">
                  <ProductAccordion/>  
                </div>
            </div>
          </div>
    </div>
    </>
  )
}
