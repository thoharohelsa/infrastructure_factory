import React, { useState } from 'react';
import AzureImg from '../../img/azure.svg'
import './ManageServiceForm.css'
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { Baseurl } from '../Baseurl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCompressAlt, faExpandAlt, faExternalLink, faLink, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
function ManageServiceForm(props) {
    const [closeServiceBar, setcloseServiceBar] = useState(props.cusClass)
    const [name, setname] = useState("")
    const [subsname, setsubsname] = useState("")
    const [Description, setDescription] = useState("")
    const [authType, setauthType] = useState("Service Principal")
    const [tenant, settenant] = useState("")
    const [subsid, setsubsid] = useState("");
    const [principalid, setprincipalid] = useState("");
    const [principalkey, setprincipalkey] = useState("");
    const [isDisable, setDisable] = useState(true);
    const [disableCreate, setdisableCreate] = useState(true);
    const [errMsg, seterrMsg] = useState(false);
    const [successMsg, setsuccessMsg] = useState("");
    const [valSuccMsg, setvalSuccMsg] = useState(false);
    const [detailMsg, setdetailMsg] = useState(false);
    const [statusCode, setstatusCode] = useState("");
    const [expandArea, setexpandArea] = useState(false);

    // field Validation
    function fieldValidation() {
        if (subsname !== "" && name !== "" && authType !== "" && tenant !== "" && subsid !== "" && principalid !== "" && principalkey !== "") {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    // remove Error msg
    function removeErrmsg() {
        seterrMsg(false)
    }
    // remove Error msg
    function ExpandError() {
        setexpandArea(!expandArea)
    }
    // show Error detail msg
    function showErrorDetail() {
        setdetailMsg(!detailMsg)
    }
    // hide Error detail msg
    function closeErrDetail() {
        setdetailMsg(false)
    }

    // check field data is valid or not
    async function testValidation(tenant, principalid, principalkey) {
        try {
            var validate = await fetch(`${Baseurl}/api/Validation/Validate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    clientId: principalid,
                    clientSecret: principalkey,
                    tenantId: tenant,
                }),
            })
            const result = await validate.json();
            if (result.success === true) {
                setvalSuccMsg(true)
                seterrMsg(false)
                setTimeout(() => {
                    setvalSuccMsg(false)
                }, "3000")
                setdisableCreate(false)
            }
            else {
                console.log(validate.status)
                seterrMsg(result.message)
                setstatusCode(validate.status)
            }
        } catch (e) {
            console.log(e)
        }

    }

    // create the new services
    async function handleCreateService(subsname, name, Description, subsid, tenant, principalid, principalkey) {
        try {
            var res = await fetch(`${Baseurl}/api/DevOps/CreateServiceConnection`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orgranization: "movvabhushan220",
                    subscription: {
                        subscriptionId: subsid,
                        subscriptionName: subsname
                    },
                    serviceConnectionName: name,
                    description: Description,
                    personalAccessToken: "5xaa5uczbjfcz6xj4wptr56tbm2okbgeopoo2zc6w6nnrr5nmu6q",
                    servicePrinciple: {
                        tenantid: tenant,
                        servicePrincipalId: principalid,
                        servicePrincipalKey: principalkey
                    },
                    endPointProjectReferences: [{
                        projectReference: {
                            id: "8a5fa9cf-4b69-4592-b955-0fa9547a07d9",
                            name: "IAC"
                        }
                    }]
                }),
            })
            const result = await res.json();
            if (result.success === true) {
                setsuccessMsg("Service Connection Created Successfully")
                setcloseServiceBar(false)
                window.location.reload(true)
            }
            else {
                seterrMsg(result.message)
                setTimeout(() => {
                    seterrMsg(false)
                }, "3000")
            }
        } catch (e) {
            console.log(e)
        }

    }


    return (

        <>
            <div className={`h-100 bg-white common-rt-sidebar  ${closeServiceBar ? "showbar" : ""}`} id='manageService_form'>
                <div className="border-bottom pb-4">
                    <h6 className='fw-bold mb-1'>New Linked Service</h6>
                    <p className='d-flex align-items-center mb-0'><img src={AzureImg} alt="Azure Subscription" className='me-2' />
                        Azure Subscription   <Link className="text-decoration-none ms-1" to="/">
                            Learn more <FontAwesomeIcon icon={faExternalLink} />
                        </Link></p>
                </div>
                <form>

                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="name" onChange={(e) => setname(e.target.value)} onKeyUp={fieldValidation} />
                    </div>
                    <div className="mb-3">
                        <label for="Description" className="form-label">Description</label>
                        <textarea className="form-control" id="Description" rows="3" onChange={(e) => setDescription(e.target.value)} onKeyUp={fieldValidation}></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="authenticationType" className="form-label">Authentication Type</label>
                        <select class="form-select " value={authType} aria-label="Default select example" onChange={(e) => setauthType(e.target.value)} onKeyUp={fieldValidation}>
                            <option value="Service Principal">Service Principal</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="tenant" className="form-label">Tenant <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="tenant" aria-describedby="tenant" required onKeyUp={fieldValidation} onChange={(e) => settenant(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="subsid" className="form-label">Subscription ID <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="subsid" aria-describedby="subsid" onKeyUp={fieldValidation} onChange={(e) => setsubsid(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label for="subscriptionname" className="form-label">Subscription Name</label>
                        <input type="text" className="form-control" id="subscriptionname" aria-describedby="name" onChange={(e) => setsubsname(e.target.value)} onKeyUp={fieldValidation} />
                    </div>
                    <div className="mb-3">
                        <label for="principalid" className="form-label">Service Principal Id <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="principalid" aria-describedby="principalid" onKeyUp={fieldValidation} onChange={(e) => setprincipalid(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label for="principalkey" className="form-label">Service Principal Key <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="principalkey" aria-describedby="principalkey" onKeyUp={fieldValidation} onChange={(e) => setprincipalkey(e.target.value)} required />
                    </div>
                </form>
                {successMsg ? <p className="successMsg">{successMsg}</p> : ""}
                <div className="bottomFooter py-2 px-3 border-top align-items-end d-flex justify-content-between">
                    <div>
                        <button className={`continueBtn commonBtn px-3 py-1 ${disableCreate ? "disablebtn" : "bg-primary text-white active-btn "}`} onClick={() => handleCreateService(subsname, name, Description, subsid, tenant, principalid, principalkey)} >Create</button>
                        <button className='cancelbbtn commonBtn px-3 py-1 ms-3' onClick={() => props.handleBackNav(!closeServiceBar)}>Back</button>
                    </div>
                    <div>
                        {valSuccMsg ? <p className='mb-0'><FontAwesomeIcon icon={faCheckCircle} className="text-success h6 mb-0 me-1" />Connection Successful</p> : ""}
                        {errMsg ? <p className='mb-0'><FontAwesomeIcon icon={faTimesCircle} onClick={removeErrmsg} className="text-danger h6 mb-0 me-1" />Connection Failed <span className='text-primary text-decoration-underline' onClick={showErrorDetail}>More</span></p> : ""}
                        <button className={`continueBtn commonBtn px-3 py-1 border-0 bg-transparent ${isDisable ? "disablebtn" : "active-btn"}`} onClick={() => testValidation(tenant, principalid, principalkey)}><FontAwesomeIcon icon={faLink} /> Test Connection</button>
                        <button className='cancelbbtn commonBtn px-3 py-1' onClick={() => props.handleCancel(name, Description, authType, tenant, subsid, principalid, principalkey)}>Cancel</button>
                    </div>

                </div>

                {detailMsg ? <div className={`detail_errMsg shadow bg-white p-3 ${expandArea ? "expand-div" : ""}`}>
                    <div className="err-header d-flex align-items-center justify-content-between">
                        <h5 className='fw-bold'>Error details</h5>
                        <div className='action_btn d-flex align-items-center'>
                            {expandArea ? <FontAwesomeIcon icon={faCompressAlt} className="fw-light me-3" onClick={ExpandError} /> : <FontAwesomeIcon icon={faExpandAlt} className="fw-light me-3" onClick={ExpandError} />}
                            <FontAwesomeIcon icon={faTimes} onClick={closeErrDetail} className="fw-light h5 mb-0" />
                        </div>
                    </div>
                    <div className="err_body mt-4">
                        <div className="d-flex mb-2 codes">
                            <h6>Error code</h6>
                            <p>{statusCode}</p>
                        </div>
                        <div className="d-flex codes">
                            <h6>Details</h6>
                            <p>{errMsg}</p>
                        </div>
                    </div>
                </div>
                    : ""}

                {/*pop up to discard changes  */}
                {props.discardChng ?
                    <><Modal show={props.discardChng}
                        centered
                        size="md">

                        <Modal.Body className='py-4'>
                            <h6 className='fw-bold'>Discard Changes</h6>
                            <p>Your changes are not saved. If you continue, your changes will be lost.</p></Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" className='py-1' onClick={() => props.handlEALLSide(!closeServiceBar, !props.discardChng)}>
                                Discard Changes
                            </Button>
                            <Button variant="primary" className='py-1' onClick={() => props.handleCancelChanges(!props.discardChng)} >
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    </> : ""}
            </div>
        </>
    );
}

export default ManageServiceForm;