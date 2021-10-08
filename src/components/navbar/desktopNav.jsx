
import { Link } from "react-router-dom";


const DesktopNav =()=>{
   return (
       <ul className="nav-list">
          <li className="logo">wordLab</li>
          <li className="nav-items">
            <Link className="link" to="/">home</Link>
         </li>
          <li className="nav-items">
            <Link className="link" to="/contact">contact</Link>
          </li>
           <li className="nav-items">
            <Link className="login" to="/login">login</Link>
           </li>
           <li className="nav-items">
            <Link className="signup" to="/signup">signup</Link>
         </li>
       </ul>
   )
}




export default DesktopNav;