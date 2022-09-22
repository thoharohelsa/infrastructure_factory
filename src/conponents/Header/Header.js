
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { faBell, faBullhorn, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ReleaseNotes from '../ReleaseNotes/ReleaseNotes';
import Notification from '../Notification/Notification';

function Header() {
  const [shoeNotes, setshoeNotes] = useState(false)
  const [showNotification, setshowNotification] = useState(false)

  // Open Release Notes data tab
  function handleReleseNotes() {
    setshoeNotes(!shoeNotes)
    setshowNotification(false)
  }

  // Close Release Notes data tab
  function handleCLose(data) {
    setshoeNotes(!shoeNotes)
  }

  // Open Notification Notes data tab
  function handleNotification() {
    setshowNotification(!showNotification)
    setshoeNotes(false)
  }

  // Close Notification Notes data tab
  function handleNotiCLose(data) {
    setshowNotification(data)
  }

  return (
    <>

      {showNotification ? <Notification showNoti={showNotification} handleNotiCLose={handleNotiCLose} /> : ""}
      {shoeNotes ? <ReleaseNotes shoeNotes={shoeNotes} handleCLose={handleCLose} /> : ""}
      <Navbar collapseOnSelect expand="lg" id="navigation-bar" variant="dark">
        <Container fluid>
          <Navbar.Brand className='fw-bold'><NavLink to="/home" className="text-white text-decoration-none">Infrastructure Factory</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link className={`release ${shoeNotes ? "active-bar" : ""}`} href="javascript:void(0)">
                <div className='header_icon ' onClick={handleReleseNotes}>
                  <FontAwesomeIcon icon={faBullhorn} className="text-white" />
                  <span className='red'>1</span>
                </div>

              </Nav.Link>
              <Nav.Link className={`noti ${showNotification ? "active-bar" : ""}`} href="javascript:void(0)">
                <div className='header_icon' onClick={handleNotification}>
                  <FontAwesomeIcon icon={faBell} className="text-white" title="Show Notifications" />
                </div>
              </Nav.Link>

              <Nav.Link>
                <div className='d-flex justify-content-center align-items-center email_div'>
                  <span className='text-white'>John Doe</span>
                  <FontAwesomeIcon className='text-white ms-2 fs-4' icon={faUserCircle} />
                </div>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;


