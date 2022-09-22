import React, { useEffect, useState } from 'react';
import './ManageNewService.css'
import AzureImg from '../../img/azure.svg'
import aws from '../../img/aws.png'
import ManageServiceForm from '../ManageServiceForm/ManageServiceForm';

function ManageNewService(props) {
    const [showNext, setShowNext] = useState(false)
    const [showForm, setshowForm] = useState(false)
    const [DiscardmSG, setDiscardmSG] = useState(false)
    const [closeServiceBar, setcloseServiceBar] = useState(props.cusClass)
    var [cardClick, setcardClick] = useState();
    useEffect(() => {
        setcardClick(1)
    }, [])

    function handleNext() {
        setcardClick(cardClick + 1)
        setShowNext(true)
        if (cardClick === 2) {
            setshowForm(true)
        } else {
            setshowForm(false)
        }
    }

    function handleContinue() {
        setshowForm(true);
    }

    function handleBackNav(data) {
        setshowForm(data);
    }
    function handleCancelChanges(data) {
        setDiscardmSG(data)
    }
    function handlEALLSide() {
        setDiscardmSG(false)
        setshowForm(false);

    }

    // close the tab
    function handleCancel(name, Description, authType, tenant, subsid, principalid, principalkey) {
        if (name !== " " && Description !== " " && authType !== " " && tenant !== " " && subsid !== " " && principalid !== " " && principalkey !== "") {
            setDiscardmSG(true)
        }
        else {
            setshowForm(false);

        }
    }

    return (
        <>
            {showForm ? <ManageServiceForm handlEALLSide={handlEALLSide} cusClass={showForm} handleBackNav={handleBackNav} handleCancel={handleCancel} discardChng={DiscardmSG} handleCancelChanges={handleCancelChanges} /> : ""}
            <div className={`h-100 bg-white common-rt-sidebar ${closeServiceBar ? "showbar" : ""}`} id='managenewServicce'>
                <h6 className='fw-bold pb-4 border-bottom'>New service connection</h6>
                <ul className='list-unstyled mb-0 d-flex flex-wrap  '>
                    <li>
                        <div className={`serviceCard ${showNext ? "blueBorder" : ""}`} id="serviceCard1" onClick={() => handleNext("serviceCard1")}>
                            <img src={AzureImg} alt="Azure Subscription" className='mb-4' />
                            <p>Azure Subscription</p>
                        </div>
                    </li>
                    <li>
                        <div className={`serviceCard pe-none`} id="serviceCard2" disable>
                            <img src={aws} alt="Azure Subscription" className='mb-4' />
                            <p>AWS Subscription</p>
                        </div>
                    </li>
                </ul>
                <div className="bottomFooter py-2 px-3 border-top d-flex justify-content-between">
                    <button className={`continueBtn commonBtn px-3 py-1 ${showNext ? "bluebtn" : "pe-none"} `} onClick={handleContinue}>Continue</button>
                    <button className='cancelbbtn commonBtn px-3 py-1' onClick={() => props.handleHideService(!closeServiceBar)}>Cancel</button>
                </div>
            </div>
        </>
    );
}

export default ManageNewService;