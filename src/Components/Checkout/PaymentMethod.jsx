import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    Button
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function PaymentMethod() {
  return (
    <>
    <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Shopping cart</h2>
    <Card className="mt-9">
      <List>
        <ListItem className="p-0 mb-3">
          <label htmlFor="vertical-list-react" className="px-3 py-2 flex items-center w-full cursor-pointer">
            <ListItemPrefix className="mr-3">
              <Radio
                name="vertical-list" 
                id="vertical-list-react" 
                ripple={false} 
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0"
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">VISA Card</Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label htmlFor="vertical-list-vue" className="px-3 py-2 flex items-center w-full cursor-pointer">
            <ListItemPrefix className="mr-3">
              <Radio
                name="vertical-list"
                id="vertical-list-vue" 
                ripple={false} 
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0"
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">Cash on delevery</Typography>
          </label>
        </ListItem>

      </List>
    </Card>
    <Link >
        <Button  className=" bg-gray-900 text-white rounded-lg my-4 py-3 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80" >
            Select
        </Button>
    </Link>
    </>

  )
}
