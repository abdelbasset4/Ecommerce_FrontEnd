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
  export default function CardItem({desc,value}) {
    return (


      <Card className="relative w-96 lg:w-80 bg-red cursor-pointer duration-300 hover:-translate-y-2">
      <Chip value="25% OFF"  className="absolute top-7 left-6 z-50 text-white bg-[#212121]" variant="ghost"/>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img 
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Rating value={4}  />
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {value}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              $95.00
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            {desc}
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

   
        <div className="absolute bottom-[290px] right-6 ">
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