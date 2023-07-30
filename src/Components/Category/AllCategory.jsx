import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import { CategoryCard } from "./CategoryCard";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
import { Spinner,Alert  } from "@material-tailwind/react";

export default function AllCategory() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.category);
  const isLoading = useSelector(state => state.category.isLoading);
  // const erorr = useSelector(state => state.category.erorr);
  
    useEffect(() => {
      dispatch(getAllCategory(`/api/v1/categories`));
  }, [dispatch]);

  return (
    <>
    <h2 className="mb-6 text-2xl font-extrabold text-gray-900">All Categories</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      {
        isLoading === false ?(
          categories ? (
            categories.map((category)=>{
              return (<CategoryCard key={category._id} title={category.name} image={category.image}/>)
            })
          ):(<Alert color="blue">There are no data</Alert>)
        ):(<Spinner className="h-16 w-16 text-blue-500/10" />)
      }

    </div>
    </>
  )
}
