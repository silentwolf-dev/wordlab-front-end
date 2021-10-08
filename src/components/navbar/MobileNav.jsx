import './Mobile.css'
import { useState } from "react"
import Hamburger from "../Hamburger"
import { Link } from "react-router-dom"
const MobileNavbar = ()=>{

    const [isToggle, setToggle] = useState(false)

    const handleToggle = ()=> {
        setToggle(!isToggle)
    }

    return (
        <ul className='nav-list' >
        <li className='logo'>wordLab</li>
        <li className="burger">
            <Hamburger handleToggle={handleToggle}/>
        </li>
       { isToggle && <>
        <li className="nav-items" onClick={handleToggle}>
            <Link className="link" to="/">home</Link>
         </li>
        <li className="nav-items" onClick={handleToggle}>
            <Link className="link" to="/contact">contact</Link>
         </li>
         <li className="nav-items" onClick={handleToggle}>
            <Link className="login" to="/login">login</Link>
         </li>
         <li className="nav-items" onClick={handleToggle}>
            <Link className="signup" to="/signup">signup</Link>
         </li>
      </>}
    </ul>
    )
}

export default MobileNavbar;