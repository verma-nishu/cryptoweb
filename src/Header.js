import React from 'react'
import '../src/Assets/scss/Header.scss'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/scss/Header.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {

  return (<>
  <div className='container'>
   <Navbar className='navbar-section' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">  <img src='https://static.tildacdn.com/tild3032-3265-4365-b335-353962363338/Ukraine-web.png' className='coinspaid-logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <li className='link-items'>
          <Link to="/">$CPD</Link>
        </li>
        <li className='link-items'>
           <Link to="/blogs">Wallet</Link>
         </li>
         <li className='link-items'>
          <Link to="/contact">Business solutions</Link>
        </li>
       <li className='link-items'>
          <Link to="/contact">|</Link>
         </li>
      <li className='link-items'>
          <Link to="/become-partner">Become a partner</Link>
       </li>
       <li className='link-items'>
         <Link to="/contact-us">Contact</Link>
         </li>
        <li className='link-items'>
        <Link to="/contact">EN</Link>
         </li>
          </Nav>
        
            <Button  className='login'>LogIn </Button>
            <Button  className='sign-up'>Sign Up</Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar></div></>
    // <div className='custom-container header-top'>
    //   <div class='logo'> 
    //     <img src='https://static.tildacdn.com/tild3032-3265-4365-b335-353962363338/Ukraine-web.png' className='coinspaid-logo'/>
    //   </div>
    
    //   <nav className='nav-styles'>
    //     <ul className='list list-unstyled'>
    //       <li className='link-items'>
    //         <Link to="/">$CPD</Link>
    //       </li>
    //       <li className='link-items'>
    //         <Link to="/blogs">Wallet</Link>
    //       </li>
    //       <li className='link-items'>
    //         <Link to="/contact">Business solutions</Link>
    //       </li>
    //       <li className='link-items'>
    //         <Link to="/contact">|</Link>
    //       </li>
    //       <li className='link-items'>
    //         <Link to="/become-partner">Become a partner</Link>
    //       </li>
    //       <li className='link-items'>
    //         <Link to="/contact-us">Contact</Link>
    //       </li>
    //       <li className='link-items'>
    //         <Link to="/contact">EN</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className='d-flex spacing-top'> 
    //     <div className='login-space'>
    //       <Button className='login'>Login</Button>
          
    //     </div>
    //     <div>  <Button className='sign-up'>Sign Up</Button></div>
    //   </div>
    // </div>
  );
}




export default Header;