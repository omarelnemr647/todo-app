import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RxAvatar } from 'react-icons/rx'
import { GrLogout } from 'react-icons/gr'

function NavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><RxAvatar />{props.user}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav  className='log-out' >     
            <Nav.Link eventKey={2} onClick={props.logOut}>
              Log out
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;