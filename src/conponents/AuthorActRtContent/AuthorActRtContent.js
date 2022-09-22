import React, { useState } from 'react';
import './AuthorActRtContent.css'
import { faArrows, faBoltLightning, faCheck, faClone, faDashboard, faDownload, faEdit, faEllipsis, faFileAlt, faFileExport, faFileLines, faPlay, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActivitiesProperties from '../ActivitiesProperties/ActivitiesProperties';
import DropableCardContent from '../DropableCardContent/DropableCardContent';
import CardDraggableCanvas from '../CardDraggableCanvas/CardDraggableCanvas';


function AuthorActRtContent(props) {
    const [actionMenu, setActionMenu] = useState(false)
    const [isProperties, setIsProperties] = useState(true)
    const [showjson, setshowjson] = useState(false)

    //toggle action menu
    function handleAction() {
        setActionMenu(!actionMenu)
    }
    //show properties 
    function handleProperties() {
        setIsProperties(!isProperties)
    }

    function toggleJsonData() {
        setshowjson(!showjson)
    }
    return (
        <>
            <div className='act_TOP_BAR d-flex border-bottom  justify-content-between p-2'>
                <ul className='d-flex align-items-center list-unstyled mb-0 validation_list'>
                    <li className='me-3'><FontAwesomeIcon icon={faCheck} className="text-primary me-1 fw-light" /> Validate</li>
                    <li className='me-3'><FontAwesomeIcon icon={faPlay} className="text-primary me-1 fw-light" /> Debug</li>
                    <li><FontAwesomeIcon icon={faBoltLightning} className="text-primary me-1 fw-light" /> Add Trigger</li >
                </ul>
                <ul className='d-flex align-items-center list-unstyled mb-0 position-relative '>
                    <li className='me-3 text-primary' onClick={toggleJsonData}> {"{ }"}</li>
                    <li className='me-3' onClick={handleProperties}><FontAwesomeIcon icon={faFileLines} className="text-primary" /> </li>
                    <li onClick={handleAction}><FontAwesomeIcon icon={faEllipsis} className="text-primary" /> </li >
                    {actionMenu ? <ul className="action-menu list-unstyled mb-0 bg-white">
                        <li><FontAwesomeIcon icon={faDashboard} className="me-2 text-primary" />Monitor</li>
                        <li><FontAwesomeIcon icon={faClone} className="me-2 text-primary" />Clone</li>
                        <li><FontAwesomeIcon icon={faEdit} className="me-2 text-primary" />Rename</li>
                        <li><FontAwesomeIcon icon={faArrows} className="me-2 text-primary" />Move item</li>
                        <li><FontAwesomeIcon icon={faFileExport} className="me-2 text-primary" />Export Template</li>
                        <li><FontAwesomeIcon icon={faDownload} className="me-2 text-primary" />Download supports</li>
                        <li><FontAwesomeIcon icon={faTrashAlt} className="me-2 text-primary" />Delete</li>
                    </ul> : ""
                    }
                </ul>
            </div>
            <div className="middle_act_content overflow-hidden d-flex">
                <div className={`dropable_area ${isProperties ? "" : "fullWidthshow"}`}>
                    <div className='cardDraggableCanvas'>
                        <CardDraggableCanvas />
                    </div>
                    <div className="dropable-card-content">
                        <DropableCardContent />
                    </div>
                </div>
                {isProperties ? <ActivitiesProperties tabNames={props.tabnames} isProperties={isProperties} /> : ""}
            </div>
        </>
    );
}

export default AuthorActRtContent;