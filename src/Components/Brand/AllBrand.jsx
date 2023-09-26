import { Spinner, Alert } from "@material-tailwind/react";
import { BrandCard } from "./BrandCard";

// eslint-disable-next-line react/prop-types
export default function AllBrand({ data, isLoading }) {
  // eslint-disable-next-line react/prop-types
  return (
    <>
      <h2 className="mb-6 text-2xl font-extrabold text-gray-900 ms-4 mt-4 ms-4">
        All Brands
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 justify-center mb-6">
        {isLoading === false ? (
          // eslint-disable-next-line react/prop-types
          data?.length > 0 ? (
            // eslint-disable-next-line react/prop-types
            data.map((item, index) => {
              return (
                <BrandCard key={index} id={item._id} title={item.name} img={item.image} />
              );
            })
          ) : (
            <Alert color="blue" className="ms-4 w-full">
              There are no data
            </Alert>
          )
        ) : (
          <Spinner className="h-16 w-16 text-blue-500/10 flex justify-center items-center" />
        )}
      </div>
    </>
  );
}
