import { ToastContainer } from "react-toastify";
import ProductSearchCard from "../../Components/Search/ProductSearchCard";
import Pagination from "../../Components/Utility/Pagination";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/Utility/NavBar";
import SecondNavBar from "../../Components/Utility/SecondNavBar";
import useGetProductsByBrand from "../../hook/product/useGetProductsByBrand";
const ProductByBrandPage = () => {
  const { id } = useParams();
  const [items, , pagination, getPageNumber] = useGetProductsByBrand(
    id,
    20
  );
  let pageCount = 0;
  if (pagination) pageCount = pagination;
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
            <h1 className="mt-4 text-center">{`There are no products from this brand`}</h1>
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

export default ProductByBrandPage;
