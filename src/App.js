
import './Assets/scss/styles.scss';
import BecomePartner from './BecomePartner';

import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import BusinessLogin from './BusinessLogin.js'
import ContactUs from './ContactUs';
import Login from './Login';
import SignIn from './SignIn';
import Wallet from './Wallet';
import NavbarCDPtoken from './NavbarCDPtoken';
function App() {


  function Layout() {
    return (
      <>
        {/* <Header/> */}
        <Outlet/>
     
      </>

    )
  }
  return (
    <>
   
      
      <Router>
     
      <Routes>
        
        <Route element={<Layout />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/become-partner' element={<BecomePartner />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/business' element={<BusinessLogin/>} />
          <Route path='/wallet' element={<Wallet/>} />
          <Route path='/business-solution' element={<NavbarCDPtoken/>} />
        </Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
