import { Fragment, useState } from "react";
import {
  Drawer,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {CiSliderHorizontal} from "react-icons/ci"
import Filter from "./Filter";
import ColorsSearch from "./ColorsSearch";
import CheckboxListSearch from "./CheckboxListSearch";

const categoryList = ['Men','Women','Watch','Kids','Sport','Sunglass','Bugs','Sneakers']
const brandList = ['Shovia',' Fusion', 'Hunter Shoes', 'Club Shoes', 'Hoppister', 'Blaze Fashion', 'Elegance', 'Fashadil']
const priceList = ['Under $50', '$50 to $100', '$100 to $150', '$150 to $200', '$200 to $300', '$300 to $500', '$500 to $1000', 'Over $1000']
export default function DrawerFilter() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    
    <Fragment>
    <Button onClick={openDrawer} className="flex items-center lg:hidden bg-white text-gray-900 border border-gray-300 px-3 py-2 text-xs hover:shadow-gray-500 capitalize"><CiSliderHorizontal size={"1rem"} className="me-2"/>  Filters</Button>
    <Drawer open={open} onClose={closeDrawer} className="p-4 overflow-auto "  size={350}>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Filter
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <div >
                <Filter/>
                <CheckboxListSearch title="Category" searchList={categoryList}/>
                <CheckboxListSearch title="Brands" searchList={brandList}/>
                <CheckboxListSearch title="Price" searchList={priceList}/>
                <ColorsSearch/>
        </div>
        </Drawer>
    </Fragment>
  );
}