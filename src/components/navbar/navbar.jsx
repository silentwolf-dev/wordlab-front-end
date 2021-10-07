import './navbar.css'
import './Mobile.css'
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';


function Navbar(){
    return(
       <ul className='nav-list'>
           <li className='logo'>wordLab</li>
           <li className="burger">
               <Hamburger/>
           </li>
           <li className="nav-items">
               <Link className="link" to="/">home</Link>
            </li>
            <li className="nav-items">
               <Link className="link" to="/contact">contact</Link>
            </li>
            <li className="nav-items">
               <Link className="link" to="/aboutus">aboutus</Link>
            </li>
            <li className="nav-items">
               <Link className="signup" to="/signup">signup</Link>
            </li>
       </ul>
    
   
    )
}

export default Navbar;