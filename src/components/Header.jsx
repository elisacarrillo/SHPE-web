import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
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
            <Nav.Link href="/login">Login / Sign Up</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;