import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logo } from './config/Config';

import { title,Logo } from './Config';
const Header = () => {

  return (<>
  <div className='header-container'>
   <Navbar className='navbar-section' expand="xl">
      <Container fluid>
        <Navbar.Brand href="#">  <img src={logo} className='coinspaid-logo'/></Navbar.Brand>
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
           <Link to="/wallet">Wallet</Link>
         </li>
         <li className='link-items solution'>
          <Link to="/business-solution">Business solutions</Link>
        </li>
       <li className='link-items'>
          <Link to="/contact">|</Link>
         </li>
      <li className='link-items became'>
          <Link to="/become-partner">Become a partner</Link>
       </li>
       <li className='link-items'>
         <Link to="/contact-us">Contact</Link>
         </li>
        <li className='link-items'>
        <Link to="/contact">EN</Link>
         </li>
          </Nav>
        
            <Button  className='login-btn'><Link to="/login">LogIn</Link> </Button>
            <Button  className='sign-up-btn'><Link to="/login">Sign Up</Link></Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar></div></>
    // <div className='custom-container header-top'>
    //   <div className='logo'> 
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