import { Link } from 'react-router-dom'
import {useState} from 'react'
import * as userService from '../../utilities/users-service'
import Pawprint from '../../Images/pawprint.png'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    const [navMenu, setNavMenu] = useState(false)

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (
        <>
        <nav className='nav navbar navbar-static-top d-flex' role='navigation'>
            <div className='logo justify-content-start'>
                <div className= 'nav-link text-white' id='logo-name'>BarkBoard</div>
                <img src={Pawprint} alt='pawprint'/>
            </div>
            <div className='menu-container justify-content-end'>
                <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' onClick={() => setNavMenu((prevState) => !prevState)}>
                    <i className='bi bi-list'></i>
                </button>
                </div>
            </div>
        </nav>
                { navMenu ?
                <div className='menuLink collaspe navbar-collaspe' id='bs-example-navbar-collaspe-1'>
                    <ul class='nav navbar-nav'>
                        <li><a><Link className= 'nav-link text-white' to='/posts'>Discover</Link></a></li>
                        <li><a><Link className= 'nav-link text-white' to={`/myboard/${user._id}`}>MyBoard</Link></a></li>
                        <li><a><Link className= 'nav-link text-white' to='' onClick={handleLogOut}>Log Out</Link></a></li>
                    </ul>
                </div> :
                <></>
                }
        <span className='mt-3'>Hello there, { user.name }</span>
        </>

        // <>
        // <nav className='nav navbar d-flex'>
        //     <div className='logo justify-content-start'>
        //         {/* <img src={Pawprint} alt='pawprint'/> */}
        //         <div className= 'nav-link text-white' id='logo-name'>BarkBoard</div>
        //         <img src={Pawprint} alt='pawprint'/>
        //     </div>
        //     <div className='d-flex'>
        //     <Link className= 'nav-link text-white' to='/posts'>Discover</Link>
        //     <Link className= 'nav-link text-white' to='/profile'>MyBoard</Link>
        //     </div>
        //  <Link 
        //     className= 'nav-link text-white justify-content-end' to='' 
        //     onClick={handleLogOut}
        // >Log Out</Link>

        // </nav>
        // <span className='mt-3'>Hello there, { user.name }</span>
        // </>
    )
}