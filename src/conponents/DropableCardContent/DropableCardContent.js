import { faAdd, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './DropableCardContent.css'

function DropableCardContent() {
    const [isFields, setFields] = useState(false)
    const [isVar, setisVar] = useState(false)
    const [parameterValues, setparameterValues] = useState([])
    const [varValue, setvarValue] = useState([])

    // increase Parameter row
    function showFields(number) {
        setFields(true)
        setparameterValues([...parameterValues, number])
    }

    // delete parameter row
    const deleteParameterRow = (index) => {
        setparameterValues(parameterValues.filter((each, idx) => idx !== index));
    }
    // increase Parameter row
    function showVar(number) {
        setisVar(true)
        setvarValue([...varValue, number])
    }

    // delete parameter row
    const deleteVariableRow = (val) => {
        setvarValue(varValue.filter((item) => item !== val));
    }


    return (
        <>
            <div id="drapableTab" className='pt-0 activities_properties border-top border-start-0'>
                <Tabs
                    defaultActiveKey="parameter"
                    id="justify-tab-example"
                    justify
                >
                    <Tab eventKey="parameter" title="Parameters" className='parameter_tab'>
                        <div className='py-3 pb-2 pointers' onClick={showFields}><FontAwesomeIcon icon={faAdd} className="me-1 text-primary" /> New</div>
                        {isFields ? <div class="table-responsive table_values">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            </div>
                                        </th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {parameterValues.map((item, index) => {
                                        return (
                                            <tr id={index}>
                                                <td><div class="check_box_area">
                                                    <input class="form-check-input" type="checkbox" placeholder="" id="flexCheckDefault" />
                                                </div></td>
                                                <td> <input type="text" className='px-2 form_fields' placeholder="Name" /> </td>
                                                <td><select aria-label="Default select example" className='form_fields px-2'>
                                                    <option selected>Boolean</option>
                                                    <option value="1">String</option>
                                                    <option value="2">Array</option>
                                                </select></td>
                                                <td> <input type="text" className='px-2 form_fields' placeholder="Value" /> </td>
                                                <td><FontAwesomeIcon icon={faTrashAlt} className="text-primary" onClick={() => deleteParameterRow(index)} /> </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div> : ""}

                    </Tab>
                    <Tab eventKey="variables" title="Variables">
                        <div className='py-3 pb-2 pointers' onClick={showVar}><FontAwesomeIcon icon={faAdd} className="me-1 text-primary" /> New</div>
                        {isVar ? <div class="table-responsive table_values">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            </div>
                                        </th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {varValue.map((item, index) => {
                                        return (
                                            <tr id={index}>
                                                <td><div class="check_box_area">
                                                    <input class="form-check-input" type="checkbox" placeholder="" id="flexCheckDefault" />
                                                </div></td>
                                                <td> <input type="text" className='px-2 form_fields' placeholder="Name" /> </td>
                                                <td><select aria-label="Default select example" className='form_fields px-2'>
                                                    <option selected>Boolean</option>
                                                    <option value="1">String</option>
                                                    <option value="2">Array</option>
                                                </select></td>
                                                <td> <input type="text" className='px-2 form_fields' placeholder="Value" /> </td>
                                                <td><FontAwesomeIcon icon={faTrashAlt} className="text-primary" onClick={() => deleteVariableRow(item)} /> </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div> : ""}
                    </Tab>

                </Tabs>
            </div>

        </>
    );
}

export default DropableCardContent;