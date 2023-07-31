

import { CategoryCard } from "./CategoryCard";
import { Spinner,Alert  } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function AllCategory({data,isLoading}) {
  // eslint-disable-next-line react/prop-types
  console.log(`this data: ${data.data}`);

  return (
    <>
    <h2 className="mb-6 text-2xl font-extrabold text-gray-900 ms-4 mt-4">All Categories</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 justify-center mb-6">
      {
        isLoading === false ?(
          // eslint-disable-next-line react/prop-types
          data.data ? (
            // eslint-disable-next-line react/prop-types
            data.data.map((category)=>{
              return (<CategoryCard key={category._id} title={category.name} image={category.image}/>)
            })
          ):(<Alert color="blue">There are no data</Alert>)
        ):(<Spinner className="h-16 w-16 text-blue-500/10 flex justify-center items-center" />)
      }

    </div>
    </>
  )
}
