import {
    Card,
    CardHeader,
    CardBody,

    Typography,

  } from "@material-tailwind/react";
   
// eslint-disable-next-line react/prop-types
export function CategoryCard({title,image}) {
    return (
      <Card className="mt-6">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          
        </CardBody>
        
      </Card>
    );
  }