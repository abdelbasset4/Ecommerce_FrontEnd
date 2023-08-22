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
import CheckboxListSearch from "./CheckboxListSearch";
import PriceSideFilter from "./PriceSideFilter";
import useSideBarFilter from "../../hook/Search/useSideBarFilter";

export default function DrawerFilter() {
  const [allBrand,allCategory,onChangeInput,onChangePriceRange] = useSideBarFilter()
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
                {
                  allCategory ? <CheckboxListSearch title="Category" searchList={allCategory} onChangeChecked={onChangeInput}/> :null
                }
                {
                  allBrand ? <CheckboxListSearch title="Brand" searchList={allBrand} onChangeChecked={onChangeInput}/> :null
                }
                <PriceSideFilter onChangeChecked={onChangePriceRange} />
                
        </div>
        </Drawer>
    </Fragment>
  );
}