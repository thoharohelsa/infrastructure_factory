import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Login from './conponents/LoginPage/Login';
import Home from './pages/Home';
import Author from './pages/Author';
import Manage from './pages/Manage';
import Monitor from './pages/Monitor';
import Sidebar from './conponents/SidebarComp/Sidebar';
import Header from './conponents/Header/Header';
import { useState } from 'react';
import Design from './pages/Design';

function App() {
  const [showFullMenu, setshowFullMenu] = useState(true);

  const navigate = useNavigate();
  var location = useLocation();
  location = location.pathname

  // toggle sidebar
  function showSidebar() {
    setshowFullMenu(!showFullMenu)
  }
  // on click login button in login page fucntion call
  function loginfnc(childData) {
    navigate('/author');
  }

  return (
    <>

      {location === "/login" || location === "/" ?
        <Routes>
          <Route path='/' element={<Login loginfnc={loginfnc} />} />
          <Route path='/login' element={<Login loginfnc={loginfnc} />} />
        </Routes> :
        <main>
          <Header />
          <div className={`page-wrapper d-flex ${showFullMenu ? "menuhide" : ""}`}>
            <Sidebar sidebar={showSidebar} cusClass={showFullMenu} />
            <div className="page_content-container">
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/author' element={<Author />} />
                <Route path='/manage' element={<Manage />} />
                <Route path='/monitor' element={<Monitor />} />
                <Route path='/design' element={<Design />} />
              </Routes>
            </div>
          </div>
        </main>
      }
    </>
  );
}

export default App;
