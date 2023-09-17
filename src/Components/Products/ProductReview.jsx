import { useParams } from "react-router-dom";
import useGetProductReviews from "../../hook/Review/useGetProductReviews";
import AddReview from "../Reviews/AddReview";
import ProductOneReview from "../Reviews/ProductOneReview";
import Pagination from "../Utility/Pagination";
import TestimonialCard from "./TestimonialCard";

const ProductReview = () => {
  const {id} = useParams()
  const [allReview,pageCount,getPageNumber] = useGetProductReviews(id,10)
  return (
    <div className=" mx-4 p-3 rounded-lg shadow-2 border my-6">
      <AddReview />
      {
        allReview?.data?.length >0 ? (
          allReview?.data?.map((review,index)=>{
            return (<TestimonialCard review={review} key={index}/>)
          })
        ):<h6 className="mt-3 font-semibold">There are no review in this product!!!</h6>
      }
      {
        pageCount >1 ?(<Pagination numberPages={pageCount} onPress={getPageNumber} />):null
      } 
    </div>
  );
};

export default ProductReview;
