import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import Pawprint from "../../Images/pawprint.png"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // we should delegate the actual logging out to the users service
        userService.logOut()
        setUser(null)
    }
    return (
        <>
        <nav className='nav navbar d-flex'>
            <div className="logo justify-content-start">
                {/* <img src={Pawprint} alt="pawprint"/> */}
                <div className= "nav-link text-white" id="logo-name">BarkBoard</div>
                <img src={Pawprint} alt="pawprint"/>
            </div>
            <div className='d-flex'>
            <Link className= "nav-link text-white" to="/posts">Discover</Link>
            <Link className= "nav-link text-white" to="/profile">MyBoard</Link>
            </div>
         <Link className= "nav-link text-white justify-content-end" id="" to='' onClick={handleLogOut}>Log Out</Link>
        </nav>
        <span className='mt-3'>Hello there, { user.name }</span>
        </>
    )
}