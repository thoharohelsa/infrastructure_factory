import React, { useEffect, useState } from 'react';
import { Nav, Row, Tab } from 'react-bootstrap';
import './AuthorRightContent.css';
import reIcon from '../../img/rg-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import AuthorActivities from '../AuthorActivities/AuthorActivities';
import AuthorActRtContent from '../AuthorActRtContent/AuthorActRtContent';
function AuthorRightContent(props) {
    const [isActivity, setIsActivity] = useState(true)

    function toggleActivties() {
        setIsActivity(!isActivity)
    }

    return (
        <>
            <Tab.Container id="authortab" >
                <div class="container-fluid p-0">
                    <Row>
                        <div className='col-md-12 p-0'>
                            <div id="authortab">
                                <Nav variant="tab" className="flex-row pipelinetabs">
                                    {Object.values(props.tablist).map((items, i) => {
                                        return (
                                            Object.values(items).map((item, index) => {
                                                return (
                                                    item.map((val, valin) => {
                                                        return (
                                                            <Nav.Item>
                                                                <Nav.Link eventKey={`tabkey` + i + valin} className={`position-relative d-flex align-items-center justify-content-between ${props.sideNavres !== val ? "" : "active show"}`}><div><img src={reIcon} alt="" className='me-2 pipelineImg' />{val}</div>
                                                                    <div className="dots"></div>
                                                                    <div className="cross" ><FontAwesomeIcon icon={faTimes} /></div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        )
                                                    })

                                                )
                                            })
                                        )
                                    })}
                                </Nav>
                            </div>
                        </div>
                        <div className='col-md-12 p-0'>

                            <Tab.Content>
                                {Object.values(props.tablist).map((items, i) => {
                                    return (
                                        Object.values(items).map((item, index) => {
                                            return (
                                                item.map((val, valin) => {
                                                    return (
                                                        <Tab.Pane eventKey={`tabkey` + i + valin} className={`h-100 border-top ${props.isMenuActive ? "active" : ""}  ${props.sideNavres !== val ? "" : "active"}`}>
                                                            <div className="d-flex h-100">
                                                                <AuthorActivities toggleActivties={toggleActivties} isActivity={isActivity} />
                                                                <div className={`act_content ${isActivity ? "" : "fullwidthActivities"}`}>
                                                                    <AuthorActRtContent tabnames={val} />
                                                                </div>

                                                            </div>
                                                        </Tab.Pane>
                                                    )
                                                })

                                            )
                                        })
                                    )
                                })}


                            </Tab.Content>


                        </div>
                    </Row>
                </div>
            </Tab.Container>
        </>
    );
}

export default AuthorRightContent;