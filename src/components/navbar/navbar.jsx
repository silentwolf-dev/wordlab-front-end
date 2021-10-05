import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <nav>
       <ul className='nav-list'>
           <li className='logo'><h1>wordlab</h1></li>
           <li className='nav-link'>
               <Link className="link" to="/">home</Link>
            </li>
           <li className='nav-link'>
               <Link className="link" to="/">aboutus</Link>
           </li>
           <li className="nav-link">
              <Link className="link" to="/contact-us">contactus</Link>
            </li>
           <li className='nav-link'>
              <Link className="signup" to="/signup" >signup</Link>
           </li>
       </ul>
   </nav>
    )
}

export default Navbar;