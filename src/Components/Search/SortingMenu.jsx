import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
import { LuChevronsUpDown } from "react-icons/lu";
  // eslint-disable-next-line react/prop-types
  export default function SortingMenu({onClick}) {
    const getSelectedMenu = (key)=>{
      localStorage.setItem("sortType", key)
      onClick();
    }
    return (
      <Menu>
        <MenuHandler>
          <Button className="bg-white text-gray-900 border border-gray-300 flex gap-5 px-3 py-2 text-xs hover:shadow-gray-500 capitalize">
            Sorting options <LuChevronsUpDown size={"1rem"}/>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={()=>getSelectedMenu("")}>None</MenuItem>
          <MenuItem onClick={()=>getSelectedMenu("Newest")}>Newest</MenuItem>
          <MenuItem onClick={()=>getSelectedMenu("Popularity")}>Popularity</MenuItem>
          <MenuItem onClick={()=>getSelectedMenu("low-to-height")}>Price :low to height</MenuItem>
          <MenuItem onClick={()=>getSelectedMenu("height-to-low")}>Price :height to low</MenuItem>
        </MenuList>
      </Menu>
    );
  }