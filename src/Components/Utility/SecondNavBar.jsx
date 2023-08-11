import { Fragment, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  Bars4Icon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";

// nav list menu
const navListCategory = [
  {
    title: "Women's Fashion",
  },
  {
    title: "Men's Fashion",
  },
  {
    title: "Watches",
  },
  {
    title: "Bags",
  },
  {
    title: "Wallets",
  },
  {
    title: "Sneakers",
  },
  {
    title: "Sunglasses",
  },
];
const navListMenuTopWear = [
  {
    title: "T-shirt",
  },
  {
    title: "Casual Shirts",
  },
  {
    title: "Formal Shirts",
  },
  {
    title: "Blazwers & Coats",
  },
  {
    title: "Suits",
  },
  {
    title: "Jackets",
  },
];
const navListMenuWestronWear = [
  {
    title: "Dresses",
  },
  {
    title: "Jumbsuits",
  },
  {
    title: "Top Tshirts&Shirts",
  },
  {
    title: "Shorts & Skirts",
  },
  {
    title: "Shurgs",
  },
  {
    title: "Blazers",
  },
];
const navListMenuFootWear = [
  {
    title: "Flats",
  },
  {
    title: "Casual Shoes",
  },
  {
    title: "Heals",
  },
  {
    title: "Boots",
  },
];
const navListMenuFSport = [
  {
    title: "Clothing",
  },
  {
    title: "Footwear",
  },
  {
    title: "Sport Accessories",
  },
];
const navListMenuLingerie = [
  {
    title: "Bra",
  },
  {
    title: "Briefs",
  },
  {
    title: "Sleepwear",
  },
];
const navListMenuScarves = [
  {
    title: "Makeup",
  },
  {
    title: "Skincare",
  },
  {
    title: "Premuim Beuty",
  },
  {
    title: "Lipsticks",
  },
];
const navListMenuGadgets = [
  {
    title: "Smart Wearbales",
  },
  {
    title: "Headphones",
  },
];
const navListMenuJewellers = [
  {
    title: "Fashion Jewellers",
  },
  {
    title: "Fine Jewellers",
  },
];

function renderItemsList(items) {
  const renderItems = items.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-light">
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));
  return renderItems;
}
// eslint-disable-next-line react/prop-types
function NavListMenu({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}>
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-normal text-base text-start w-full lg:w-auto">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block ">
          <ul className="grid grid-cols-5 gap-y-2">
            <ul className="ms-4">
              <li className="text-black font-semibold ms-3 mt-3">Top Wear</li>
              {renderItemsList(navListMenuTopWear)}
              <li className="text-black font-semibold ms-3 mt-3">
                Belt ,Scarves & More
              </li>
              <li className="text-black font-semibold ms-3 mt-3">
                Watches & Wearables
              </li>
            </ul>
            <ul className="ms-4">
              <li className="text-black font-semibold ms-3 mt-3">
                Western Wear
              </li>
              {renderItemsList(navListMenuWestronWear)}
              <li className="text-black font-semibold ms-3 mt-3">Plus size</li>
              <li className="text-black font-semibold ms-3 mt-3">
                Sunglasses & Frames
              </li>
            </ul>

            <ul className="ms-4">
              <li className="text-black font-semibold ms-3 mt-3">Footwear</li>
              {renderItemsList(navListMenuFootWear)}
              <li className="text-black font-semibold ms-3 mt-3">
                Sports & Active Wear
              </li>
              {renderItemsList(navListMenuFSport)}
            </ul>
            <ul>
              <li className="text-black font-semibold ms-3 mt-3">
                Lingerie & Sleepwear
              </li>
              {renderItemsList(navListMenuLingerie)}
              <li className="text-black font-semibold ms-3 mt-3">
                Belt ,Scarves & More
              </li>
              {renderItemsList(navListMenuScarves)}
            </ul>
            <ul>
              <li className="text-black font-semibold ms-3 mt-3">Gadgets</li>
              {renderItemsList(navListMenuGadgets)}
              <li className="text-black font-semibold ms-3 mt-3">Jewellers</li>
              {renderItemsList(navListMenuJewellers)}
              <li className="text-black font-semibold ms-3 mt-3">Bagpacks</li>
              <li className="text-black font-semibold ms-3 mt-3">
                Handbags & Wallets
              </li>
            </ul>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden w-full">
        <Collapse open={isMobileMenuOpen}>
          <ul className="ms-4">
            <li className="text-black font-semibold ms-3 mt-3">Top Wear</li>
            {renderItemsList(navListMenuTopWear)}
            <li className="text-black font-semibold ms-3 mt-3">
              Belt ,Scarves & More
            </li>
            <li className="text-black font-semibold ms-3 mt-3">
              Watches & Wearables
            </li>
          </ul>
          <ul className="ms-4">
            <li className="text-black font-semibold ms-3 mt-3">Western Wear</li>
            {renderItemsList(navListMenuWestronWear)}
            <li className="text-black font-semibold ms-3 mt-3">Plus size</li>
            <li className="text-black font-semibold ms-3 mt-3">
              Sunglasses & Frames
            </li>
          </ul>

          <ul className="ms-4">
            <li className="text-black font-semibold ms-3 mt-3">Footwear</li>
            {renderItemsList(navListMenuFootWear)}
            <li className="text-black font-semibold ms-3 mt-3">
              Sports & Active Wear
            </li>
            {renderItemsList(navListMenuFSport)}
          </ul>
          <ul className="ms-4">
            <li className="text-black font-semibold ms-3 mt-3">
              Lingerie & Sleepwear
            </li>
            {renderItemsList(navListMenuLingerie)}
            <li className="text-black font-semibold ms-3 mt-3">
              Belt ,Scarves & More
            </li>
            {renderItemsList(navListMenuScarves)}
          </ul>
          <ul className="ms-4">
            <li className="text-black font-semibold ms-3 mt-3">Gadgets</li>
            {renderItemsList(navListMenuGadgets)}
            <li className="text-black font-semibold ms-3 mt-3">Jewellers</li>
            {renderItemsList(navListMenuJewellers)}
            <li className="text-black font-semibold ms-3 mt-3">Bagpacks</li>
            <li className="text-black font-semibold ms-3 mt-3">
              Handbags & Wallets
            </li>
          </ul>
        </Collapse>
      </div>
    </Fragment>
  );
}
function NavListCategory() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListCategory.map(({ title }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-0 text-sm font-light ">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-white lg:flex bg-gray-900 hover:bg-gray-900">
              <Bars4Icon className="h-[18px] w-[18px]" /> All Categories{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[15rem] overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Bars4Icon className="h-[18px] w-[18px]" /> All Categories{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-center">
      <NavListCategory />
      <NavListMenu title="Men Wear" />
      <NavListMenu title="Women Wear" />
      <div className="w-full lg:w-auto ms-4">
        <Link to="/search">
          <button className="block lg:inline-block me-4">
            <Typography className="font-light text-lg">Search</Typography>
          </button>
        </Link>
        <Link to="dashboard">
          <button className="block lg:inline-block">
            <Typography className="font-light text-lg">Shop</Typography>
          </button>
        </Link>
      </div>
    </List>
  );
}

export default function SecondNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto  px-4 py-2 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        {isAuth ? (
          <ProfileMenu />
        ) : (
          <div className="hidden gap-2 lg:flex">
            <Link to="/login">
              <Button
                size="sm"
                color="blue-gray"
                className="flex items-center gap-3">
                <UserIcon strokeWidth={2} className="h-5 w-5" /> Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gray-900 py-[10px] px-5">
                Sign Up
              </Button>
            </Link>
          </div>
        )}

        <IconButton
          color="blue-gray"
          className=" lg:hidden"
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden flex-col ">
          <Button
            size="sm"
            color="blue-gray"
            className="flex items-center gap-3">
            <UserIcon strokeWidth={2} className="h-5 w-5" /> Login
          </Button>
          <Button size="sm" fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
