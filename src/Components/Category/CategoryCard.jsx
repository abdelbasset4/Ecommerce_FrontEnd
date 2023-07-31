import {
    Card,
    CardHeader,
    CardBody,

    Typography,

  } from "@material-tailwind/react";
   
// eslint-disable-next-line react/prop-types
export function CategoryCard({title}) {
    return (
      <Card className="mt-6">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://full-ecommerce-eight.vercel.app/categories/category-1adc0d0e-cf85-4545-8319-c2ce03025fad-1672941633237.jpeg"
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