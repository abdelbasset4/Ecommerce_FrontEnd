/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Chip,
  Rating,
} from "@material-tailwind/react";

import { baseURL } from "../../API/mainBaseURL";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useWishList from "../../hook/WishList/useWishList";
// eslint-disable-next-line react/prop-types
export default function CardItem({ product, favProd }) {
  const {_id} = product
  const [handelFavorite, img] = useWishList(_id, favProd);
  console.log(img);
  return (
    <Card className="relative w-96 lg:w-73 h-90 bg-red cursor-pointer duration-300 hover:-translate-y-2">
      <Chip
        value="25% OFF"
        className="absolute top-7 left-6 z-50 text-white bg-[#212121] "
        size="sm"
        variant="ghost"
      />
      {img===true ? (
        <AiFillHeart className="absolute top-7 right-6 z-50  w-6 h-6 " onClick={handelFavorite} />
      ) : (
        <AiOutlineHeart className="absolute top-7 right-6 z-50 text-black w-6 h-6 "  onClick={handelFavorite}/>
      )}
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={`${baseURL}/products/${product.imageCover}`}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Rating value={product.ratingsAverage} />
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {product.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${product.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 truncate	">
          {product.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
