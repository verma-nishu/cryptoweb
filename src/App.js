
import './Assets/scss/styles.scss';
import BecomePartner from './BecomePartner';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import ContactUs from './ContactUs';
import Login from './Login';
import SignIn from './SignIn';

function App() {


  function Layout() {
    return (
      <>
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
        </Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
