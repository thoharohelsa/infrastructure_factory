import React, { useState } from 'react';
import DefaultFactory from '../conponents/DefaultFactory/DefaultFactory';
import { Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faAt, faLink } from '@fortawesome/free-solid-svg-icons'
import RightContent from '../conponents/RightManageContent/RightContent';

function Manage() {
    const [isSidebarOpen, setIsSidebaropen] = useState(false)

    function handleToggleicon() {
        setIsSidebaropen(!isSidebarOpen)
    }
    return (
        <>
            <div id="manageTab" className='position-relative'>
                <DefaultFactory />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <div className="d-flex flex-row page-bottom-content">
                        <div className={`manage-sidebar commonSidebar h-100 ${isSidebarOpen ? "hide_sidebar" : ""}`}>
                            <Nav variant="tabs" className="flex-column border-0">
                                <Nav.Item className='text-end px-3 py-1'>{isSidebarOpen ? <FontAwesomeIcon icon={faAngleDoubleRight} onClick={handleToggleicon} /> : <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={handleToggleicon} />} </Nav.Item>
                                {isSidebarOpen ? "" :
                                    <>
                                        <Nav.Item className='d-flex align-items-center'><h6 className='mx-3 '>Connections</h6></Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><FontAwesomeIcon icon={faLink} /> Service Connections</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item> <h6 className='mx-3 '>Author</h6></Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><FontAwesomeIcon icon={faAt} /> Global Parameter</Nav.Link>
                                        </Nav.Item>
                                    </>
                                }
                            </Nav>
                        </div>
                        <div className="manage_main_content">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <RightContent />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h6 className='pt-3 fw-bold'>Global Parameter</h6>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </div>

        </>
    );
}

export default Manage;