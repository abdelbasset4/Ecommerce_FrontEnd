import { Button, Chip, Typography } from "@material-tailwind/react";
import Counter from "../Utility/Counter";
import SecondNavBar from "../Utility/SecondNavBar";
import ProductCarousel from "./ProductCarousel";
import ProductAccordion from "./ProductAccordion";
import { useParams } from "react-router";
import useGetOneProduct from "../../hook/product/useGetOneProduct";
export default function ProductDetails() {
  const { id } = useParams();
  const [items, brand, subCategories,productsWithoutThisProd] = useGetOneProduct(id);
  
  return (
    <>
      <SecondNavBar />
      <div className="flex flex-col lg:flex-row gap-6 mx-auto  px-4 mt-10">
        <div className="w-full lg:w-1/2 h-screen">
          <ProductCarousel images={items.images} />
        </div>
        <div className="py-6 w-full lg:w-[40%] pe-5">
          <div className="flex justify-between">
            <Typography className=" text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
              {items.title}
            </Typography>
            <Typography className=" text-heading text-lg md:text-xl lg:text-2xl font-semibold text-yellow-700">
              {items.ratingsQuantity}
            </Typography>
          </div>

          <Typography
            variant="small"
            color="gray"
            className="text-sm leading-6 md:text-body md:leading-7">
            {items.description}
          </Typography>
          <div className="flex gap-3 mt-3">
            <Typography className="font-semibold text-base md:text-xl lg:text-2xl">
              ${items.priceAfterDiscount}
            </Typography>
            <Typography className="font-segoe line-through text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
              ${items.price}
            </Typography>
          </div>

          <div className="my-5">
            {items.colors ? (
              <Typography className="text-black text-xl font-semibold">
                Colors
              </Typography>
            ) : null}
            <ul size="sm" className="flex gap-4 mt-3">
              {items.colors
                ? items.colors.map((color, index) => {
                    // eslint-disable-next-line react/jsx-key
                    return (
                      <li
                        className=" rounded-md w-8 h-8 cursor-pointer"
                        key={index}
                        style={{ backgroundColor: `${color}` }}></li>
                    );
                  })
                : null}
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
          <div className="border-t border-gray-300 pt-4 flex flex-col gap-2">
            <div className="flex gap-1">
              <Typography className="text-gray-900 text-sm font-semibold">
                SKU:
              </Typography>
              <Typography className="text-gray-700 text-sm font-medium">
                N/A
              </Typography>
            </div>
            {brand.data ? (
              <div className="flex gap-1">
                <Typography className="text-gray-900 text-sm font-semibold">
                  Brand:
                </Typography>
                <Typography className="text-gray-700 text-sm font-medium">
                  {brand.data.name}
                </Typography>
              </div>
            ) : null}
            <div className="flex gap-1">
              <Typography className="text-gray-900 text-sm font-semibold">
                Category:
              </Typography>
              {items.category ? (
                <Typography className="text-gray-700 text-sm font-medium">
                  items.category.name
                </Typography>
              ) : null}
            </div>
            {subCategories.data ? (
              <div className="flex gap-1">
                <Typography className="text-gray-900 text-sm font-semibold">
                  Tags:
                </Typography>
                <div className="flex gap-2">
                  {subCategories.data.map((subCategory) => {
                    // eslint-disable-next-line react/jsx-key
                    return <Chip color="indigo" value={subCategory.name} />;
                  })}
                </div>
              </div>
            ) : null}
            <div className="mt-5">
              <ProductAccordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
