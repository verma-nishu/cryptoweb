import { useState, React } from 'react'
import token_logo from './Assets/images/token_logo.svg'
import { Button } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessSolution from './BusinessSolution.js'
const NavbarCDPtoken = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='background'>
                <div className='custom-container token-container'>
                    <nav class="navbar-section">
                        <div className='navbar-display'>
                            <div className='header-block'>

                                <a href="#" class="logo-sec"><img src={token_logo} /></a>
                            </div>
                            <div className='list-links'>
                                <ul class="main-nav" id="js-menu">
                                    <li>
                                        <a href="#" class="nav-links-sec">Buy & Farm</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-links-sec">$CDP utility</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-links-sec">$CDP community</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-links-sec">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-links-sec">We are in media</a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-links-sec">EN</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='buy-cpd'><Button>Buy CPD
                            </Button></div>
                            <div className='menu-icon' onClick={() => setToggle(!toggle)}><MenuIcon /></div>

                        </div>
                    </nav>
                  
                    {toggle ?
                        (<>
                            <div className='hide-navbar'>
                                <ul class="show-navbar">
                                    <li className='link-spacing'>
                                        <a href="#" class="nav-links-sec">Buy & Farm</a>
                                    </li>
                                    <li className='link-spacing'>
                                        <a href="#" class="nav-links-sec">$CDP utility</a>
                                    </li>
                                    <li className='link-spacing'>
                                        <a href="#" class="nav-links-sec">$CDP community</a>
                                    </li>
                                    <li className='link-spacing'>
                                        <a href="#" class="nav-links-sec">FAQ</a>
                                    </li>
                                    <li className='link-spacing'>
                                        <a href="#" class="nav-links-sec">We are in media</a>
                                    </li>
                                    <li className='link-spacing'>
                                        <a href="#" class="nav-links-sec">EN</a>
                                    </li>
                                    <div className='buy-cpd button-spacing'><Button>Buy CPD
                                    </Button></div></ul>
                            </div></>) : ("")}
                </div>
             <BusinessSolution/>
            </div>
           
        </>
    )
}

export default NavbarCDPtoken;