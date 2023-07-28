import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import NavBar from "../../Components/Utility/NavBar"
import SecondNavBar from "../../Components/Utility/SecondNavBar"
import HomeSlider from "../../Components/Home/HomeSlider"
import CategorySlider from "../../Components/Home/CategorySlider"
import CollectionCard from "../../Components/Home/CollectionCard"
import CardListHome from "../../Components/Home/CardListHome"
import Brand from "../../Components/Home/Brand"
import TrendingProduct from "../../Components/Home/TrendingProduct"
import Banner from "../../Components/Home/Banner"
import TrendingCollections from "../../Components/Home/TrendingCollections"
import DownLoadApp from "../../Components/Home/DownLoadApp"
import Testimonial from "../../Components/Utility/Testimonial"
import Footer from "../../Components/Utility/Footer"
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.category);
  const isLoading = useSelector(state => state.category.loading);
  const erorr = useSelector(state => state.category.erorr);
  useEffect(() => {
    dispatch(getAllCategory(`/api/v1/categories`));
}, [dispatch]);
  console.log(categories);
  console.log(isLoading);
  console.log(erorr);
  return (
    <>
      <NavBar/>
      <SecondNavBar/>
      <HomeSlider/>
      <CategorySlider/>
      <CollectionCard/>
      <CardListHome/>
      <Brand/>
      <TrendingProduct/>
      <Banner/>
      <TrendingCollections/>
      <DownLoadApp/>
      <Testimonial/>
      <Footer/>
    </>
  )
}
