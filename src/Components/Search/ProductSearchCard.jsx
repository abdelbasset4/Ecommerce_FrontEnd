/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Dialog,
  DialogBody,
  Button,
  ButtonGroup,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Counter from "../Utility/Counter";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProductSearchCard({ product }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <Fragment>
      <Card
        className="relative bg-red cursor-pointer duration-300 rounded-md hover:-translate-y-2"
        onClick={handleOpen}>
        <CardHeader
          shadow={false}
          floated={false}
          className="h-72 rounded-md m-0">
          <img
            // eslint-disable-next-line react/prop-types
            src={product.imageCover}
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
                src={product.imageCover}
                className="w-full rounded-bl-lg h-full object-contain"
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
                  Size
                </Typography>
                <ButtonGroup
                  size="sm"
                  className="flex gap-4 divide-x-0 divide-y-0">
                  <Button className="bg-white border-2 border-gray-300 hover:border-gray-800 text-gray-900 rounded-md">
                    S
                  </Button>
                  <Button className="bg-white border-2 border-gray-300 hover:border-gray-800 text-gray-900 rounded-md">
                    M
                  </Button>
                  <Button className="bg-white border-2 border-gray-300 hover:border-gray-800 text-gray-900 rounded-md">
                    L
                  </Button>
                  <Button className="bg-white border-2 border-gray-500 hover:border-gray-800 text-gray-900 rounded-md">
                    XL
                  </Button>
                </ButtonGroup>
              </div>
              <div className="my-5">
                <Typography className="text-black text-xl font-semibold">
                  Color
                </Typography>
                <ul
                  size="sm"
                  className="flex gap-4 mt-3 divide-x-0 divide-y-0 h-8">
                 
                  {
                    product.colors.map((color)=>{
                      // eslint-disable-next-line react/jsx-key
                      return ( <li className=" w-8 h-8 rounded-md" style={{backgroundColor:`${color}`}}></li>)
                    })
                  }
                </ul>
              </div>
              <div className="flex items-center gap-3 my-5">
                <Counter />
                <Button
                  className=" bg-gray-900 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
                  fullWidth>
                  Add to Card
                </Button>
              </div>
              <Link to={`products/${product._id}`}>
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
    </Fragment>
  );
}
