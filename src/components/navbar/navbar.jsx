import {
     Navbar,
     Nav,
} from "react-bootstrap";

import { Link } from "react-router-dom";


const NAVBAR = ()=>{
     return(
        <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
            <Navbar.Brand>
               Wordlab
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
               <Nav>
                  <Nav.Link as={Link} to="/">
                      home
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}


export default NAVBAR;