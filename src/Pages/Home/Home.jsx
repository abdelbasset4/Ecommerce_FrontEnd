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
export default function Home() {
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
    </>
  )
}
