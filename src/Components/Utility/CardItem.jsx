/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    IconButton,
    Chip,
    Rating 
  } from "@material-tailwind/react";
  import {
    HeartIcon,
    PhotoIcon,
    ArrowsRightLeftIcon,
    PlusIcon
  } from "@heroicons/react/24/outline";

  // eslint-disable-next-line react/prop-types
  export default function CardItem({product}) {

    return (
      <Card className="relative w-96 lg:w-80 bg-red cursor-pointer duration-300 hover:-translate-y-2">
      <Chip value="25% OFF"  className="absolute top-7 left-6 z-50 text-white bg-[#212121]" variant="ghost"/>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img 
            src={product.imageCover}
            className="w-full h-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Rating value={4}  />
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
             ${product.price}
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            {product.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>

   
        <div className="absolute bottom-[200px] right-6 ">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-gray-900 shadow-gray-900">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <PhotoIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <HeartIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction>
              <ArrowsRightLeftIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>

      </div>
      </Card>

      
    );
  }