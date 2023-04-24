import React from 'react'
import '../src/Assets/scss/Header.scss'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
const Header = () => {

  return (
    <div className='custom-container header-top'>
      <div class='logo'> 
        <img src='https://static.tildacdn.com/tild3032-3265-4365-b335-353962363338/Ukraine-web.png' className='coinspaid-logo'/>
      </div>
    
      <nav className='nav-styles'>
        <ul className='list list-unstyled'>
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
        </ul>
      </nav>
      <div className='d-flex spacing-top'> 
        <div className='login-space'>
          <Button className='login'>Login</Button>
          
        </div>
        <div>  <Button className='sign-up'>Sign Up</Button></div>
      </div>
    </div>
  );
}




export default Header;