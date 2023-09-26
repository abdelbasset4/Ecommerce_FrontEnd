/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Dialog,
  DialogBody,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { baseURL } from "../../API/mainBaseURL";
import { ToastContainer } from "react-toastify";
import useAddToCart from "../../hook/Cart/useAddToCart";
// eslint-disable-next-line react/prop-types
export default function ProductSearchCard({ product, favProd }) {
  const [open, setOpen] = useState(false);
  const [colorIndex, checkColor, hundelAddToCart] = useAddToCart(
    product._id,
    product
  );
  const handleOpen = () => setOpen(!open);
  return (
    <>
    
      <Card
        className="relative bg-red cursor-pointer duration-300 rounded-md hover:-translate-y-2"
        onClick={handleOpen}>
        <CardHeader
          shadow={false}
          floated={false}
          className="h-72 rounded-md m-0">
          <img
            // eslint-disable-next-line react/prop-types
            src={`${baseURL}/products/${product.imageCover}`}
            className="w-full rounded-none h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            color="blue-gray"
            className="font-semibold text-base mb-2 truncate ">
            {product.title}
          </Typography>

          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-sm truncate ">
            {product.description}
          </Typography>
          <div className="flex gap-7 mt-3">
            <Typography color="blue-gray" className="font-semibold text-base">
              ${product.priceAfterDiscount}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium opacity-75 line-through text-sm">
              ${product.price}
            </Typography>
          </div>
        </CardBody>
        <ToastContainer/>
      </Card>
      <Dialog open={open} handler={handleOpen} size="lg">
        <div className="flex justify-end py-3 ">
          <XMarkIcon
            className="mr-3 h-5 w-5 cursor-pointer"
            onClick={handleOpen}
          />
        </div>
        <DialogBody divider className="p-0 overflow-scroll">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 h-full">
              <img
                src={`${baseURL}/products/${product.imageCover}`}
                className="w-full rounded-bl-lg h-full object-contain hoho"
              />
            </div>
            <div className="py-6 w-full lg:w-1/2 pe-5">
              <Typography className=" text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
                {product.title}
              </Typography>

              <Typography
                variant="small"
                color="gray"
                className="text-sm leading-6 md:text-body md:leading-7">
                {product.description}
              </Typography>
              <div className="flex gap-3 mt-3">
                <Typography className="font-semibold text-base md:text-xl lg:text-2xl">
                  ${product.priceAfterDiscount}
                </Typography>
                <Typography className="font-segoe line-through text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
                  ${product.price}
                </Typography>
              </div>

              <div className="my-5">
                <Typography className="text-black text-xl font-semibold">
                  Color
                </Typography>
                <ul
                  size="sm"
                  className="flex gap-4 mt-3 divide-x-0 divide-y-0 h-8">
                  {product.colors.map((color, index) => {
                    // eslint-disable-next-line react/jsx-key
                    return (
                      <li
                        className=" w-8 h-8 rounded-md"
                        key={index}
                        onClick={() => checkColor(index, color)}
                        style={{
                          backgroundColor: `${color}`,
                          border:
                            colorIndex === index ? "4px solid black" : "none",
                        }}></li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center gap-3 my-5">
                <Button
                  onClick={hundelAddToCart}
                  className=" bg-gray-900 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
                  fullWidth>
                  Add to Card
                </Button>
              </div>
              <Link to={`/search/products/${product._id}`}>
                <Button
                  className="mt-6 bg-gray-900 py-4 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
                  fullWidth>
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </DialogBody>
      </Dialog>
      
    </>
  );
}
