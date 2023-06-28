import { Button } from "@material-tailwind/react"
import NavBar from "../../Components/Utility/NavBar"
import SecondNavBar from "../../Components/Utility/SecondNavBar"
export default function Home() {
  return (
    <>
      <NavBar/>

      <SecondNavBar/>
      <div>Home</div>
      <Button>Button</Button>
    </>
  )
}
