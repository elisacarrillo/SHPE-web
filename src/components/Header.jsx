import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { auth } from '../base';
import './Header.css'
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
function Header() {
    const [signedIn, setSignedIn] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setSignedIn(true);

          
          // ...
        } else {
          // User is signed out
        //   navigate('/login');
        //   window.location.reload();
          // ...
        }
      });
       const logout = () => {
            auth.signOut();
            window.location.reload("/signin")
        };
 
    return (
        <Navbar className="color-nav" expand="lg" sticky='top'>

        <Navbar.Brand href="/" className='spacing'>SHPE UIUC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Get Involved</Nav.Link>
            <Nav.Link href="/">Calendar</Nav.Link>
            <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
            <div>
                {
                    signedIn
                    ? (
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                    )
                    :
                    (
                        <Nav.Link href="/login">Login / Sign Up</Nav.Link>
                    )
                }
            </div>
            
        </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;