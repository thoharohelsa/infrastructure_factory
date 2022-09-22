import React, { useState } from 'react';
import DefaultFactory from '../conponents/DefaultFactory/DefaultFactory';
import { Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faLineChart, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
function Monitor() {

    const [isSidebarOpen, setIsSidebaropen] = useState(false)

    function handleToggleicon() {
        setIsSidebaropen(!isSidebarOpen)
    }
    return (
        <>
            <div id="manageTab">
                <DefaultFactory />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <div className="d-flex flex-row page-bottom-content">
                        <div className={`manage-sidebar commonSidebar h-100 ${isSidebarOpen ? "hide_sidebar" : ""}`}>
                            <Nav variant="tabs" className="flex-column border-0">
                                <Nav.Item className='text-end px-3 py-1'>{isSidebarOpen ? <FontAwesomeIcon icon={faAngleDoubleRight} onClick={handleToggleicon} /> : <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={handleToggleicon} />} </Nav.Item>
                                {isSidebarOpen ? "" :
                                    <>
                                        {/* <Nav.Item className='d-flex align-items-center'><h6 className='ms-3 '>Connections</h6></Nav.Item> */}
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><FontAwesomeIcon icon={faChartBar} className="me-2" />Dashboard</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item> <h6 className='mx-3 '>Runs</h6></Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><FontAwesomeIcon icon={faLineChart} className="me-2" />Pipeline runs</Nav.Link>
                                        </Nav.Item>
                                    </>
                                }
                            </Nav>
                        </div>
                        <div className="manage_main_content">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </div>

        </>
    );
}

export default Monitor;