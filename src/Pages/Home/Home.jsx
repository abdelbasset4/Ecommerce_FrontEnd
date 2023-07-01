import NavBar from "../../Components/Utility/NavBar"
import SecondNavBar from "../../Components/Utility/SecondNavBar"
import HomeSlider from "../../Components/Home/HomeSlider"
import CategorySlider from "../../Components/Home/CategorySlider"
import CollectionCard from "../../Components/Home/CollectionCard"
import CardListHome from "../../Components/Home/CardListHome"
export default function Home() {
  return (
    <>
      <NavBar/>
      <SecondNavBar/>
      <HomeSlider/>
      <CategorySlider/>
      <CollectionCard/>
      <CardListHome/>
    </>
  )
}
