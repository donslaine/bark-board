import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // we should delegate the actual logging out to the users service
        userService.logOut()
        setUser(null)
    }
    return (
        <>
        <nav className=' nav navbar navbar-dark bg-dark d-flex'>
            <div className='d-flex justify-content-start'>
            <Link className= "nav-link text-white" to="/posts">Discover</Link>
            <Link className= "nav-link text-white" to="/profile">Profile</Link>
            </div>
            <span className= "nav-link text-white">BarkBoard</span>
         <Link className= "nav-link text-white d-flex justify-content-end" to='' onClick={handleLogOut}>Log Out</Link>
        </nav>
        <span className='mt-3'>Hello there, { user.name }</span>
        </>
    )
}