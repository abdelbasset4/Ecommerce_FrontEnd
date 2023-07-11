import { Typography } from "@material-tailwind/react";
import NavBar from "../../Components/Utility/NavBar";
import Filter from "../../Components/Search/Filter";
import CheckboxListSearch from "../../Components/Search/CheckboxListSearch";
import ColorsSearch from "../../Components/Search/ColorsSearch";

const categoryList = ['Men','Women','Watch','Kids','Sport','Sunglass','Bugs','Sneakers']
const brandList = ['Shovia',' Fusion', 'Hunter Shoes', 'Club Shoes', 'Hoppister', 'Blaze Fashion', 'Elegance', 'Fashadil']
const priceList = ['Under $50', '$50 to $100', '$100 to $150', '$150 to $200', '$200 to $300', '$300 to $500', '$500 to $1000', 'Over $1000']

export default function SearchPage() {
  return (
    <div>
        <NavBar/>
        <div className="mx-auto py-2 px-4 lg:px-8 lg:py-6 grid grid-cols-12 gap-6">
            <div className="searchHeader hidden lg:block col-span-3">
                <div>
                <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold font-lg"
                >
                Home / Search
                </Typography>
                <Filter/>
                </div>
                <CheckboxListSearch title="Category" searchList={categoryList}/>
                <CheckboxListSearch title="Brands" searchList={brandList}/>
                <CheckboxListSearch title="Price" searchList={priceList}/>
                <ColorsSearch/>
            </div>
            <div className="searchHeader col-span-9">
            <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-bold font-lg"
          >
          Home / Search / search
          </Typography>
            </div>
        </div>
    </div>
  )
}
