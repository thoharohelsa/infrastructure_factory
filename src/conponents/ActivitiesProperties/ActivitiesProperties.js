import React, { useState } from 'react';
import './ActivitiesProperties.css'
import { Tab, Tabs } from 'react-bootstrap';
function ActivitiesProperties(props) {
    const [tabname, setTabName] = useState(props.tabNames)


    return (
        <>
            <div id="activities_properties" className='activities_properties' >
                <h6 className='fw-bold'>Properties</h6>
                <Tabs
                    defaultActiveKey="general"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="general" title="General">
                        <form action="" className='general-form'>
                            <div className="form-group mb-3">
                                <label htmlFor="">Name <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control rounded-0 py-1' defaultValue={tabname} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Regions <span className='text-danger'>*</span></label>
                                <select class="form-select form-control" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Tags</label>
                                <textarea name="" id="" className='form-control rounded-0 py-1' ></textarea>
                            </div>
                        </form>
                    </Tab>
                    <Tab eventKey="related" title="Related">
                        <h2>sdf</h2>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}

export default ActivitiesProperties;