import ProductDetails from "../../Components/Products/ProductDetails";
import TestimonialCardList from "../../Components/Products/TestimonialCardList";
import NavBar from "../../Components/Utility/NavBar";
import SecondNavBar from "../../Components/Utility/SecondNavBar";

export default function ProductDetailsPage() {
  return (
    <div>
      <NavBar />
      <SecondNavBar />
      <ProductDetails />
    </div>
  );
}
