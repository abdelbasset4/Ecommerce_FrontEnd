import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


  // eslint-disable-next-line react/prop-types
  export default function ProductSearchCard({value}) {
    return (


      <Card className="relative bg-red cursor-pointer duration-300 rounded-md hover:-translate-y-2">
        <CardHeader shadow={false} floated={false} className="h-72 rounded-md m-0">
          <img 
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
            className="w-full rounded-none h-full object-cover"
          />
        </CardHeader>
        <CardBody>

            <Typography color="blue-gray" className="font-semibold text-base mb-2">
              {value}
            </Typography>
            
            <Typography variant="small" color="gray" className="font-normal opacity-75 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <div className="flex gap-7 mt-3">
                <Typography color="blue-gray" className="font-semibold text-base">
                $95.00
                </Typography>
                <Typography color="blue-gray" className="font-medium opacity-75 line-through text-sm">
                $195.00
                </Typography>
            </div>
        </CardBody>
        

   
        
      </Card>

      
    );
  }