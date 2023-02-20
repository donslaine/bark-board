import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (
        <>
        <nav className=' nav navbar navbar-dark bg-dark d-flex'>
            <div className='justify-content-start d-flex'>
            <Link className= "nav-link text-white" to="/posts">Discover</Link>
            <Link className= "nav-link text-white" to="/profile">Profile</Link>
            </div>
            <div className= "nav-link text-white title">BarkBoard</div>
         <Link className= "nav-link text-white justify-content-end" to='' onClick={handleLogOut}>Log Out</Link>
        </nav>
        <span className='mt-3'>Hello there, { user.name }</span>
        </>
    )
}