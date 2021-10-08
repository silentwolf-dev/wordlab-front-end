import './Navbar.css';
import MobileNavbar from './MobileNav'
import DesktopNav from './desktopNav'
import { useState } from 'react'


function Navbar(){
  const [isMobile, setMobile] = useState(window.innerWidth)

   window.addEventListener("resize", function(){
      setMobile(window.innerWidth)
   })
   if(isMobile <= 500){
      return(<MobileNavbar/>)
   }else{
      return(<DesktopNav/>)
   }
}

export default Navbar;