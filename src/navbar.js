import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {FaSearch} from 'react-icons';
import { FaYoutube } from 'react-icons/fa';

function SNavbar() {
  return (
    <Navbar className='mx-4' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://tse1.mm.bing.net/th?id=OIP.sGO6nJjnB5Ke_agYBARLsAHaCC&pid=Api&P=0"  width={250}  alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Form className=" formInp d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="ms-2 navInp "
              aria-label="Search"
            />
            <Button className='navInpbtn' variant=""><i class="fa-solid fa-magnifying-glass"></i> Search</Button>
          </Form>
            <Nav.Link href="#" className='d-flex  navSignMain ' >
              <p><i class="fa-regular fa-user navProf " ></i> </p>
              <p className='navSign' >Sign in <br /> Join for free </p>
            </Nav.Link>

            <Nav.Link href="#" className='d-flex  navMessageMain ' >
              <p><i  class="fa-regular fa-message  navMessage "></i>  <br /> Messages </p>
            </Nav.Link>
            <Nav.Link href="#" className='d-flex  navOrderMain ' >
              <p><i class="fa-brands fa-jedi-order  navOrder "></i>   <br /> Orders </p>
            </Nav.Link>
            <Nav.Link href="#" className='d-flex  navCartMain ' >
              <p><i class="fa-solid fa-cart-shopping  navCart "></i> <br /> Cart </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SNavbar;