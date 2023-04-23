
import './Assets/scss/styles.scss';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";



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
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
