import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   
import { LuChevronsUpDown } from "react-icons/lu";
  export default function SortingMenu() {
    return (
      <Menu>
        <MenuHandler>
          <Button className="bg-white text-gray-900 border border-gray-300 flex gap-5 px-3 py-2 text-xs hover:shadow-gray-500 capitalize">
            Sorting options <LuChevronsUpDown size={"1rem"}/>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Newest</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Price :low to height</MenuItem>
          <MenuItem>Price :height to low</MenuItem>
        </MenuList>
      </Menu>
    );
  }