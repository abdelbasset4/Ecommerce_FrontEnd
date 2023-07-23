import NavBar from '../../Components/Utility/NavBar'
import Profile from '../Dashboard/Profile'
export default function ProfilePage() {
  return (
    <div>
        <NavBar/>
        <div className='px-4 mt-5'>
        <Profile/>
        
        </div>
    </div>
  )
}
