import React, { useState } from 'react';

function Notification(props) {
    const [showNoti, setshowNoti] = useState(props.showNoti)
    return (
        <>
            <div className={`h-100 bg-white common-rt-sidebar common-barSide ${showNoti ? "showbar" : ""}`} id='Notification'>
                <h6 className='fw-bold pb-4 border-bottom'>Notifications</h6>

                <div className="bottomFooter py-2 px-3 border-top d-flex justify-content-between">
                    <button className={` commonBtn px-4 py-1  bg-primary text-white`} onClick={() => props.handleNotiCLose(!showNoti)}>Close</button>
                </div>
            </div>
        </>
    );
}

export default Notification;