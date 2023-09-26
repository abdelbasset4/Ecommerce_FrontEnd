import { ToastContainer } from "react-toastify";
import ProductSearchCard from "../../Components/Search/ProductSearchCard";
import Pagination from "../../Components/Utility/Pagination";
import useGetAllproductByCateory from "../../hook/product/useGetAllproductByCateory";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../Components/Utility/NavBar";
import SecondNavBar from "../../Components/Utility/SecondNavBar";
import useGetAllCategory from "../../hook/category/useGetAllCategory";
const ProductByCategoryPage = () => {
  const { id } = useParams();
  const [items, , pagination, getPageNumber] = useGetAllproductByCateory(
    id,
    20
  );
  let pageCount = 0;
  if (pagination) pageCount = pagination;
  const [categories, isLoading, ,] = useGetAllCategory(7);
  return (
    <>
      <NavBar />
      <SecondNavBar/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          // eslint-disable-next-line react/prop-types
          items?.length > 0 ? (
            items.map((product, index) => {
              // eslint-disable-next-line react/jsx-key
              return <ProductSearchCard key={index} product={product} />;
            })
          ) : (
            <h1 className="mt-4 text-center">{`There are no products from this category`}</h1>
          )
        }
      </div>
      <div className="mt-8">
        {pageCount > 1 ? (
          <Pagination numberPages={pageCount} onPress={getPageNumber} />
        ) : null}
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductByCategoryPage;
