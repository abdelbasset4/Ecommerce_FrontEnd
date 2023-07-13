import { Typography } from "@material-tailwind/react";

export default function Filter() {
  return (
    <div>
        <div className="flex justify-between items-center">
            <Typography
                variant="h4"
                color="blue-gray"
            >
                Filters
            </Typography>

            <Typography
                variant="small"
                color="blue-gray"
                className=" hover:underline cursor-pointer text-xs"
            >
                Clear All
            </Typography>
        </div>
    
    </div>
  )
}
