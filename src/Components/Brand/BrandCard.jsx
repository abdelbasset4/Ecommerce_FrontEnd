import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function BrandCard({ title, img }) {
  return (
    <Card className="mt-6">
      <CardHeader color="" className="relative h-56">
        <img
          alt={img}
          src={img}
          className="absolute top-0 left-0 w-full h-full object-contain"
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
